import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/stylesheets/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [aboutUsDropdown, setAboutUsDropdown] = useState(false);
    const [brandsDropdown, setBrandsDropdown] = useState(false);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-around h-[80px] w-full bg-white space-x-8 px-8 pb-14 border-b-2 text-lg whitespace-nowrap fixed z-[1000] top-0  ">
            {/* Logo and Mobile Menu Toggle */}
            <div className="h-full  w-[100px] pt-[28px]">
                <Link to="/" className="text-blue-700 font-serif font-semibold text-lg animate-navbar  ">
                    LOGO
                </Link>
            </div>

            {/* Navigation Links */}
            <div className=" hidden md:flex h-full pt-7 space-x-6 font-serif">
                <Link to="/" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50  ">HOME</Link>

                {/* About Us Dropdown */}
                <div className="relative" onMouseEnter={() => setAboutUsDropdown(true)} onMouseLeave={() => setAboutUsDropdown(false)}>
                    <span className="nav-link cursor-pointer hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">ABOUT US</span>
                    {aboutUsDropdown && (
                        <div className=" flex flex-col bg-white translate-y-14 -translate-x-9 absolute top-full h-[150px] w-[250px] space-y-5 rounded-xl items-center ">
                            <Link to="/corporate-profile" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50 pt-8">CORPORATE PROFILE</Link>
                            <Link to="/bod" className="nav-linkml-4 hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50 pt-8">BOD</Link>
                        </div>
                    )}
                </div>

                {/* Brands Dropdown */}
                <div className="relative z-[1000] group" onMouseEnter={() => setBrandsDropdown(true)} onMouseLeave={() => setBrandsDropdown(false)}>
                    <span className="nav-link cursor-pointer hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">BRANDS</span>
                    {brandsDropdown && (
                        <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 z-[1000] w-[500px] -translate-x-48 translate-y-14 rounded-lg ">
                            <div className="flex items-center justify-center h-[145px] space-x-8 px-14 pb-14 pt-4 ">
                                <img src="src/assets/nav.png" alt="brand" className="brand-image" />
                                <img src="src/assets/nav1.png" alt="Brand 2" className="brand-image" />
                                <img src="src/assets/nav2.png" alt="brand" className="brand-image" />
                                <img src="src/assets/nav3.png" alt="Brand 2" className="brand-image" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Products Dropdown */}
                <div className="relative" onMouseEnter={() => setProductsDropdown(true)} onMouseLeave={() => setProductsDropdown(false)}>
                    <span className="nav-link cursor-pointer hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">PRODUCTS</span>
                    {productsDropdown && (
                        <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 z-[1000] w-[500px] -translate-x-48 translate-y-14 rounded-lg  ">
                            <div className="flex items-center justify-center h-[145px] space-x-8 px-14 pb-14 pt-4 ">
                                <img src="src/assets/nav.png" alt="brand" className="brand-image" />
                                <img src="src/assets/nav1.png" alt="Brand 2" className="brand-image" />
                                <img src="src/assets/nav2.png" alt="brand" className="brand-image" />
                                <img src="src/assets/nav3.png" alt="Brand 2" className="brand-image" />
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/gallery-page" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">GALLERY</Link>
                <Link to="/contact-us" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">CONTACT US</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden cursor-pointer pt-14" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <FaTimes className="text-blue-700 text-xl" /> : <FaBars className="text-blue-700 text-xl" />}
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-[100px] left-0 w-[540px] bg-white flex flex-col items-center  z-[1000] h-[400px] rounded-xl transition-all duration-300 ease-in-out space-y-10 pt-8 font-serif ">
                    {/* Mobile Navigation Links */}
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
