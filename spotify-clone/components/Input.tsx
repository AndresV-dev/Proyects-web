import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputPorps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input = forwardRef<HTMLInputElement, InputPorps>(({ className, disabled, type, ...props}
    , ref) => {
        return (
        <input 
        className={twMerge(`flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-3 text-sm file:border.0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none`, className)} 
        disabled={disabled} 
        type={type} 
        ref={ref} 
        {...props} />
    )
});

export default Input;