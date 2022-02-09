import { Outlet } from "react-router-dom"
import Footer from "../components/layouts/Footer";
import NavBar from "../components/layouts/NavBar"

const BaseScreen = () => {
    return (
        <>
    <NavBar/>
    <main className="container">
        <Outlet />
    </main>
    <Footer/>
    </>
    );  
};

export default BaseScreen;