import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/Rectangle-1.png';
import './Booking.css';

const Booking = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${banner})` }} className="booking">
            <div className="container">
             <div className="left-book"  >
                <h1>COX'S BAZAR</h1>
                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
                <div className="right-book">
                <div className="form-group">
					<label>Origin</label>
					<input type="text" className="form-control" placeholder="e.g Dhaka" />
				</div>
				<div className="form-group">
					<label>Destination</label>
					<input type="text" className="form-control" placeholder="e.g Cox's Bazar" />
				</div>
				<div className="form-group row booking-date">
				<div className="col-6">
					<label htmlFor="date-input">From</label>
					<input className="form-control" type="date" id="dateFrom" />
				</div>
				<div className="col-6">
					<label htmlFor="dateTo">To</label>
					<input className="form-control" type="date" id="dateTo" />
				</div>
				</div>
				<Link to="/hotel"><button type="submit" className="btn btn-warning tg-primary btn-block">
					Start Booking
				</button></Link>
                </div>   
            </div>
            </div>
    );
};

export default Booking;