import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='foot  text-center '>

      <div className='text-center p-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <p className='text-white' >
          Ekamjot Kaur
        </p>
      </div>
    </MDBFooter>
  );
}
