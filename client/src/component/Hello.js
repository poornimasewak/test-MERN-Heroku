import React from 'react';

const Hello = (props) => {
    // props are read only
return (
    <h1> Hello {props.name} {props.text}</h1>
)
}

export default Hello;
