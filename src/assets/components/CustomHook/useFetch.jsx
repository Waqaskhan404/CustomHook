import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState([]);

    useEffect(function(){
        async function fetchData() {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data)
            console.log(data)
          }
          catch (error) {
            console.error("Error fetching data:", error);
            throw error;
          }
        }
        fetchData();
      },[])
  return [data]
}

export default useFetch