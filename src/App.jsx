import Footer from "./footer/Footer"
import Home from "./home/Home"
import Menu from "./menu/Menu"
import Subeler from "./subeler/Subeler"

function App() {

  return (
    <>
      <div style={{display:"flex", flexDirection:"column"}}>
        <div style={{flex:"1"}}>
      <Home/>
      </div>
      <div style={{flex:"1"}}>
      <Subeler/></div>
      </div>
      <div style={{flex:"1"}}>
      <Menu/>
      </div>
      <div style={{flex:"1"}}>
      <Footer/>
      </div>
    </>
  )
}

export default App
