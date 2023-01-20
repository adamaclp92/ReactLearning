import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component';
import CircleDrawer from './projects/circle-drawer/circle-drawer.component';
import SynonymApi from './projects/synonym-api/synonym-api.component';
import ColorChooser from './projects/color-chooser/color-chooser';
import UserReducerPractice from './projects/usereducer-practice/usereducer-practice.component';
import ReduxPractice from './projects/redux-practice/redux-practice.component';

const App = () => {
  return (
    <Routes>
       <Route element={<Home />} path="/">          
       <Route index element = {<Navigation />} ></Route>     
       <Route path="circledrawer" element={<CircleDrawer />} />
       <Route path="synonymapi" element={<SynonymApi />} />
       <Route path="colorchooser" element={<ColorChooser />} />
       <Route path="usereducerpractice" element={<UserReducerPractice />} />
       <Route path="reduxpractice" element={<ReduxPractice />} />
       </Route>
    </Routes>

   
  );
}

export default App;
