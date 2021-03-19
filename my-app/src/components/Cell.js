import React from 'react';

/* The Cell component represents the fundamental "clickable object" */

/* <Cell /> is used in both Palette and Grid. */

const Cell = (props) => {

    const {color, isActive, handleClick } = props;

    return ( 
        <div className={isActive ? "cell active" : "cell"} style={{ backgroundColor: color }} onClick={handleClick}>
        </div>
    )
}

export default Cell;