
import {BrowserRouter, Route} from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';

function App() {

  return (

    <BrowserRouter>
        <Route path="/" exact component={Landing}/>
        <Route path="/login" exact component={Login}/>
     
    </BrowserRouter>
   
  );
}

export default App;
