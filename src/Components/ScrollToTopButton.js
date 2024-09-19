import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            style={{
                display: isVisible ? 'block' : 'none',
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 1000,
                border: 'none' , 
                width:'50px' , 
                height:'50px', 
                borderRadius:'50%',
                background: 'linear-gradient(to right, #3b82f6  ,#06b6d4)',
                boxShadow:'0px 0px 10px 3px #06b6d4'
            }}
            variant="primary"
        >
            <i class="fa-solid fa-up-long" style={{color:'whitesmoke' ,fontSize:'17px'}}></i>
        </button>
    );
};

export default ScrollToTopButton;