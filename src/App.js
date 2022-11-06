import './App.css';
import Home from './Component/Home';
import  Lazyload from './Component/Lazyload';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>

     <Route  exact path="/"  element={<Home/>} />
<Route path="/lazyload" element={<Lazyload/>} />
</Routes>
    </div>
  );
}

export default App;
