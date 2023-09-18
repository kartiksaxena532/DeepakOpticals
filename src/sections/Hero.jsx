import Button from "../Components/button";
import { statistics } from "../constants";
import { arrowRight } from "../assets/icons";
const Hero = () => {
  return (
   
    <section id="home" 
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-500 p-2">
<div className="relative xl:w-2/ flex flex-col justify-center items-start w-full max-xl: padding-x pt-28">
<p className="text-xl font-montserrat text-coral-red ">Our New Collection</p>
<h1 className="mt-10 font-palanquin text-8xl max-sm: text-[72px]
max-sm: leading-[82px] xl: bg-white xl:whitespace-nowrap z-10 pr-10"><span>Shades In Power💪</span>
<br/>
<span className="font-bold  md:leading-[96px] lg:leading-[134px] text-coral-red inline-block mt-1">Spectacles🥸 And Sunglasses😎</span></h1>
<p className="font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-7 sm:max-w-sm "> Discover stylish arrivals,quality and wide range of designs According to your face shape 🧔‍♂️.</p>
<Button label="Show Now" iconUrl={arrowRight} Color="black"/>
<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
  {statistics.map((stat)=>(
   <div key={stat.label}>
    <p>{stat.value}</p>
    <p>{stat.label}</p>
    </div>


  ))}
</div>
      </div> 
    </section>
  )
}

export default Hero