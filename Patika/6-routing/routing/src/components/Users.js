import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
        setUsers([...result.data]);
    })    
    }, [])
    

    return (
        <div>
            <ul>
                {
                    users.map(user=>(
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}> {user.name} </Link>
                            {/* <Link to={`/users/user/${user.id}`}> {user.name} </Link> */}
                        </li>
                    ))
                }           
            
            </ul>
           
        </div>
    )
}