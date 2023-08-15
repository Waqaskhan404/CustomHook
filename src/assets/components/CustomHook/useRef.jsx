import React, { useEffect, useState } from 'react'

const useRef = () => {
    const [data,setData]=useState([]);

    useEffect(function(){
        async function fetchData() {
          try {
            const response = await fetch("https://fakestoreapi.com/products");
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

export default useRef