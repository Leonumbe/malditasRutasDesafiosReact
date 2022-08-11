import React, {useEffect, useState} from "react";
import CardsSelected from "../ItemDetail"
import getProducts from "../../Helpers/indexDetail";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer(){
    const idUrl = useParams().id
    const [data, setData] = useState({});
    
    useEffect(() => {
        getProducts({idUrl})
        .then((respuesta) => setData(respuesta))
        .catch((error)=> alert(error))
    }, []);
    return(
            <section className="title" id="Home">
                <div className="max-width ">
                    <h1 className="title">Selection</h1>
                    <div className= " d-flex flex-row flex-wrap">
                          
                        <CardsSelected 
                           key={data.id}
                           id={data.id}
                           name={data.name}
                           image={data.image}
                           rating={data.rating}
                           productType={data.productType}
                           price={data.price}
                           description={data.description}
                        />
                    </div>
                </div>
            </section>
        )

}