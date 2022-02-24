import Header from "./pages/Header";
import Footer from "./pages/Footer"
import Main from "./pages/Main";
import Menu from './Components/Menu'
import Stuff from "./Components/Stuff/Stuff";
import Reservation from "./Components/Reservition/Reservation";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
       <Header/>
        <Main/>
        <Menu/>
        <Stuff/>
        <Reservation/>
        <Contact/>
       <Footer/>
     </div>
  );
}

export default App;
