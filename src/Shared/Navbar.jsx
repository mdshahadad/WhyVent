import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
    const { signOutUser, user } = useContext(AuthContext);
    const name = user?.displayName;
    // const useName = name.split(" ");
    console.log(name)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('User sign out');
            })
            .catch(e => {
                console.log(e.message);
            })
    }


    const navbar = user ?
        <>

            <li className="font-semibold"><NavLink to="/">Home</NavLink></li>
            <li className="font-semibold"><NavLink to="/services">Services</NavLink></li>
            <li className="font-semibold"><NavLink to="/about">About</NavLink></li>
            <li className="font-semibold"><NavLink to="/bookNow">Book Now</NavLink></li>
            <li className="font-bold"><NavLink to="/profile">My Profile</NavLink></li>
        </>
        :
        <>
            <li className="font-semibold"><NavLink to="/">Home</NavLink></li>
            <li className="font-semibold"><NavLink to="/services">Services</NavLink></li>
            <li className="font-semibold"><NavLink to="/about">About</NavLink></li>
        </>

    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#2D5661] rounded-box w-52">
                        {navbar}
                    </ul>

                </div>
                <a className="btn btn-ghost text-xl hidden md:flex">WhyVent</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ?
                        <>

                            {user?.displayName && user?.displayName.split(" ")[0]}
                            <div className="avatar ml-1">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleSignOut} className="btn lg:px-6 font-semibold lg:text-lg bg-[#BFE1E6] border-0 ml-2">SignOut</button>
                        </>
                        :
                        <>
                            <Link to="/login">
                                <button className="px-2 py-2 rounded-2xl md:px-6 font-semibold lg:text-lg bg-[#bde0e6] border-0 text-black">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="px-2 py-2 rounded-2xl md:px-6 font-semibold lg:text-lg bg-[#bde0e6] border-0 text-black ml-2">Register</button>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;