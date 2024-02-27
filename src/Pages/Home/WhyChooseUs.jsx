const WhyChooseUs = () => {
    return (
        <div className="mt-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 lg:mb-14 text-center">Why Choose <span className="text-[#2D5661] font-bold">WhyVent</span> for Your Events?</h2>
            <div className="flex-row lg:flex justify-between max-w-7xl mx-auto">
                <div className="lg:w-1/3 mx-4 md:mx-10 mb-8 lg:mb-0 lg:mx-0">
                    <p className="font-medium text-xl">At WhyVent, we understand that every event is a unique expression of your vision and aspirations. We take pride in being more than just event organizers; we are your partners in creating unforgettable experiences. Here are compelling reasons why WhyVent is your go-to choice for event management:</p>
                </div>
                <div className="lg:w-1/2 space-y-2 mx-4 md:mx-10 lg:mx-0">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Expertise and Creativity
                        </div>
                        <div className="collapse-content">
                            <p>Our seasoned team of event experts brings a wealth of experience to the table. From corporate conferences to dreamy weddings, we infuse creativity and innovation into every detail, ensuring your event is nothing short of extraordinary.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Attention to Detail
                        </div>
                        <div className="collapse-content">
                            <p>We obsess over the details so you don't have to. Our meticulous planning and execution guarantee a seamless and stress-free event. From venue selection to the final farewell, we leave no stone unturned, ensuring every moment is flawlessly curated.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Tailored Solutions
                        </div>
                        <div className="collapse-content">
                            <p>At WhyVent, we recognize that one size does not fit all. Our approach is personalized to your needs and objectives. Whether it's a grand gala or an intimate gathering, we tailor our services to reflect your unique style and requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;