// Hero.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

const slides = [
    { image: banner2, slogan: 'Bring Nature Home with GreenNest' },
    { image: banner1, slogan: 'Healthy Plants, Happy Life' },
    { image: banner3, slogan: 'Discover the Art of Indoor Gardening' }
];

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const splitWords = (text) => text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const word = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="w-full h-[500px] relative overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} 
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            key={activeSlide} 
                            className="w-full h-[500px] bg-center bg-cover flex items-center justify-center relative"
                            style={{ backgroundImage: `url(${slide.image})` }}
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', ease: "easeInOut" }}
                        >
                            <motion.h2
                                key={activeSlide} 
                                className="text-accent text-lg md:text-5xl font-bold bg-black/40 p-4 rounded text-center flex flex-wrap justify-center"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                {splitWords(slide.slogan).map((wordText, i) => (
                                    <motion.span key={i} variants={word} className="mx-1">
                                        {wordText}
                                    </motion.span>
                                ))}
                            </motion.h2>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
