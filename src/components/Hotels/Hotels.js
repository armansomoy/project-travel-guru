import React, { useState } from 'react';
import fakeData from '../../FakeData';
import image1 from '../../images/Rectangle 26.png'
import image2 from '../../images/Rectangle 27.png'
import image3 from '../../images/Rectangle 28.png'

const Hotels = () => {
    const [rooms, setRooms] = useState(fakeData);
    console.log(fakeData);

    
    return (
        <div>
            {/* This Code Not Working
            <h2>This is Hotel Rooms {rooms.length} </h2>
            <ul>
            {
                rooms.map(room => <li> {rooms.title} </li> )
            }
            </ul> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">
                                <img  style={{ height: '150px'}} src={image1} alt=""/>
                            </div>
                            <div className="col-6">
                                <h3>Light bright airy stylish apt & safe peaceful stay</h3>
                                <p>ratings: 4.9,</p>
                                <p>totalRating: 20,</p>
                                <p>totalRating: 20,</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <img  style={{ height: '150px'}} src={image2} alt=""/>
                            </div>
                            <div className="col-6">
                                <h3>Apartment in Lost Panorama</h3>
                                <p>ratings: 4.9,</p>
                                <p>totalRating: 20,</p>
                                <p>totalRating: 20,</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <img  style={{ height: '150px'}} src={image3} alt=""/>
                            </div>
                            <div className="col-6">
                                <h3>AR Lounge & Pool (r&r + b&b)</h3>
                                <p>ratings: 4.9,</p>
                                <p>totalRating: 20,</p>
                                <p>totalRating: 20,</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            
            </div>
            

        </div>
    );
};

export default Hotels;