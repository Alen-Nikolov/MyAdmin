import React from 'react';
import './Nav.css';
import { Button } from '@mui/material'; 
import { ButtonGroup } from '@mui/material';


const Nav = () => (
   <div className='nav row'>
      <div className='admin-logo col-6 px-5'>My admin</div>
      <div className='col-6 nav-items'>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
         <Button onClick={() => navigateTo('mortgage')}>MORTGAGE</Button>
         <Button onClick={() => navigateTo('notes')}>NOTES</Button>
         <Button onClick={() => navigateTo('car')}>CAR</Button>
      </ButtonGroup>
    
      </div>
   </div>
);

const navigateTo = (url) => {
   console.log(url)
}

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
