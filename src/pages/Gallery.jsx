import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/Gallery.css'; // Create this file for custom 


const images = [
    '/assets/hero.png',
    '/assets/hero1.png',
    '/assets/hero2.png',
    // Add more images as needed
];

const Gallery = () => {
    const settings = {
        dots: false, // Set to false to hide the progress dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        appendDots: (dots) => (
            <ul style={{ display: 'none' }}>
                {/* Set display to 'none' to hide the black dots */}
                {dots}
            </ul>
        ),
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image}
                    className='object-fit bg-cover'
                    alt={`slide-${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default Gallery;
