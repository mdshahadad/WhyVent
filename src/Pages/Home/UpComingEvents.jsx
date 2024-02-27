const UpComingEvents = () => {
    return (
        <div className="mt-16 mx-4 lg:mx-0">
            <h2 className="text-4xl font-bold text-[#2D5661] text-center mb-8">UpComing Events</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div className="card bg-base-100 shadow-xl image-full" data-aos="fade-right" data-aos-duration="1000">
                    <figure><img className="w-full" src="https://i.ibb.co/1zfDhsy/images-3.jpg" alt="Fitness" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fitness!!</h2>
                        <p>Challenge yourself with an intense fitness bootcamp. Boost your endurance, strength, and agility with our experienced trainers.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl image-full" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                    <figure><img className="w-full" src="https://i.ibb.co/PFmrx1x/images-2.jpg" alt="Mindfulness" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mindfulness!!</h2>
                        <p>Immerse yourself in a mindfulness meditation workshop to reduce stress and enhance your overall well-being. Suitable for all levels.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl image-full" data-aos="fade-left" data-aos-duration="1000">
                    <figure><img className="w-full" src="https://i.ibb.co/Ksx5bq6/images-5.jpg" alt="Wilderness" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wilderness!!</h2>
                        <p>Embark on an outdoor adventure retreat for a day full of hiking, team-building activities, and connecting with nature.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComingEvents;