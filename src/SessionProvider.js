import { createContext} from "react";
import { useState,useEffect} from "react";
import {authRepository} from "./repositories/auth";
const SessionContext = createContext();
const SessionProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState(true
    );
    useEffect(() => {
        setSession();
    }
    , []);
    const setSession = async () => {
        const currentUser = await authRepository.getCurrentUser();
        setCurrentUser(currentUser);
        console.log(currentUser
        );
        setIsLoading(false);
    };
    if(isLoading) return <div/>;
    return (<SessionContext.Provider value={{ currentUser, setCurrentUser }}>{props.children}</SessionContext.Provider>);
};
export { SessionContext, SessionProvider };