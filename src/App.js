import './App.css';
import { Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies' ; 
import Connect from './Components/Connect' ;
import ScrollToTopButton from './Components/ScrollToTopButton'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/projects" element = {<Projects/>}/>
          <Route path="/technologies" element = {<Technologies/>}/>
          <Route path="/connect" element = {<Connect/>}/>
        </Routes>
      </main>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
