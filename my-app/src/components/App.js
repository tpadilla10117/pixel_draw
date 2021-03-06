/* import './App.css'; */
import React, { useState } from 'react';

import Grid from './Grid';
import Header from './Header';
import Palette from './Palette';
import ActionPanel from './ActionPanel';

/* For access to COLORS and buildCellList for our initial state objects */

import {
  COLORS,
  buildCellList
} from '../utils';

const App = () => {

  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [cellList, setCellList] = useState(buildCellList() );

  return (
    <div className="app">
      <Header />
      <Palette activeColor={activeColor} setActiveColor={setActiveColor}/>
      <Grid cellList={cellList} setCellList={setCellList} activeColor={activeColor} />
      <ActionPanel activeColor={activeColor} cellList={cellList} setCellList={setCellList} />
    </div>
  );
}

export default App;
