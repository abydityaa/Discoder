import React from 'react'

export default function Navbar() {
    function home() {
        const element = document.getElementById("hero");
        element.scrollIntoView();
    }

    function lab() {
        const element = document.getElementById("lab");
        element.scrollIntoView();
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="/">Discoder.</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <button onClick={home} class="nav-link">Home</button>
                            </li>
                            <li class="nav-item">
                                <button onClick={lab} class="nav-link">Labs</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}