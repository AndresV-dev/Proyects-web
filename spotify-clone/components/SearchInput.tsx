"use client"

import qs from "query-string";

import useDebounce from "@/hooks/useDevounce";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; 

import Input from "./Input";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const devouncedValue = useDebounce<string>(value, 500)

    useEffect(() => {
        const query = {
            title: devouncedValue,
        };

        const url = qs.stringifyUrl({
            url: "/search",
            query,
        })

        router.push(url)
    }, [devouncedValue, router])

    return ( 
        <Input placeholder="What do you want to listen to" value={value} onChange={(e) => setValue(e.target.value)}/>
     );
}
 
export default SearchInput;