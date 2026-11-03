import background from "../assets/images/hero-background.png"
import Hero from "../components/Hero"

import Cartergories from "../components/Cartegories"
import Collection from "../components/Collection";
function Home() {
  return (
    <>
      <header>
        <img src={background} className="absolute right-0 -top-2.5 z-[-1]"/>
        <Hero />
    </header>

      <main>
      <Cartergories/>
      <Collection/>
         </main>
      
        
     
    </>
  );
}
export default Home;