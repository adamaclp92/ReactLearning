import './App.css';
import { Route, Routes } from 'react-router-dom';


import Home from './routes/home/home.component';
import CircleDrawer from './projects/circle-drawer/circle-drawer.component';
import SynonymApi from './projects/synonym-api/synonym-api.component';
import ColorChooser from './projects/color-chooser/color-chooser';
import UserReducerPractice from './projects/usereducer-practice/usereducer-practice.component';
import ReduxPractice from './projects/redux-practice/redux-practice.component';
import Tenzies from './projects/tenzies/tenzies'

import 'semantic-ui-css/semantic.min.css';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="circledrawer" element={<CircleDrawer />} />
        <Route path="synonymapi" element={<SynonymApi />} />
        <Route path="colorchooser" element={<ColorChooser />} />
        <Route path="usereducerpractice" element={<UserReducerPractice />} />
        <Route path="reduxpractice" element={<ReduxPractice />} />
        <Route path="tenzies" element={<Tenzies />} />
      </Routes>
    </React.Fragment>



   
  );
}

export default App;
