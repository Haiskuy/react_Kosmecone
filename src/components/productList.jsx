import axios from "axios";
import Card_product from "./card-product";
import { useEffect, useState } from "react";

export default function ProductList() {
    const [Products, SetProducts] = useState([]);
    
        
    useEffect(() => {
        axios.get('http://localhost:8000/product')
            .then((response) => {
                
                SetProducts(response.data.data);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            });
    }, []);
    
    
    return (
        <>
            {Products.map((product) => {
                console.log(product)
                return <Card_product key={product.idproduct} product={product}  />
            })}
        </>
    )
}
