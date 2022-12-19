import React from 'react'

export default function Teams() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="row">
            <h1><span>~/</span>teams<span>.</span></h1>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div className="profile">
                  <img src='https://files.desakulab.com/r/abyditya.png' width='80px' className='rounded' alt="" />
                  <div className='name'>abyditya<span>.</span></div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <span class="badge text-bg-light badge-gelar">FrontEnd</span>
                    <span class="badge text-bg-light badge-gelar">HTML</span>
                    <span class="badge text-bg-light badge-gelar">CSS</span>
                    <span class="badge text-bg-light badge-gelar">JavaScript</span>
                    <span class="badge text-bg-light badge-gelar">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div className="profile">
                  <img src='https://cdn.discordapp.com/avatars/961246259786711081/651cf626e7f9a4c932246e4fbf27c58b.webp?size=128' width='80px' className='rounded' alt="" />
                  <div className='name'>Ammar45<span>.</span></div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <span class="badge text-bg-light badge-gelar">FrontEnd</span>
                    <span class="badge text-bg-light badge-gelar">HTML</span>
                    <span class="badge text-bg-light badge-gelar">CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div className="profile">
                  <img src='https://files.desakulab.com/r/abyditya.png' width='80px' className='rounded' alt="" />
                  <div className='name'>Hiring<span>.</span></div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <span class="badge text-bg-light badge-gelar">DM</span>
                    <span class="badge text-bg-light badge-gelar">aby.ditya#5620</span>
                    <span class="badge text-bg-light badge-gelar">To be the part of this project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}