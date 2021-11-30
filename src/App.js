
import {BrowserRouter, Route} from 'react-router-dom';

import { Landing } from './pages/Landing';

function App() {

  return (

    <BrowserRouter>
        <Route path="/" exact component={Landing}/>
     
    </BrowserRouter>
   
  );
}

export default App;
