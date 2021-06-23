import React from 'react';

import burbgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burbgerLogo} alt="MyBurger" />
    </div>
);

export default logo;