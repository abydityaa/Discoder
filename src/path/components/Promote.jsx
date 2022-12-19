import React from 'react'

export default function Promote() {

    var countDownDate = new Date("Mar 11, 2023 00:00:01").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Output the result in an element with id="demo"
        document.getElementById("count").innerHTML = days + "d " + hours + "h "
            + minutes + "m ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("count").innerHTML = "EXPIRED";
        }
    }, 1000);

    return (
        <>
            <div class="promoter mt-5">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-12">
                            <div class="text-center">
                                <div className="countdown">
                                    <p id="count"></p>
                                </div>
                                <p className='greet'>howdy <span>Travelers</span>! <span id="e2">coming soon</span>. we will start our journey at <span>11th March 2023</span>!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}