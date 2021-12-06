import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Post from "./components/post/post";

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
