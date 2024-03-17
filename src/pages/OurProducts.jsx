import Footer from './Footer'

import useCustomGallery from '../CustomHooks/useCustomGallery';




const OurProducts = () => {

    const images = [
        {
            original: 'assets/kakasteam.jpeg',
            thumbnail: 'assets/kakasteam.jpeg',
            originalAlt: 'Image 1',
            thumbnailAlt: 'Image 1 Thumbnail'
        },
        {
            original: 'assets/kaka.jpeg',
            thumbnail: 'assets/kaka.jpeg',
            originalAlt: 'Image 2',
            thumbnailAlt: 'Image 2 Thumbnail'
        },
        {
            original: 'assets/steamkatarni.jpeg',
            thumbnail: 'assets/Gal3.JPG',
            originalAlt: 'Image 3',
            thumbnailAlt: 'Image 3 Thumbnail'
        },
        
    ];
    const image = [
        {
            original: 'assets/kakasteam.jpeg',
            thumbnail: 'assets/kakasteam.jpeg',
            originalAlt: 'Image 1',
            thumbnailAlt: 'Image 1 Thumbnail'
        },
        {
            original: 'assets/kaka.jpeg',
            thumbnail: 'assets/kaka.jpeg',
            originalAlt: 'Image 2',
            thumbnailAlt: 'Image 2 Thumbnail'
        },
        {
            original: 'assets/steamkatarni.jpeg',
            thumbnail: 'assets/Gal3.JPG',
            originalAlt: 'Image 3',
            thumbnailAlt: 'Image 3 Thumbnail'
        },
        
    ];
    const imagez = [
        {
            original: 'assets/kakasteam.jpeg',
            thumbnail: 'assets/kakasteam.jpeg',
            originalAlt: 'Image 1',
            thumbnailAlt: 'Image 1 Thumbnail'
        },
        {
            original: 'assets/kaka.jpeg',
            thumbnail: 'assets/kaka.jpeg',
            originalAlt: 'Image 2',
            thumbnailAlt: 'Image 2 Thumbnail'
        },
        {
            original: 'assets/steamkatarni.jpeg',
            thumbnail: 'assets/Gal3.JPG',
            originalAlt: 'Image 3',
            thumbnailAlt: 'Image 3 Thumbnail'
        },
        
    ];

    return (
        <div>
            <div className="relative overflow-hidden">
                {/* Background image */}
                <img
                    src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
                    alt=""
                    className="w-full h-[400px] object-cover shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-40 shadow-lg"></div>
                {/* Overlay text */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[140px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif">
                    Home &middot; <span className="text-blue-500 hover:text-blue-300">Our Products</span>
                </span>
            </div>

            <div className="container mx-auto px-4 py-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="swiper-container pt-8">
                           
                                {useCustomGallery('5xl', '3xl', images)} 
                    </div>
                    <div className="translate-y-12">
                        <h1 className="text-3xl font-bold mb-4 font-serif text-blue-700">Parboiled rice</h1>
                        <p className="text-[20px] text-gray-800 font-serif text-justify ">
                            Processing of whole wheat high fibre Atta begins with picking the best-quality wheat grains, numerous quality checks, washing, and filtration ensure the cleanest wheat before stoneless grinding. Our wheat atta is neither too coarse nor too fine, representing the best consistency required for whole wheat atta. Our whole wheat high fibre atta can be easily differentiated by its taste, softness, sweet aroma, and fluffiness. Panchakanya & Bhajan whole wheat atta contains higher bran and fiber content and is perfect to be used for Chapatis, Naans, Paranthas, and Pooris. We pack and supply in various pack sizes viz., 1 kg, 5 kg, 10 kg, 30 kg, 50 kg.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 lg:space-x-32">
                    <div className="translate-y-12">
                        <h1 className="text-3xl font-bold mb-4 font-serif text-blue-700">Steam Rice</h1>
                        <p className=" text-gray-800 font-serif text-justify text-[20px]  ">
                            Processing of whole wheat high fibre Atta begins with picking the best-quality wheat grains, numerous quality checks, washing, and filtration ensure the cleanest wheat before stoneless grinding. Our wheat atta is neither too coarse nor too fine, representing the best consistency required for whole wheat atta. Our whole wheat high fibre atta can be easily differentiated by its taste, softness, sweet aroma, and fluffiness. Panchakanya & Bhajan whole wheat atta contains higher bran and fiber content and is perfect to be used for Chapatis, Naans, Paranthas, and Pooris. We pack and supply in various pack sizes viz., 1 kg, 5 kg, 10 kg, 30 kg, 50 kg.
                        </p>
                    </div>
                    
                    <div className="swiper-container translate-y-16 translate-x-4">
                        {useCustomGallery('5xl', '3xl', image)} 
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 ">
                    <div className="swiper-container pt-12 pl-4">
                        {useCustomGallery('5xl', '3xl', imagez)} 
                    </div>
                    <div className="translate-y-12">
                        <h1 className="text-3xl font-bold mb-4 font-serif text-blue-700">Special Rice</h1>
                        <p className="text-[20px]  text-gray-800 font-serif text-justify ">
                            Processing of whole wheat high fibre Atta begins with picking the best-quality wheat grains, numerous quality checks, washing, and filtration ensure the cleanest wheat before stoneless grinding. Our wheat atta is neither too coarse nor too fine, representing the best consistency required for whole wheat atta. Our whole wheat high fibre atta can be easily differentiated by its taste, softness, sweet aroma, and fluffiness. Panchakanya & Bhajan whole wheat atta contains higher bran and fiber content and is perfect to be used for Chapatis, Naans, Paranthas, and Pooris. We pack and supply in various pack sizes viz., 1 kg, 5 kg, 10 kg, 30 kg, 50 kg.
                        </p>
                    </div>
                </div>

            </div>

            <div className="mt-16">
               <Footer/>
            </div>
        </div>
    );
}

export default OurProducts;
