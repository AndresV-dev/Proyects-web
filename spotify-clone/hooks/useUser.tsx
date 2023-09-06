import { User } from "@supabase/auth-helpers-nextjs"
import { useSessionContext , useUser as useSupaUser} from "@supabase/auth-helpers-react";

import { UserDetails, Subscription } from "@/types"
import { createContext, useEffect, useState, useContext } from "react";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export interface Props {
    [propName: string]: any;
}

export const UserContextProvider = (props: Props) => {
    const {session, isLoading: isLoadingUser, supabaseClient:supabase} = useSessionContext();

    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const getUserDetails = () => supabase.from('users').select('*').eq('id', user?.id).single();
    const getSubscription = () => supabase.from('subscriptions').select('*, prices(*, products(*))').in('status',['trialing', 'active']).single();

    useEffect(() => {
        if(user && !isLoadingData && !userDetails && !subscription){
            setIsLoadingData(true);

            Promise.allSettled([getUserDetails(), getSubscription()]).then(async (results) => {
                const userDetails = results[0].status === 'fulfilled' ? results[0].value.data : null;
                const subscription = results[1].status === 'fulfilled' ? results[1].value.data : null;

                setUserDetails(userDetails);
                setSubscription(subscription);
                setIsLoadingData(false);   
            }
            )
        } else if(!user && !isLoadingUser && !isLoadingData){
            setUserDetails(null);
            setSubscription(null);
            setIsLoadingData(false);
        }
    },[user, isLoadingUser]);

    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingUser ||isLoadingData ,
        subscription
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