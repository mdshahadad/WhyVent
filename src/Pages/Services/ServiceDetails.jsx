import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    // console.log(services);

    const { serviceDetails } = useParams();
    console.log(serviceDetails);

    const service = services.find(service => service.id == serviceDetails);
    console.log(service);
    const { image, title, details } = service;

    return (
        <div className="lg:max-w-5xl mx-auto mt-10">
            <div>
                <img className="w-full px-2 md:px-2 lg:w-2/3 mx-auto rounded-2xl" src={image} alt="" />
            </div>
            <div className="my-8 px-4 lg:w-2/3 mx-auto">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2D5661]">{title}</h2>
                <p className="mt-5 text-lg lg:text-xl">{details}</p>
                <Link to="/bookNow">
                    <button className="text-lg lg:text-2xl bg-green-600 mt-5 rounded-xl px-5 py-3 text-white font-medium">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;