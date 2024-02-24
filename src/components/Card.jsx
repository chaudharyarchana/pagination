import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EachCard from "./EachCard"

const Card = () => {
    const[data,setData] = useState(null)
    const[item,setPage] = useState(null)
    const randomNumber = Math.floor(Math.random() * 200) + 1;

    async function fetchData(){
            try{
            let Jsondata = await fetch('https://swapi.dev/api/people/')
            Jsondata = await Jsondata.json()

            setData(Jsondata.results)
            let pages = Jsondata.results[0]
             setPage(pages)
             console.log(item)
            } catch(error){
               console.log(error)
            }    
        
        
      }

    useEffect(()=>{
        
          fetchData()
    },[])

    if(data === null){
        return <h1>Loading...</h1>
    }

    const handleChange = (e,p) =>{
        if(data){
            let renderData = data[p-1]
            console.log(renderData)

            setPage(renderData)
        }
    }
    
  return <div className="text-yellow-500">
  {
    
     <EachCard name={item.name} eye_color={item.eye_color} birth_year={item.birth_year} gender={item.gender} hair_color={item.hair_color} height ={item.height} skin_color={item.skin_color} srcImg={`https://picsum.photos/id/${randomNumber}/600/300`}/>
         
    
  }
   <Stack spacing={2} className="w-fit mx-auto mt-5">
      <Pagination
        count={10}
        onChange={handleChange}
      />
    </Stack>
  </div>;
};
export default Card;