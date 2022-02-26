import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';

import './index.css'
export default function Reservation() {
    const [order, setOrder] = useState({time:new Date(),day:new Date().getDay(),people:1});
    console.log(order)
    return (
        <div id="order" className='reservation'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="card">
                            <div className="card-header">
                                <h1>Make A Reservation</h1>
                            </div>
                            <div className="card-body">
                                <select name="people" id="people" onChange={(e)=>setOrder({...order,people:e.target.value})}>
                                    <option value="1">1 person</option>
                                    <option value="2">2 people</option>
                                    <option value="4">4 people</option>
                                    <option value="6"> 6 people</option>
                                    <option value="8">8 people</option>
                                    <option value="10">10 people</option>
                                    <option value="15">15 people</option>
                                    <option value="20">20 people</option>
                                    <option value="25">25 people</option>
                                    <option value="more">more people</option>
                                </select>
                                <input type='date' id='time' onChange={(e) => setOrder({...order,day:e.target.value})} />
                                
                            </div>
                            <div className="card-content text-center p-2 mt-3">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <StaticTimePicker
                                        label='order time'
                                        orientation="landscape"
                                        openTo="minutes"
                                        value={order.time}
                                        onChange={(newValue) => {
                                            setOrder({...order,time:newValue});
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                <button className='btn btn-secondary w-25 m-3'>Find a Table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
