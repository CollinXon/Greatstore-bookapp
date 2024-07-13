import  BookListing  from "../Components/Booklisting";
import { ConnectSection } from "../Components/ConnectSection";

import { HeroSection } from "../Components/HeroSection";
import { MostSearched } from "../Components/SearchListing";
import {NavBar} from "../Components/NavBar"


export const ProductListing = () => {
  return (
    <div className="    flex  font-sans flex-col w-full  ml-4  mt-0  ">
     
<NavBar/>
      <HeroSection />

      <ConnectSection />

      <BookListing />
     
      <MostSearched />
    </div>
  );
};
