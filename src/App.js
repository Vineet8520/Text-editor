import './App.css';
import Header from './Components/Header';
import TextArea from './Components/TextArea';
import About from './Components/About';
import Cart from './Components/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router> 
      <>
     <Header title = {'Text-Editor'} />
    <div> 
  

     <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<TextArea />} />
        </Routes>
          {/* /* <Route path="/About">
            <About />
          </Route>
          <Route path="/Cart">
          <Cart />
          </Route>
          <Route path="/">
          <TextArea/>
          </Route>*/ }
    
        </div>
    </>
     </Router>
  );
}

export default App;
