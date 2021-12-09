import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";

function App() {
  return (
      <div className='container'>
          <Router>
              <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/post/:id" element={<Post></Post>}></Route>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
