import { useEffect, useState } from "react";


const UseFetchData = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://my-json-server.typicode.com/saransk03/watch-json/products"
        );
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    return { isLoading, data };

}

export default UseFetchData



