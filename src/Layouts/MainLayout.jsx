import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto font-poppins">
                <Navbar></Navbar>
                <div className="mb-12 mt-6">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;