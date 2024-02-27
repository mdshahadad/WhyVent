import { Link } from 'react-router-dom';
import './Service.css';
import PropTypes from 'prop-types';

const Service = ({ service }) => {
    const { id, title, description, image, price } = service;
    return (
        <div className='flex justify-center' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-duration="500">
            <div className="card bg-services shadow-xl">
                <figure><img className='h-48 w-full' src={image} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{description}</p>
                    <p className='font-medium text-lg'>Price: {price}$</p>
                    <div className="card-actions justify-end mt-4">

                        <Link to="/bookNow">
                            <button className="py-1 px-3 lg:px-5 font-semibold rounded-3xl badge-outline bg-green-600 text-green-50 border-0">Book Now</button>
                        </Link>

                        <Link to={`/services/${id}`}>
                            <button className='py-1 px-3 lg:px-5 font-semibold rounded-3xl badge-outline bg-[#2D5661]  text-green-50 border-0'>See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
}

export default Service;