import React from 'react'
import TextField from '@mui/material/TextField';
import './index.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <h1>Contact Us</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-12 left">
                        <div className="card">
                            <div className="card-header">
                                <h4>Contact Us</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                                    voluptate aliquid expedita fugit facilis labore soluta quas
                                    aliquam assumenda vel!
                                </p>
                            </div>
                            <div className="card-body">
                                <TextField className='form-control m-2' id="standard-basic" label="Your Name" variant="standard" />
                                <TextField type='email' className='form-control m-2' id="standard-basic" label="Your Email" variant="standard" />
                                <TextField className='form-control m-2' id="standard-basic" label="Message" variant="standard" />
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Minimum 3 rows"
                                    style={{ width: 200 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-12 right"></div>
                </div>
            </div>
        </div>
    )
}
