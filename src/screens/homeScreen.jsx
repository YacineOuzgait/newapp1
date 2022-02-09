import { useEffect } from "react";

const HomeScreen = () => {
    useEffect(() => {
        fetch("http://localhost:5000").then(console.log);
    });
    
    
    return(
        <>
        <h1>HomeScreen</h1>
        </>  
    );
};

export default HomeScreen;