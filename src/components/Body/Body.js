import React from 'react';
import { Button } from 'react-bootstrap';
import banner from '../../images/Rectangle-1.png'
import bazar from '../../images/coxs.png'
import sreemangal from '../../images/Sreemongol.png'
import sundorbon from '../../images/sundorbon.png'
import './Body.css';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div  style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${banner})` }} className="body" >
            <div className="left"  >
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre <br/>  and district headquarters in southeastern Bangladesh. It is <br/> famous mostly for its long natural sandy beach, and it ...</p>
                <Link to="/booking"><Button variant="warning">Start Booking </Button></Link>
                
            </div>
            <div  className="right" >
                <Link to="/booking">
                    <div style={{ backgroundImage: `url(${bazar})` }} className="picture-1">
                        <h3>Cox's Bazar</h3> 
                    </div>
                </Link>
                <Link to="/booking">
                    <div style={{ backgroundImage: `url(${sreemangal})` }} className="picture-2">
                        <h3>Sreemongol </h3>
                    </div>
                </Link>
                <Link to="/booking">
                    <div style={{ backgroundImage: `url(${sundorbon})` }}  className="picture-3">
                        <h3>Sundarban</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Body;