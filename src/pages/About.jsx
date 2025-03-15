import React from 'react'

function About() {
    return (
        <div className='w-full h-screen flex '>
            <div className='w-1/3 h-screen  '>
                <h1 className='text-b text-6xl m-16'>About US</h1>
            </div>
            <div className="w-1/3 h-screen flex items-center justify-center overflow-hidden">
                <img className="w-[30vw] h-[90vh] object-cover rounded-lg shadow-lg"
                    src="https://plus.unsplash.com/premium_photo-1678903964473-1271ecfb0288?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Building Image" />
            </div>

            <div className='w-1/3 h-screen flex justify-center items-center m-8 text-bold  text-2xl'>
                <p>Use this page to share your company's
                    mission, vision, or background with your
                    potential clients. Set yourself apart from
                    the competition with a strong brand
                    persona that puts your clients first.</p>
            </div>
        </div>
    )
}

export default About