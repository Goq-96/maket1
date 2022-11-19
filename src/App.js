import './App.css';
import Carusel from './Carusel/Carusel';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Section1 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
