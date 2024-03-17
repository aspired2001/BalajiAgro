import Footer from "./Footer";

const GalleryPage = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                {/* Background image */}
                <img
                    src="https://images.pexels.com/photos/1838552/pexels-photo-1838552.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt=""
                    className="w-full h-[400px] shadow-lg"
                />

                {/* Overlay text */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[140px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif">
                    Home &middot; <span className="text-blue-500 hover:text-blue-300">Gallery</span>
                </span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-[60px] px-8 ">
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal1.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal2.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal3.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal4.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal5.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal6.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal7.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal8.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal9.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer"
                            src="assets/Gal10.JPG"
                            alt="gallery-photo"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[60px]">
                <Footer />
            </div>
        </>
    );
}

export default GalleryPage;
