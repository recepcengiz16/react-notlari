import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children})=>{

    const values = {
        id:1,
        username:"",
        bio:""
    }

    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}

export default UserContext;