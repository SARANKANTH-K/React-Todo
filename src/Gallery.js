import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Gallery = () => {
  const[name,setName]=useState(" ");
  const[about,setAbout]=useState(" ");
  const[imageUrl,setImageUrl]=useState(" ");
  const[datas,setDatas]=useState([]);
  const[id,setId]=useState(null);
  const handlePost=()=>
  {
     axios.post("http://localhost:3001/users",{name,about,imageUrl})
     .then(()=>{
        alert("Data saved Successfully");
        // setName(" ");
        // setAbout(" ");
        // setImageUrl(" ");
     })
     .catch((e)=>{
        console.log("error : ${e}")
     })
  }
  useEffect(()=>{
    axios.get("http://localhost:3001/users")
    .then((res)=>{
        setDatas(res.data);
        console.log(res);
    })
    .catch((e)=>{
        console.log("error: ${e}")
    })
  },[])
//   const handleRead=()=>{
//     axios.get("http://localhost:3001/users")
//     .then((res)=>{
//         setDatas(res.data);
//         console.log(res);
//     })
//     .catch((e)=>{
//         console.log("error: ${e}")
//     })
//   }
   const handleEdit=(userid)=>{
        setId(userid.id);
        setName(userid.name);
        setAbout(userid.about);
        setImageUrl(userid.imageUrl);
   }
   const handleUpdate=()=>{
    axios.put(`http://localhost:3001/users/${id}`,{name,about,imageUrl})
    console.log("update")
    .then(()=>{
        alert("Updated Successfully");
    })
    .catch(()=>{
        console.log("error: ${e}")
    })
   }

   const handleDelete=(id)=>{
    //console.log("Hello")
        axios.delete(`http://localhost:3001/users/${id}`)
        

        .then(()=>{
            alert("Deleted Successfully");
            setDatas(datas.filter(data=>
                data.id!==id
            ))
        })
        .catch((e)=>{
            console.log("Error:${e}");
        })
   }
  
  return (
      <div>
        <center>
            {/* <form onSubmit={id? handleUpdate: handleDelete}> */}
        Name :
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        About :
        <input type="text" value={about} onChange={(e)=>{setAbout(e.target.value)}}/>
        ImageUrl :
        <input type="text" value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
        <button onClick={handlePost}>ADD</button>
        {/* <button onClick={handleRead}>READ</button> */}
        {/* </form> */}
        <button onClick={handleUpdate}>{id? "UPDATE" :"Delete"}</button>
        {
            datas.map((user)=>(
                <li key={user.id}>
                    Name :{user.name}
                    <br></br>
                    About :{user.about}
                    <br></br>
                    Image : <img src={user.imageUrl} alt="no image"/>
                    <button onClick={()=>{handleEdit(user)}}>Edit</button>
                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                </li>
            ))
        }
        </center>
      </div>
  )
}

export default Gallery