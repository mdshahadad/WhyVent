import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider";
import './Profile.css'

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="lg:max-w-3xl mx-auto flex-row justify-center lg:flex lg:justify-between items-start h-screen">
            <div className="avatar mt-12 flex justify-center mb-8 lg:mb-0"> 
                <div className="lg:w-full rounded-full">
                    <img className="flex justify-center" src={user?.photoURL} />
                </div>
            </div>
            <div className="lg:w-2/3 md:mx-20 mx-4 lg:ml-4 lg:mt-24">
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td className="bg-[#8bbbc7]">{user?.displayName}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td className="bg-[#8bbbc7]">{user?.email}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td className="bg-[#8bbbc7]">{user?.phoneNumber}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;