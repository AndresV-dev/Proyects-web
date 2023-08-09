import { Song } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const getSongs = async (): Promise<Song[]> => { 
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const {data, error} = await supabase.from('songs').select('*')

    if(error){
        console.log(error)
        return [];
    }

    return (data as any) || [];
}

export default getSongs;