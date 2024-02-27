import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-[#2D5661]">
                <div className="lg:max-w-6xl mx-auto">
                    <Navbar></Navbar>
                </div>
            </div>
            <Outlet></Outlet>
            <ToastContainer/>
        </div>
    );
};

export default Root;