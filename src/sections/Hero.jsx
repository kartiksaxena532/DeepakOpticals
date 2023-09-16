import Button from "../Components/button";
import { arrowRight } from "../assets/icons";
const Hero = () => {
  return (
   
    <section id="home" 
    className="w-full flex 
    xl:flex-row
    flex-col justify-center min-h-screen gap-10 max-container
     border-2 border-red-500 p-2">

      <div className="relative xl:w-2/ flex flex-col justify-center items-start w-full max-xl: padding-x pt-28">
<p>Our New Collection</p>
<h1><span>Shades In Power</span>
<br/>
<span>Spectacles And Sunglasses</span></h1>
<p> Discover stylish arrivals ,quality and wide range of designs according to your face shape. </p>
<Button label="Show Now" iconUrl={arrowRight} Color="black"/>
      </div> 
    </section>
  )
}

export default Hero