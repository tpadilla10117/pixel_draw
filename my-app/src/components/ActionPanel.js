import React from 'react';

/* Lets us build a blank cell list */
import { buildCellList } from '../utils';

/* Action Panel is the interface for updating the Grid */

const ActionPanel = (props) => {

    const { activeColor, cellList, setCellList } = props;
    
    return <div className="action-panel">

    <button onClick={() => {
        const newCellList = buildCellList()
        setCellList(newCellList)
      }}>Clear All</button>

    <button onClick={() => {
        const newCellList = buildCellList()
        newCellList.map((cell) => 
        cell.color = activeColor 
        , setCellList(newCellList) )
    }}>Fill All</button>

    </div>
    
    




}

export default ActionPanel;