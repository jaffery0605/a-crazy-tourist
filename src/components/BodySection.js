import React from 'react';
import CardItem from './CardItem';
import './BodySection.css';
import img1 from '../images/have_a_plan.jpg';
import img2 from '../images/plan_trip.jpg';
import img3 from '../images/book_a_vehicle.jpg';
import img4 from '../images/book_a_room.jpg';

function BodySection() {
    return (
        <div className='Body'>
        <h1>Lets crazy tourist handle your trip</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={img1}
                text='Allow us to make the required arrangements for you in reasonable prices.'
                label='ALREADY HAVE A PLAN?'
                lnk="http://jaffery0605.github.io"
              />
              <CardItem
                src={img2}
                text='Lets map some best plan based on your interest.'
                label='WANT TO PLAN A TRIP?'
                lnk="http://jaffery0605.github.io"
              />
            </ul>
            <h1>Book your needs through us!</h1>
            <ul className='cards__items'>
              <CardItem
                src={img3}
                text='Find any type of vehicle for rent in reasonable prices.'
                label='WANT TO BOOK A VEHICLE?'
                lnk="http://jaffery0605.github.io"
              />
              <CardItem
                src={img4}
                text='Lets find a best rooms according to your need.'
                label='WANT TO BOOK A ROOM?'
                lnk="http://jaffery0605.github.io"
              />
            </ul>
          </div>
        </div>
      </div>
    );
}

export default BodySection;
    