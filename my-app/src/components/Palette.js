import React, { useState } from 'react';
import Cell from './Cell';

/* Need to map over the COLORS array, so we pull them from ../utils */
import { COLORS } from '../utils';

/**
 * The Palette component represents the interface for displaying
 * clickable color cells, and needs to communicate the activeColor
 * to other components. 
 */

const Palette = (props) => {

    const { activeColor, setActiveColor } = props;

    return <div className='palette'>
        {
            COLORS.map((color, index) =>
            <Cell key={"palette-" + index} color={color} handleClick={() => setActiveColor(color)} isActive={activeColor === color}
            
            />)
        }

    </div>


}

export default Palette;