import React from 'react'
import Fannie from '../images/fannie.svg'
import Albert from '../images/albert.svg'

const Testimonials = () => {
  return (
    <section id="clients">
        <div className="container">
            <h2>Clients are Loving Our App</h2>
            <span className="quotation" id="quotation-1">
                <i className="fa-solid fa-quote-left" style={{color: "#ffffff"}}></i>
            </span>
            <span className="quotation" id="quotation-2">
                <i className="fa-solid fa-quote-left" style={{color: "#ffffff"}}></i>
            </span>
            <div className="cards">
                <div className="card content-card-1">
                    <div className="stars">
                        <div className="star-filled"></div>
                        <div className="star-empty"></div>
                    </div>
                    <span className='text'>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</span>
                    <div className="profile">
                        <img loading="lazy" className="profile-img" src={Fannie} alt="Fannie's profile picture." />
                        <div className="data">
                            <span className="name">Fannie Summers</span>
                            <span className="job">Designer</span>
                        </div>
                    </div>
                </div>
                <div className="card content-card-2">
                    <div className="stars">
                        <div className="star-filled"></div>
                    </div>
                    <span className="text">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</span>
                    <div className="profile">
                        <img loading="lazy" className="profile-img" src={Albert} alt="Albert's profile picture." />
                        <div className="data">
                            <span className="name">Fannie Summers</span>
                            <span className="job">Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
