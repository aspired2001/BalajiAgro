import ContactForm from "./ContactForm";
import Footer from "./Footer";



const ContactUs=()=>{
   return(
      <div className=" mt-[101px]">
         <div className="relative overflow-hidden">
            {/* Background image */}
            <img
               src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
               alt=""
               className="w-full h-[400px] shadow-lg"
            />

            {/* Overlay text */}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[140px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif">
               Home &middot; <span className="text-blue-500 hover:text-blue-300">Contact Us</span>
            </span>
         </div>

         <div className="w-[100%] px-9 pt-20 ">
            <div className="flex flex-col w-[50%] bg-slate-300 shadow-inner rounded-xl pb-8">
                <h1 className="text-3xl font-serif font-semibold text-center pt-4 text-blue-700 " >CONTACT US</h1>
                <ContactForm/>
            </div>

            <div>

            </div>
         </div>

         <div className="mt-16 w-[100vw] px-[40px] items-center">
               <img src="assets/map.png" className="rounded-[10px] hover:-translate-y-2 ease-in-out duration-100 
                delay-100 cursor-pointer" />
         </div>

         <div className="mt-[60px] w-[100%] ">
            <Footer/>
         </div>
      
      </div>
   );
}
export default ContactUs