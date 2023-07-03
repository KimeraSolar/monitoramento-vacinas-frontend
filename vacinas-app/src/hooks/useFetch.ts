import { useEffect, useState } from "react";

export default function useFetch<T>(url : string) {
    const [data, setdata] = useState<T>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
   
    useEffect(() => {
        fetch(process.env.REACT_APP_MONITORAVAX_URL + url)
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