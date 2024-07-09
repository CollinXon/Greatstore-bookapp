import { BookListing } from "../Components/Booklisting";
import { ConnectSection } from "../Components/ConnectSection";
import { EditorsListing } from "../Components/EditorsListing";
import { HeroSection } from "../Components/HeroSection";
import { MostSearched } from "../Components/SearchListing"; 


export const ProductListing = ()=>{


   return (

<div className= "font-sans Container flex flex-col w-[1280px]  ml-4  mt-0 border-solid border-2 border-red-600  bg-[#F9F9FB;]">

    

<HeroSection/>

<ConnectSection/>


<BookListing/>
<EditorsListing/>
<MostSearched/>


</div>







   )
}



