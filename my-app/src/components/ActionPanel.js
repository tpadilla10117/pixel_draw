import React from 'react';

/* Lets us build a blank cell list */
import { buildCellList } from '../utils';

/* Action Panel is the interface for updating the Grid */

    const ActionPanel = (props) => {

        const { activeColor, cellList, setCellList } = props;
        
        return <div className="action-panel">

        {/* Clear Colors Button */}
        <button onClick={() => {
            const newCellList = buildCellList()
            setCellList(newCellList)
        }}>Clear All</button>

        {/* Fill All Cells Button */}
        <button onClick={() => {
            const newCellList = buildCellList()
            newCellList.map((cell) => 
            cell.color = activeColor 
            , setCellList(newCellList) )
        }}>Fill All</button>

        {/* Fill Empty Cells w/ current color */}
        <button onClick={() => {
            const newList = buildCellList()
            cellList.map((cell, index) => {
                if(!cell.color) {
                    newList[index].color = activeColor
                } else {
                    newList[index].color = cell.color
                }
            })
            setCellList(newList);
            }} >Fill Empty</button>
        </div>
    }

export default ActionPanel;