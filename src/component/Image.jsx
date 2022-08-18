import React from 'react';

export default function Image(props) {
  return (
    <>
      <img src={props.pic} alt="pic" className="img-fluid" />
    </>
  );
};