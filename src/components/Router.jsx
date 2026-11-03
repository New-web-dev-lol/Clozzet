import { BrowserRouter,Routes,Route } from "react-router"
import Notfound from "../components/Notfound"   
import Home from "../pages/Home"
import Cart from "../pages/Home"
import Layout from "../pages/Layout"

function Router(){
    return(
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Layout><Home/></Layout>}/>
       <Route path="/cart" element={<Layout><Cart/></Layout>}/>
       <Route path="*" element={<Layout><Notfound/></Layout>}/>
       </Routes>
       </BrowserRouter>

    )
}
export default Router