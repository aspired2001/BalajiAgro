import Customers from "./Customers";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Infrastructure from "./Infrastructure";
import Products from "./Products";
import Special from "./Special";
import VedioSection from "./VedioSection";


import Welcome from "./Welcome";

const Home = () => {
    return (
        <div className=" mt-[106px] overflow-hidden ">
            <div className="px-[10px] " >
                <Gallery/>
            </div>
            <div className="mt-8">
                <Products/>
            </div>
            <div className="mt-8">
                <Welcome/>
            </div>
            <div className="mt-8  ">
                <Customers/>
            </div>
            
            <div className="mt-8  ">
                <VedioSection />
            </div>
            
            <div className="mt-8  ">
                <Infrastructure />
            </div>
            <div className="mt-8 px-2">
                <Special />
            </div>
            <div className="mt-8  ">
                <Footer />
            </div>

        </div>
    );
}
export default Home