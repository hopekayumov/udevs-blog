import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import ProfileNews from './pages/profile-news';
import CreatePost from './components/create-post/create-post';

function App() {
  return (
      <div className='container'>
          <Router>
              <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/post/:id" element={<Post></Post>}></Route>
                  <Route path="/profile/posts" element={<ProfileNews></ProfileNews>}></Route>
                  <Route path="/create-post" element={<CreatePost></CreatePost>}></Route>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
