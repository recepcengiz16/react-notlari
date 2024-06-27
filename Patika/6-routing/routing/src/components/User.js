import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function User(){

    const {id} = useParams();
    console.log("params",id);

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((result) => {
           setUser({...result.data});
        });   
      
    }, [id])
    

    return (
        <div>
            <h1>User Details</h1>

            <p>
                id: {user.id} <br />
                name: {user.name} <br />
                username: {user.username} <br />
                email: {user.email}
            </p> 
        </div>
    )
}