import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Shared/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GoogleAuth from "./GoogleAuth";

const Login = () => {
    const { handleLoginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        setError('');
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        handleLoginUser(email, password)
            .then(r => {
                console.log(r);
                toast.success('Login Successfully');
                navigate('/')
            })
            .catch(e => {
                if (e.code == "auth/invalid-login-credentials") {
                    setError('Please check your email and password');
                }
            })
    }
    return (
        <div className="bg-gradient h-screen">
            <div className="pt-16 px-2 lg:pt-32">
                <h2 className="text-center font-bold lg:text-5xl text-4xl text-[#2D5661]">Please Login here</h2>

                {/* Google Auth Provider */}
                <GoogleAuth></GoogleAuth>

                <h2 className="text-center my-4 text-2xl font-semibold text-black">OR</h2>
                <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100 text-[#2D5661] text-lg font-medium">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered border-2 border-[#2D5661]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered border-2 border-[#2D5661]" required />
                        </div>
                        <p className="text-red-500">{error}</p>
                        <p>Don't have an Account? <Link to="/register" className="text-blue-400">Register here</Link> </p>
                        <div className="form-control mt-1">
                            <button className="btn bg-[#2D5661] border-0 text-white text-lg">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;