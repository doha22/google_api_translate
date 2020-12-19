import './App.css';
import{BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/home"


function App() {
  return (
    <Router>
    <div className="App">
     {/* <div className="container-fluid"> */}
     <Route exact path="/" > <Home /></Route>
     


     {/* </div> */}
    </div>
    </Router>
  );
}

export default App;
