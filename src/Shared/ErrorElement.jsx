const ErrorElement = () => {
    return (
        <div className="text-center mt-20 mx-4 md:mx-8">
            <h1 className="text-red-500 font-extrabold text-7xl mb-4">404 Not Found</h1>
            <p>The page you are looking for might be in another dimension. It seems like you've ventured into uncharted territory.</p>
            <button>
                <a href="/" className="text-white font-bold text-xl btn bg-[#2D5661] px-8 mt-4">Home</a>
            </button>
        </div>
    );
};

export default ErrorElement;