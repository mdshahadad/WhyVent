import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Shared/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
    const { handleGoogleUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();

    const handleGoogleProvider = () => {
        handleGoogleUser(provider)
            .then(r => {
                console.log(r);
                toast.success('Successfully Login');
                navigate("/")
            })
            .then(e => {
                console.log(e.code)
            })
    }

    return (
        <div>
            <div className="max-w-xs mx-auto mt-8">
                <button onClick={handleGoogleProvider} className="shadow-2xl btn bg-white border-0 rounded-full
                    text-xl w-full text-[#2D5661]"><FcGoogle className="text-3xl"></FcGoogle> Login with Google</button>
            </div>
        </div>
    );
};

export default GoogleAuth;