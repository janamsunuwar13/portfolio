import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
function App() {
  
  return (
    <div className="App">
      
      <Home/>
      <Aboutme />
      <Resume/>
      <ContactMe/>
      <Footer/>
      

    </div>
  )
}

export default App;
