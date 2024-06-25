import React, { useEffect,useState } from 'react'

const Fetch = () => {
    const[datas,setDatas]=useState([]);
    useEffect(()=>{
        const fetchdetails=async()=>{
            const details=await fetch("https://jsonplaceholder.typicode.com/posts");
            const result=await details.json();
            console.log(result);
            setDatas(result);
        }

        fetchdetails();
    },[])

  return (
    <div>Hii
        <center>
        {
           datas.map((user) =>(
           <li >{user.title}</li>
           ))

        }
        </center>
    </div>
  )
}

export default Fetch;