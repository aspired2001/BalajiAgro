import  { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './stylesheets/Brands.css';

const Navbar = () => {
    const [aboutUsDropdown, setAboutUsDropdown] = useState(false);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownTimeoutRef = useRef(null);

    const handleMouseEnterAboutUs = () => {
        clearTimeout(dropdownTimeoutRef.current);
        setAboutUsDropdown(true);
    };

    const handleMouseLeaveAboutUs = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setAboutUsDropdown(false);
        }, 60); // 1 second delay
    };



    const handleMouseEnterProducts = () => {
        clearTimeout(dropdownTimeoutRef.current);
        setProductsDropdown(true);
    };

    const handleMouseLeaveProducts = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setProductsDropdown(false);
        }, 60); // 1 second delay
    };

    return (
        <nav className="flex items-center justify-around h-[80px] w-full bg-white space-x-8 px-8 pb-14 border-b-2 text-lg whitespace-nowrap fixed z-[1000] top-0">
            <div className="h-full w-[100px] pt-[28px]">
                <Link to="/" className="text-blue-700 font-serif font-semibold text-lg animate-navbar">
                    LOGO
                </Link>
            </div>

            <div className="hidden md:flex h-full pt-7 space-x-6 font-serif">
                <Link to="/" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">HOME</Link>

                <div className="relative" onMouseEnter={handleMouseEnterAboutUs} onMouseLeave={handleMouseLeaveAboutUs}>
                    <span className="nav-link cursor-pointer hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">ABOUT US</span>
                    {aboutUsDropdown && (
                        <div className="flex flex-col bg-white translate-y-14 -translate-x-24 absolute top-full h-[150px] w-[250px] space-y-5 rounded-xl items-center ">
                            <Link to="/corporate-profile" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50 pt-8">CORPORATE PROFILE</Link>
                            <Link to="/bod" className="nav-link ml-4 hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50 pt-8">BOD</Link>
                        </div>
                    )}
                </div>

               

                <div className="relative" onMouseEnter={handleMouseEnterProducts} onMouseLeave={handleMouseLeaveProducts}>
                    <Link
                     to="/our-products"
                    className="nav-link cursor-pointer hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">OUR PRODUCTS</Link>
                    {productsDropdown && (
                        <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 z-[1000] w-[500px] -translate-x-48 translate-y-14 rounded-lg ">
                            <div className="flex flex-row items-center justify-center h-[145px] space-x-12 px-14 pb-4 pt-4">
                                <div className="brand-item w-14 h-16">
                                    <img src="assets/nav.png" alt="brand" className="brand-image" />
                                    <span className="brand-name">Brand 1</span>
                                </div>
                                <div className="brand-item w-14 h-16">
                                    <img src="assets/nav1.png" alt="Brand 2" className="brand-image" />
                                    <span className="brand-name">Brand 2</span>
                                </div>
                                <div className="brand-item w-14 h-16">
                                    <img src="assets/nav2.png" alt="brand" className="brand-image" />
                                    <span className="brand-name">Brand 3</span>
                                </div>
                                <div className="brand-item w-14 h-16">
                                    <img src="assets/nav3.png" alt="Brand 4" className="brand-image" />
                                    <span className="brand-name">Brand 4</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/gallery-page" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">GALLERY</Link>
                <Link to="/contact-us" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">CONTACT US</Link>
            </div>

            <div className="md:hidden cursor-pointer pt-14" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <FaTimes className="text-blue-700 text-xl" /> : <FaBars className="text-blue-700 text-xl" />}
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden absolute top-[100px] left-0 w-[540px] bg-white flex flex-col items-center z-[1000] h-[400px] rounded-xl transition-all duration-300 ease-in-out space-y-10 pt-8 font-serif -translate-y-5">
                    <Link to="/" className="mobile-nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">HOME</Link>
                    <Link to="/corporate-profile" className="mobile-nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">CORPORATE PROFILE</Link>
                    <Link to="/bod" className="mobile-nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">BOD</Link>
                    <Link to="/gallery-page" className="mobile-nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">GALLERY</Link>
                    <Link to="/contact-us" className="mobile-nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">CONTACT US</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
