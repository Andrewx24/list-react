import Button from "./components/Button"
import Footer from "./components/Footer"
import Listnames from "./components/Listnames"
import Lists from "./components/Lists"
import Navbar from "./components/Navbar"
import Search from "./components/Search"

function App() {
 

  return (
    <>
     <div className="text-center">
     <Navbar/>
     <Search/>
      <Listnames/>
     <Lists name='John' city='New York'/>
     <Button/>
    
     <Footer/>
  </div>
    </>
  )
}

export default App
