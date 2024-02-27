import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();
    // console.log(services)
    return (

        <div className="md:max-w-2xl lg:max-w-7xl mx-auto mt-16">
            <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-10">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;