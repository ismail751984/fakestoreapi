import React from 'react'
import { useState,useEffect } from 'react';
export default function Products() {
    const [apiProduct, setApiProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      const pro = async () => {
        setIsLoading(true);
        try {
          let response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          let data = await response.json();
          setApiProducts(data); 
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setIsLoading(false); 
        }
      };
      pro();
    }, []);

  return (
    <>
      {isLoading ? (
         <div className="d-flex justify-content-center">
       <div className="spinner-grow text-primary" role="status">
         <span className="sr-only">Loading...</span>
       </div>
     </div>
    
      ) : (
        <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
        {apiProduct.map((p,i)=>(
        <div className="col-lg-4 col-md-6 pb-1" key={i}>
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
                <p className="text-right">{p.category}</p>
                <a href="" className="cat-img position-relative overflow-hidden mb-3">
                    <img className="img-fluid" src={p.image} alt=""/>
                   
                </a>
                <h5>{p.price}$</h5>
                <p className="font-weight-semi-bold m-0">{p.description}</p>
            </div>
        </div>
     
     ))}
      
      </div></div>
      )}
     </>
  )
}
