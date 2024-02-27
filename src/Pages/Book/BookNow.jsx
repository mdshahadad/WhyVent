import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider";

const BookNow = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    return (
        <div className="bg-gradient h-screen">
            <div className="pt-16">
                <div className="card shrink-0 w-full  max-w-sm mx-auto shadow-2xl bg-base-100  text-[#2D5661] text-2xl font-medium">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder={user?.email}
                                className="input input-bordered border-2 border-[#2D5661]" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="email"
                                placeholder={user?.displayName}
                                className="input input-bordered border-2 border-[#2D5661]" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                name="number"
                                type="number"
                                placeholder="Number"
                                className="input input-bordered border-2 border-[#2D5661]" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#2D5661] text-white border-0 text-xl">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BookNow;