import React from 'react'
import TextField from '@mui/material/TextField';
import './index.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Contact() {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.182363317845!2d69.31507891497732!3d41.34838977926773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef49ea6884449%3A0x753619b3ebe003!2z0JHQvtKT0LjRiNCw0LzQvtC7INC60Z7Rh9Cw0YHQuCwg0KLQvtGI0LrQtdC90YIsIE9gemJla2lzdG9u!5e0!3m2!1suz!2s!4v1643640519171!5m2!1suz!2s"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <h1>Our Location</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-back">
                                    <div id="contactus" className="left">
                                        <div className="card">
                                           <div className="card-body">
                                               <div className="title">
                                               <h4>Contact Us</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                                                    voluptate aliquid expedita fugit facilis labore soluta quas
                                                    aliquam assumenda vel!
                                                </p>
                                               </div>
                                               
                                                <TextField className='form-control m-2' id="standard-basic" label="First Name" variant="standard" />
                                                <TextField className='form-control m-2' id="standard-basic" label="Last Name" variant="standard" />
                                                <TextField type='email' className='form-control m-2' id="standard-basic" label="Your Email" variant="standard" />
                                                <TextareaAutosize
                                                    className='textarea'
                                                    aria-label="minimum height"
                                                    minRows={5}
                                                    placeholder="Minimum 3 rows"
                                                    style={{ width: '50%',textAlign:'left' }}
                                                />
                                                <br/>
                                                <button className='btn btn-primary w-50'>Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-front">
                                    <div className="right">
                                        <div
                                            className='iframeLocation'
                                            dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
