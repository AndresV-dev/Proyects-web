import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer";
import useSuscribeModal from "./useSuscribeModal";

import { Song } from "../types";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {

    const subscribeModal = useSuscribeModal();
    
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user, subscription } = useUser();

    const onPlay = (id: string) => {
        if (!user) {
            authModal.onOpen();
            return;
        }

        if(!subscription){
            subscribeModal.onOpen();
        }

        player.setId(id);
        player.setIds(songs.map(song => song.id));


    }

    return onPlay;
}

export default useOnPlay;