import React from 'react';
import './Ticket.css';
import logo from '../../images/tickets 3.png'
const Ticket = (props) => {
    const {From, To} = props.From;
    // console.log(From,To);
    return (
        <div className='ticket-section container'>
          <div className='Place p-4'>
              <ul>
                  <li>{From}</li>
                  <li>{To}</li>
              </ul>
          </div>
                   
          <div className='ticket d-flex justify-content-start justify-content-between mt-2 p-3 align-items-center'>
              <div className='d-flex justify-content-start h5-gutter'>
                <img src={logo} alt=""/>
                <h5>Ticket</h5>
              </div>
              <h5>$100</h5>
          </div>
          <div className='ticket d-flex justify-content-start justify-content-between mt-2 p-3 align-items-center'>
            <div className='d-flex justify-content-start h5-gutter'>
                <img src={logo} alt=""/>
                <h5 className=''>Ticket</h5>
              </div>
              <h5>$100</h5>
          </div>
          <div className='ticket d-flex justify-content-start justify-content-between mt-2 p-3 align-items-center'>
            <div className='d-flex justify-content-start h5-gutter'>
                <img src={logo} alt=""/>
                <h5 className='align-items-center'>Ticket</h5>
            </div>
              <h5>$100</h5>
          </div>
          
        </div>
    );
};

export default Ticket;