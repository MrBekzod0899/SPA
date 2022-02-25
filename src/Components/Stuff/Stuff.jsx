import Aos from 'aos'
import React from 'react'
import person1 from '../../asset/person1.jpg'
import person2 from '../../asset/person2.jpg'
import person3 from '../../asset/person3.jpg'
import person4 from '../../asset/person4.jpg'
import './index.css'

export default function Stuff() {
    Aos.init({
        duration: 1000
    })
    return (
        <div id='stuff' className="stuff">
            <div className="container">
                <div
                    className="row"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <h1 data-aos="zoom-in-down" className="text-light">Our Chiefs</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="chief">

                            <div className="card" data-aos="fade-up">
                                <div className="card-body">
                                    <img className="img-fluid" src={person3} alt="chief1" />
                                </div>
                                <div className="card-content">
                                    <h1 data-aos="fade-up">Main Chief</h1>
                                    <p data-aos="fade-up">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                    </p>
                                </div>
                            </div>
                            <div className="card" data-aos="zoom-in">
                                <div className="card-body">
                                    <img className="img-fluid" src={person1} alt="chief1" />
                                </div>
                                <div className="card-content">
                                    <h1 data-aos="fade-up">Cake Chief</h1>
                                    <p data-aos="fade-up">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                    </p>
                                </div>
                            </div>
                            <div className="card" data-aos="zoom-out-left">
                                <div className="card-body">
                                    <img className="img-fluid" src={person2} alt="chief1" />
                                </div>
                                <div className="card-content">
                                    <h1 data-aos="fade-up">Assistent Chief</h1>
                                    <p data-aos="fade-up">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                    </p>
                                </div>
                            </div>
                            <div className="card" data-aos="zoom-out-right">
                                <div className="card-body">
                                    <img className="img-fluid" src={person4} alt="chief1" />
                                </div>
                                <div className="card-content">
                                    <h1 data-aos="fade-up">Salat Chief </h1>
                                    <p data-aos="fade-up">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
