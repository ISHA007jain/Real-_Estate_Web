import React, { useEffect, useState, useRef } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    
    // Handle initial animation and scroll events
    useEffect(() => {
        // Set initial visibility
        setIsVisible(true);
        
        // Handle scroll
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Set up intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });
        
        // Select all elements to observe
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.unobserve(el);
            });
        };
    }, []);
    
    return (
        <>
            {/* Add required CSS */}
            <style jsx>{`
                .animate-on-scroll {
                    opacity: 0;
                    transition: all 1s ease-out;
                }
                .animate-on-scroll.in-view {
                    opacity: 1;
                    transform: translate(0, 0) scale(1) !important;
                }
                .fade-up {
                    transform: translateY(50px);
                }
                .fade-left {
                    transform: translateX(-100px);
                }
                .fade-right {
                    transform: translateX(100px);
                }
                .scale-up {
                    transform: scale(0.8);
                }
                .parallax {
                    transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
                }
                .image-container {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }
                .image-parallax {
                    width: 100%;
                    height: 120%; /* Extra height for parallax movement */
                    position: absolute;
                    top: 0;
                }
            `}</style>
            
            {/* Main About Section */}
            <div className="w-full h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
                <div className="w-full h-screen flex flex-col md:flex-row">
                    {/* Title Section */}
                    <div 
                        ref={titleRef}
                        className="w-full md:w-1/3 h-screen flex items-center justify-start animate-on-scroll fade-left parallax"
                        style={{ transform: `translateY(${scrollPosition * 0.05}px)` }}
                    >
                        <div className="ml-16">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 relative mb-6">
                                About Us
                                <div className="h-1 w-0 bg-blue-500 mt-2 transition-all duration-1000 ease-out delay-700"
                                     style={{ width: isVisible ? '60%' : '0' }}></div>
                            </h1>
                        </div>
                    </div>
                    
                    {/* Image Section - Fixed for proper coverage */}
                    <div 
                        ref={imageRef}
                        className="w-full md:w-1/3 h-screen flex items-center justify-center animate-on-scroll scale-up"
                        style={{ transitionDelay: '300ms' }}
                    >
                        <div className="relative w-full md:w-4/5 h-4/5 rounded-lg shadow-xl overflow-hidden">
                            <div 
                                className="image-container"
                                style={{ transform: `translateY(${-scrollPosition * 0.08}px)` }}
                            >
                                <div className="image-parallax">
                                    <img 
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        src="https://plus.unsplash.com/premium_photo-1678903964473-1271ecfb0288?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="Building Image" 
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>
                    
                    {/* Text Section */}
                    <div 
                        ref={textRef}
                        className="w-full md:w-1/3 h-screen flex items-center justify-center animate-on-scroll fade-right parallax"
                        style={{ 
                            transitionDelay: '400ms',
                            transform: `translateY(${scrollPosition * 0.03}px)` 
                        }}
                    >
                        <div className="m-8 max-w-md">
                            <p className="text-2xl text-gray-700 leading-relaxed">
                                Use this page to share your company's
                                mission, vision, or background with your
                                potential clients. Set yourself apart from
                                the competition with a strong brand
                                persona that puts your clients first.
                            </p>
                            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow hover:shadow-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;