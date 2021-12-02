import './App.css';
import Headers from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import ContentNews from "./components/content-news/content-news";
import Footer from "./components/footer/footer";

function App() {
  return (
      <div className='container'>
          <Headers></Headers>
          <Navbar></Navbar>
          <ContentNews></ContentNews>
          <Footer></Footer>
      </div>
  );
}

export default App;
