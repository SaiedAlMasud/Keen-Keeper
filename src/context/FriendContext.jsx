import React, { createContext, useState } from "react";

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