import React from 'react'
import { Link } from 'react-router-dom'

export default function Labs() {
    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="row">
                        <h1><span>~/</span>Featured Labs<span>.</span></h1>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src='https://files.desakulab.com/r/html.png' class="card-img-top px-1 py-1 rounded" alt="..." />
                            <div class="card-body mb-4">
                                <h5 class="card-title">Basic HTML course</h5>
                                <p class="card-text">learn how to make a website using HTML for beginners!</p>
                            </div>
                            <span>
                                FrontEnd
                            </span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src='https://files.desakulab.com/r/css.png' class="card-img-top px-1 py-1 rounded" alt="..." />
                            <div class="card-body mb-4">
                                <h5 class="card-title">Basic CSS course</h5>
                                <p class="card-text">learn how to make a website using CSS for beginners!</p>
                            </div>
                            <span>
                                FrontEnd
                            </span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src='https://files.desakulab.com/r/js.png' class="card-img-top px-1 py-1 rounded" alt="..." />
                            <div class="card-body mb-4">
                                <h5 class="card-title">Basic JS course</h5>
                                <p class="card-text">learn how to make a website using JavaScript for beginners!</p>
                            </div>
                            <span>
                                FrontEnd
                            </span>
                        </div>
                    </div>
                </div>
                <Link to='/lessons' className='py-5'>Check more courses <svg class="HoverArrow" width="10" height="10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"/><path class="HoverArrow__tipPath" d="m1 1 4 4-4 4"/></g></svg></Link>
            </div>  
        </>
    )
}