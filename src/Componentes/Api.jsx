
import {useState, useEffect} from "react";

const Api=()=> {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch("https://spapi.dev/api/characters")
            .then((response)=>response.json())
            .then((responseData)=>{
                setData(responseData.data)
            })
            .catch((error)=>{
                console.error("Error al obtener los datos de la Api de South Park", error)
            });
    },[])
    return(
        <>
            {
                data.map(item=>(
                    <div key={item.id}>{item.name}</div>
                )
                )
            }
        </>
    )
}

export default Api