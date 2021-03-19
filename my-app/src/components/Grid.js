import React from 'react';
import { COLORS } from '../utils';
import Cell from './Cell';

/* The Grid component represents the interface for displaying clickable color cells, and updates the color of a clicked cell from the activeColor when a user clicks on it
  */

const Grid = (props) => {

    const {activeColor, cellList, setCellList} = props;

    return  <div className="grid"> {
        
        cellList.map((cell, index) =>
            <Cell key={"grid-" + index} color={cell.color} 
            
            handleClick={() => {
                cell.color = activeColor 
                const newCellList = [...cellList] 
                setCellList(newCellList)}}
        
        />)

        }

    </div> 
}

export default Grid;