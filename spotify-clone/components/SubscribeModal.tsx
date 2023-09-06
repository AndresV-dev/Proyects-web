"use client";

import { Price, ProductWithPrice } from "@/types";
import Modal from "./Modal";
import Button from "./Button";
import useSuscribeModal from "@/hooks/useSuscribeModal";

import { useState, useEffect } from "react"
import { toast } from "react-hot-toast";
import { postData } from "@/libs/helpers";
import { getStripe } from "@/libs/StripeClient";
import { useUser } from "@/hooks/useUser";

interface SubscribeModalProps {
  products: ProductWithPrice[];
}

const formatPrice = (price: Price) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0,
  }).format((price?.unit_amount || 0) / 100);
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({products}) => {

  const subscribeModal = useSuscribeModal();
  const { user, isLoading, subscription} = useUser();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const onChange = (open: boolean) => {
    if(!open){
      subscribeModal.onClose();
    }
  }

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    console.log(price);
    if(!user){
      setPriceIdLoading(undefined)
      return toast.error("You must be logged in to subscribe");
    }

    if(subscription){
      setPriceIdLoading(undefined)
      return toast.error("You are already subscribed");
    }
    try{
      const { sessionId } = await postData({ url: "/api/create-checkout-session", data: { price } });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({sessionId});

    }catch(error: any){
      setPriceIdLoading(undefined)
      toast.error(error.message);
    }finally {
      setPriceIdLoading(undefined)
    }
  };

  let content = (
    <div className="text-center">
      No Products Available
    </div>
  )

  if(products.length) {
    content = (
      <div>
        {products.map((product) => {
         if(!product.prices?.length){
          return (
            <div key={product.id} className="text-center">
              No Prices Available
            </div>
          )
        } 

        return product.prices.map((price) => (
          <Button key={price.id} onClick={() => handleCheckout(price)} disabled={isLoading || price.id === priceIdLoading} className="mb-4">
            {`Subscribe for ${formatPrice(price)} MXN a ${price.interval}`}
          </Button>
        ))

        })}
      </div> 
    )
  }

    return (
    <Modal title="Only for Premium Users" description="Listen to music with Spotify Premium" isOpen={subscribeModal.isOpen} onChange={onChange}>
      {content}
    </Modal>
  );
}

export default SubscribeModal;