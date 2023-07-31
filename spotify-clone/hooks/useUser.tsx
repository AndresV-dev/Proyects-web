import { User } from "@supabase/auth-helpers-nextjs"
import { useSessionContext , useUser as useSupaUser} from "@supabase/auth-helpers-react";

import { UserDetails, Suscription } from "@/types"
import { createContext, useEffect, useState, useContext } from "react";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    suscription: Suscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export interface Props {
    [propName: string]: any;
}

export const UserContextProvider = (props: Props) => {
    const {session, isLoading: isLoadingUser, supabaseClient:supabase} = useSessionContext();

    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [suscription, setSuscription] = useState<Suscription | null>(null);

    const getUserDetails = () => supabase.from('users').select('*').eq('id', user?.id).single();
    const getSuscription = () => supabase.from('suscriptions').select('*, prices(*, products(*))').in('status',['trialing', 'active']).single();

    useEffect(() => {
        if(user && !isLoadingData && !userDetails && !suscription){
            setIsLoadingData(true);

            Promise.allSettled([getUserDetails(), getSuscription()]).then(async (results) => {
                const userDetails = results[0].status === 'fulfilled' ? results[0].value.data : null;
                const suscription = results[1].status === 'fulfilled' ? results[1].value.data : null;

                setUserDetails(userDetails);
                setSuscription(suscription);
                setIsLoadingData(false);   
            }
            )
        } else if(!user && !isLoadingUser && !isLoadingData){
            setUserDetails(null);
            setSuscription(null);
            setIsLoadingData(false);
        }
    },[user, isLoadingUser]);

    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingData || isLoadingUser,
        suscription
    };

    return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserContextProvider');
    }
    return context;
  }