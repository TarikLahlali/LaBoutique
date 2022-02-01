import Navbar from "../components/Navbar";
import Directory from "../components/Directory";
import Highlights from '../components/Highlights'
import Footer from "../components/Footer";

const Home = () => {
  
  return (
    <div>
      <Navbar pos="fixed" bgColor="transparent"/>
      <Directory/>
      <Highlights/>
      <Footer/>
    </div>
  )
}

export default Home
