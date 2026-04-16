import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

export const FriendProvider = ({children}) =>{
    const [interaction, setinteraction] = useState([]);
    const addInteraction = (friendId, friendName, type) =>{
        const newInteraction ={
            friendId,
            friendName,
            type,
            date: Date.now()
        };
        if(type=="Call"){
            toast.success(`${friendName} missed a call`,{ position: "top-center" });
        }
        if(type=="Text"){
            toast.success(`${friendName} missed a text`,{ position: "top-center" });
        }
        if(type=="Video"){
            toast.success(`${friendName} missed a video call`,{ position: "top-center" });
        }
        
        setinteraction([...interaction, newInteraction]);
    };
    const data = {
        addInteraction,
        interaction,
        setinteraction
    }
    return(
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};
export default FriendProvider;