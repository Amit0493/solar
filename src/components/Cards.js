import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
  console.log("props", props)
  return (
    <div className='cards'>
      <h1>{props.displayTitle}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/lungi.png'
              text=' LR4-60HPH 370W Mono Perc 120half-cell Black 35mm MC4-EVO2 12Y Warranty (LR4-60HPH-370M)'
              label='Longi'
              path='/longi'
            />
            <CardItem
              src='images/jinko.png'
              text='Jinko Cheetah 385W PERCMono 72 cell Sliver 40mm MC4 (JKM385M-72)'
              label='Jinko solar'
              path='/jinko'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/qcell.png'
              text='QCELLS Q.MAXX 350W Mono 120half-cell Black 32mm MC4 (Q.MAXX- G2-350)'
              label='Q cells'
              path='/qcell'
            />
            <CardItem
              src='images/risen.png'
              text='Risen RSM144-6 400W PERC Mono 144half-cells Silver 40mm PV-SY02 (RSM144-6-400M)'
              label='Risen'
              path='/risen'
            />
            <CardItem
              src='images/suntech.png'
              text='Suntech Wfhm 330W Mono 120half-cell Black 35mm CABLE01 15Y Warranty (STP330S-A60/Wfhm)'
              label='Suntech'
              path='/suntech'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
