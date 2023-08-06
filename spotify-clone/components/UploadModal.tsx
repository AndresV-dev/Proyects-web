"use client"
import useUploadModal from "@/hooks/useUploadModal"

import Modal from "./Modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import { toast } from "react-hot-toast"
import { useUser } from "@/hooks/useUser"
import uniqid from "uniqid"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"

const UploadModal = () => {
    const uploadModal = useUploadModal()
    const supabaseClient = useSupabaseClient();
    const router = useRouter();    
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();
    const {register, handleSubmit, reset} = useForm<FieldValues>({
        defaultValues: {
            title: "",
            author: "",
            song: null,
            image: null,
        }
    })

    const onchange = (open: boolean) => {
        if(!open){
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try{
            setIsLoading(true);
            const imageFile = values.image?.[0];
            const songFIle = values.song?.[0];

            if(!imageFile || !songFIle || !user){
                toast.error("Please select a song and image")
                return;
            }
            const uniqueID = uniqid(); 

            //Upload Song
            const { data: songData, error: songError } = await supabaseClient.storage.from('songs')
            .upload(`song-${values.title}-${uniqueID}`, songFIle, {cacheControl: '3600', upsert: false});

            if(songError){
                setIsLoading(false);
                return toast.error("Failed song Upload.")
            }

            //Upload Image
            const { data: imageData, error: imageError } = await supabaseClient.storage.from('images')
            .upload(`image-${values.title}-${uniqueID}`, imageFile, {cacheControl: '3600', upsert: false});

            if(imageError){
                setIsLoading(false);
                return toast.error("Failed image Upload.")
            }

            const { error: supabaseError } = await supabaseClient.from('songs').insert({
                title: values.title,
                author: values.author,
                song_path: songData.path,
                image_path: imageData.path,
                user_id: user.id,
                created_at: new Date()
            });

            if(supabaseError){
                setIsLoading(false);
                return toast.error("Something went wrong")
            }

            router.refresh();
            setIsLoading(false);
            toast.success("Song Uploaded")
            uploadModal.onClose();
        }catch(e){
            toast.error("Something went wrong")
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <Modal title="Add a Song" description="Upload an Mp3 File" isOpen={uploadModal.isOpen} onChange={onchange}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                <Input id="title" disabled={isLoading} {...register("title", {required: true})} placeholder="Song title" />
                <Input id="author" disabled={isLoading} {...register("author", {required: true})} placeholder="Song author" />
                <div>
                    <div className="pb-1">Select a song file</div>
                    <Input id="song" type="file" accept=".mp3" disabled={isLoading} {...register("song", {required: true})} />
                </div>
                <div>
                    <div className="pb-1">Select an image</div>
                    <Input id="image" type="file" accept="image/*" disabled={isLoading} {...register("image", {required: true})} />
                </div>
                <Button type="submit" disabled={isLoading}>
                    Create
                </Button>
            </form>
        </Modal>
    )
}

export default UploadModal;