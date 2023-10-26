import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Featured from './components/Featured';
import DownNavbar from './components/DownNavbar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
function App() {
  return (
    <>
  <Navbar />
  <DownNavbar />
  <Featured />
  <Products />
  <Footer />
  </>
  )
}

export default App;
