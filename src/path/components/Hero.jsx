import React from 'react'

export default function Hero() {
    return (
        <>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <h4 class="title">&#128075; Hello, Travelers</h4>
                        <h1 class="font-30 subtitle fw-bold mt-1"><span className="highlight">Welcome</span> to discoder! 🧃</h1>
                        <p class="description">A Massive web development learning platform for everyone!</p>
                        <a href='https://discord.gg/N5cNNCbmPu' target='_blank' class="btn btn-light btn-wide">Get Started</a>
                    </div>
                    <div class="col">
                        <section className='banner'></section>
                    </div>
                </div>
            </div>
        </>
    )
}   