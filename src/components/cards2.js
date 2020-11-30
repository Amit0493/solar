import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards2(props) {
    console.log("props", props)
    return (
        <div className='cards'>
            <h1>{props.displayTitle}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/sungrow.png'
                            text='SG3K - D/SG5K - D'
                            label='Sungrow'
                            path='/longi'
                        />
                        <CardItem
                            src='images/fronis.png'
                            text='Fronius Primo'
                            label='Fronius'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/goodwe.png'
                            text='DNS Series (Dual-MPPT , Single-Phase)'
                            label='Good we'
                            path='/services'
                        />
                        <CardItem
                            src='images/huawei.png'
                            text='Smart energy Solutions'
                            label='Huawei'
                            path='/products'
                        />
                        <CardItem
                            src='images/saj.png'
                            text='R5 Series Residential Solar Inverter'
                            label='SAJ'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards2;
