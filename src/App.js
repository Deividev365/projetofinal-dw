
import {BrowserRouter, Route} from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import {WeatherApp} from './pages/WeatherApp';

function App() {

  return (

    <BrowserRouter>
    
        <Route path="/" exact component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/weatherApp" component={WeatherApp}/>
     
    </BrowserRouter>
   
  );
}

export default App;
