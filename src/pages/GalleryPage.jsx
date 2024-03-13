import Footer from "./Footer";

const GalleryPage=()=> {
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
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "


                            src="https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                            src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                            src="https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                            src="https://images.pexels.com/photos/16365845/pexels-photo-16365845/free-photo-of-rice-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                            src="https://images.pexels.com/photos/16365767/pexels-photo-16365767/free-photo-of-meal-on-plate.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                        src="https://docs.material-tailwind.com/img/team-3.jpg"
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmljZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                        src="https://docs.material-tailwind.com/img/team-3.jpg"
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                            src="https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJpY2V8ZW58MHx8MHx8fDA%3D"
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                            src="https://images.unsplash.com/photo-1684867934492-c84e45daec32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                            className="h-auto max-w-full rounded-lg object-cover object-center transition ease-in-out delay-100 hover:-translate-y-2 scale-100 cursor-pointer
                             "
                            src="https://plus.unsplash.com/premium_photo-1682147969681-9ba753519d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmljZSUyMGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D"
                        alt="gallery-photo"
                    />
                </div>
            </div>
        </div>
        <div className="mt-[60px]">
             <Footer/>
        </div>
        </>
    );
}

export default GalleryPage;