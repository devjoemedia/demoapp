import React from 'react';

export default function Pix(props) {
  return (
    <>
      <img src={props.img} alt="pic" className="w-50 h-25 rounded"/>
    </>
  );
};