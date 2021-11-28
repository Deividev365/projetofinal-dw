import { Routes ,Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Weather from './pages/Weather';

function Routes() {
  return (
    <BrowserRouter>
          <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/weatherApp" component={Weather} />
              <Route path="/login" component={Weather} />
          </Switch>
    </BrowserRouter>
  );
}

export default App;
