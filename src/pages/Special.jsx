

const Special = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="font-serif text-blue-700 text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold">
                    WHAT MAKES US SPECIAL?
                </h1>
                <span className="font-serif text-blue-600 text-[17px] md:text-center sm:text-center lg:text-center xl:text-center mt-3">
                    you can be proud of the flour you cook & bake with.
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 justify-around font-semibold text-blue-600">
                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4 h-[500px]">
                        <span className="block mb-2 text-lg">The Expert Professionals</span>
                        <img
                            src="src/assets/spec.png"
                            alt="Infrastructure"
                            className="w-[360px] h-[130px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 text-[20px] font-medium font-serif text-blue-500">
                            We use Buhler AG, the world’s leading flour milling equipment from cleaning to milling.
                        </p>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">The Expert Professionals</span>
                        <img
                            src="src/assets/spec1.png"
                            alt="Infrastructure"
                            className="w-[360px] h-[130px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 text-[20px] font-medium font-serif text-blue-500">
                            We use Buhler AG, the world’s leading flour milling equipment from cleaning to milling.
                        </p>
                    </div>
                </div>
                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4 h-[500px]">
                        <span className="block mb-2 text-lg">The Expert Professionals</span>
                        <img
                            src="src/assets/spec2.png"
                            alt="Infrastructure"
                            className="w-[360px] h-[130px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 text-[20px] font-medium font-serif text-blue-500">
                            We use Buhler AG, the world’s leading flour milling equipment from cleaning to milling.
                        </p>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">The Expert Professionals</span>
                        <img
                            src="src/assets/spec3.png"
                            alt="Infrastructure"
                            className="w-[360px] h-[130px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 text-[20px] font-medium font-serif text-blue-500">
                            We use Buhler AG, the world’s leading flour milling equipment from cleaning to milling.
                        </p>
                    </div>
                </div>
                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4 h-[500px]">
                        <span className="block mb-2 text-lg">The Expert Professionals</span>
                        <img
                            src="src/assets/spec4.png"
                            alt="Infrastructure"
                            className="w-[360px] h-[130px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 text-[20px] font-medium font-serif text-blue-500">
                            We use Buhler AG, the world’s leading flour milling equipment from cleaning to milling.
                        </p>
                    </div>
                </div>

                <div className="text-center font-serif transition-transform transform hover:translate-y-2 hover:shadow-lg">
                    <div className="bg-white rounded-lg p-4">
                        <span className="block mb-2">The Expert Professionals</span>
                        <img
                            src="src/assets/spec5.png"
                            alt="Infrastructure"
                            className="w-[360px] h-[130px] mb-8 mt-8"
                        />
                        <p className="text-center mt-16 text-[20px] font-medium font-serif text-blue-500">
                            We use Buhler AG, the world’s leading flour milling equipment from cleaning to milling.
                        </p>
                    </div>
                </div>

                {/* Repeat the above structure for other items */}

            </div>
        </div>
    );
};

export default Special;