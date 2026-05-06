import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import { Outlet } from "react-router";
// imported oulte jo bhi route ke andar children hai unko logically render krna 

function MainSiteLayout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainSiteLayout;