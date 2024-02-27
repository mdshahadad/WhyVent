import Footer from "../../Shared/Footer";
import Services from "../Services/Services";
import Banner from "./Banner";
import UpComingEvents from "./UpComingEvents";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <div className="bg-gradient">
                <div className="md:max-w-2xl lg:max-w-7xl mx-auto">
                    <Banner></Banner>
                </div>
            </div>
            <Services></Services>
            <UpComingEvents></UpComingEvents>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;