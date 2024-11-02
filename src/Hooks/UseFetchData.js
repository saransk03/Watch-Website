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
          "https://run.mocky.io/v3/fd90c45f-ea41-404f-92a7-50e20b20d7b9"
        );
        const data = await res.json();
        setData(data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    return { isLoading, data };

}

export default UseFetchData