import React from 'react';
import Hello from './Hello';
 import './display.css';

const Display = () => {
    // props are read only
return ( <div>
    <h2>Hi </h2>
    <Hello />
    </div>
)
}

export default Display;