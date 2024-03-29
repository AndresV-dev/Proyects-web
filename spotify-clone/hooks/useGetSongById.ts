import { useSessionContext } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { useEffect, useMemo, useState } from "react";
import { Song  } from "@/types";

const useGetSongById = (id: string ) => {
    const [isLoading, setIsLoading] = useState(false);
    const [song, setSong] = useState<Song | undefined>(undefined);
    const {supabaseClient} = useSessionContext()

    useEffect(() => {
        if(!id){
            return;
        }
        setIsLoading(true);

        const getSong = async () => {
            const {data, error} = await supabaseClient.from('songs').select('*').eq('id', id).single();
            if(error){
                toast.error(error.message);
            }

            setSong(data);
            setIsLoading(false);

        }
        getSong();
}, [id, supabaseClient]);

    return useMemo(() => ({
        isLoading,
        song
    }), [isLoading, song]);

}

export default useGetSongById;