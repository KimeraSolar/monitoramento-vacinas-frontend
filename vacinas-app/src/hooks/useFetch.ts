import { useEffect, useState } from "react";

export default function useFetch (url : string) {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
   
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            seterror(data.error)
            setdata(data)
            setloading(false)
        })
        .catch((error) => {
          seterror("Failed to fetch")
          setdata(error)
          setloading(false)
        })
    }, [url]);
   
    return { data, loading, error };
  };