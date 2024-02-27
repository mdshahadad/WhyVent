import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Shared/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import GoogleAuth from "./GoogleAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { handleRegisterUser } = useContext(AuthContext);
    const navigate = useNavigate();
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        setError('')
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('img');
        const email = form.get('email');
        const pass = form.get('password');
        console.log(name, email, pass, image);

        if (pass.length < 6) {
            setError('Your password should be 6 character long');
        }
        else if (!/[A-Z]/.test(pass)) {
            setError('Your password should at least one capital letter')
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(pass)) {
            setError('Add at least one special character in password')
        }
        else {

            handleRegisterUser(email, pass)
                .then(r => {
                    console.log(r);

                    if (r) {
                        updateProfile(r.user, {
                            displayName: name,
                            photoURL: image,
                        })
                            .then(() => {
                                console.log('Name Added')
                                location.reload();
                                toast.success('Register Successfully');
                                navigate('/')
                            })
                            .catch(e => {
                                console.log(e)
                            })
                    }
                })

                .catch(e => {
                    console.log(e.message);
                })

        }
    }

    return (
        <div className="bg-gradient h-screen">
            <div className="pt-16 lg:pt-28 px-2">
                <h2 className="text-center font-bold lg:text-5xl text-4xl mb-4 text-[#2D5661]">Register here</h2>

                {/* Google Auth Provider */}
                <GoogleAuth></GoogleAuth>

                <h2 className="text-center my-4 text-2xl font-semibold text-black">OR</h2>
                <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100 text-[#2D5661] text-lg font-medium">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="input input-bordered border-2 border-[#2D5661]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Photo</span>
                            </label>
                            <input
                                name="img"
                                type="text"
                                placeholder="Photo URL"
                                className="input input-bordered border-2 border-[#2D5661]" />
                        </div>
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
                        <p>Already have an account? <Link to="/login" className="text-blue-400">Login here</Link> </p>
                        <div className="form-control mt-1">
                            <button className="btn bg-[#2D5661] border-0 text-white text-lg">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;