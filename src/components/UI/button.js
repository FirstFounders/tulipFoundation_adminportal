import React from 'react';
//import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default function ButtonCom({
  className,
  size,
  text,
  // background,
  onClick,
}) {
  return (
    <div className='mt-5 text-center'>
      <Button className={className} size={size} onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}
