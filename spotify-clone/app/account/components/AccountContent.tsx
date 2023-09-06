"use client";

import useSuscribeModal from "@/hooks/useSuscribeModal";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { postData } from "@/libs/helpers";
import { toast } from "react-hot-toast";
import Button from "@/components/Button";

const AccountContent = () => {
    const router = useRouter();
    const subscribeModal = useSuscribeModal();
    const { isLoading, subscription, user} = useUser();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!isLoading && !user){
            router.replace("/")
        }
    }, [isLoading, user, router])

    const redirectToCustomerPortal = async () => {
        setLoading(true)
        try{
            const {url, error} =  await postData({url: '/api/create-portal-link'});
            window.location.assign(url);
        }catch(error: any){
            if(error)
                toast.error(error.message);
        
        }
        setLoading(false);
    }

    return ( 
        <div className="mb-7 px-6">
            {!subscription && 
            (<div className="flex flex-col gap-y-4">
                <Button onClick={subscribeModal.onOpen} className="w-[300px]">
                    Subscribe
                </Button>
            </div> )}

            {subscription && 
            (<div className="flex flex-col gap-y-4"> 
                <p> You Are Currently Subscribed To: {subscription?.prices?.products?.name} Plan.</p>
                <Button disabled={loading || isLoading} onClick={redirectToCustomerPortal} className="w-[300px]">
                    Open Customer Portal
                </Button>
            </div>)}
        </div>
     );
}
 
export default AccountContent;