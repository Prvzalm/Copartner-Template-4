import React from 'react';
import { adityaBirla, angelOne, kotak, mStock, paisa5, upStock } from '../assets';

const Popup = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content w-full flex flex-col gap-4">
        <a href='https://www.angelone.in/' target='_blank' rel="noreferrer" className='w-full flex items-center shadow-sm bg-white rounded-2xl py-2'>
            <img className='w-12 h-12 mx-4' src={angelOne} alt="" /><p>AngelOne</p>
        </a>
        <a href='https://www.5paisa.com/' target='_blank' rel="noreferrer" className='w-full flex items-center shadow-sm bg-white rounded-2xl py-2'>
            <img className='w-12 h-12 mx-4' src={paisa5} alt="" /><p>5 Paisa</p>
        </a>
        <a href='https://www.kotak.com/en/home.html' target='_blank' rel="noreferrer" className='w-full flex items-center shadow-sm bg-white rounded-2xl py-2'>
            <img className='w-12 h-12 mx-4' src={kotak} alt="" /><p>Kotak</p>
        </a>
        <a href='https://www.mstock.com/' target='_blank' rel="noreferrer" className='w-full flex items-center shadow-sm bg-white rounded-2xl py-2'>
            <img className='w-12 h-12 mx-4' src={mStock} alt="" /><p>M Stock</p>
        </a>
        <a href='https://www.adityabirla.com/' target='_blank' rel="noreferrer" className='w-full flex items-center shadow-sm bg-white rounded-2xl py-2'>
            <img className='w-12 h-12 mx-4' src={adityaBirla} alt="" /><p>Aditya Birla</p>
        </a>
        <a href='https://upstox.com/' target='_blank' rel="noreferrer" className='w-full flex items-center shadow-sm bg-white rounded-2xl py-2'>
            <img className='w-12 h-12 mx-4' src={upStock} alt="" /><p>Up Stock</p>
        </a>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
