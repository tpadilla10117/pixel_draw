import React from 'react';

/* The Cell component represents the fundamental "clickable object" */

const Cell = (props) => {

    /* Create constants for color, isActive, and handleClick, reading the value off of props */
    const {color, isActive, handleClick } = props;

    return ( 
        <div className={isActive ? "cell active" : "cell"} style={{ backgroundColor: color }} onClick={handleClick}>
        </div>
    )
}

export default Cell;