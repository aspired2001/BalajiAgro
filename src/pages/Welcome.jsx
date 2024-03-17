// import { useBreakpointValue } from '@chakra-ui/react';

const Welcome = () => {
    // const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <div className="container mx-auto px-16 mt-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-3xl font-bold mb-4 text-blue-500 font-serif text-center ">
                        Welcome to the Demo Agro
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed text-justify font-serif ">
                        Our Company was incorporated as Sri Krishna Metcom Limited (Now
                        Known as Baba Agro Food Limited), as a public limited company, under
                        the Companies Act, 1956 vide Certificate of Incorporation dated
                        July 31, 2008. Our Company is in the business of processing of
                        non-basmati and basmati rice in India.
                    </p>
                    <p className="mt-4 md:text-lg leading-relaxed text-justify font-serif">
                        We are one of the largest processors of non-basmati rice in the
                        State of Jharkhand with a milling capacity of 1500 Metric tons per
                        day, and we market our products across Eastern Indian States, namely
                        Jharkhand, Bihar, Odisha, West Bengal, and Assam.
                    </p>
                </div>
                <div className="md:block relative w-[350px] mx-auto overflow-hidden rounded-[20px]">
                    <div className="relative z-10 overflow-hidden rounded-[18px] p-[2px] mt-[8px] min-[300px]:mr-14 ">
                        <img
                            src="https://images.pexels.com/photos/3345727/pexels-photo-3345727.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Placeholder"
                            className="w-full h-[300px] object-cover object-center transform scale-100 transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Welcome;
