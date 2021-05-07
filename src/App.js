import { BrowserRouter, Route } from 'react-router-dom'

// screens
import About from './screens/About/About'
import Forcast from './screens/Forcast/Forcast'
import Current from './screens/Current/Current'

// components
import BottomNav from './components/BottomNav/BottomNav'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact={true} component={About}/>
      <Route path='/forcast' exact={true} component={Forcast}/>
      <Route path='/current' exact={true} component={Current}/>
      <BottomNav />
    </BrowserRouter>

  );
}


export default App;