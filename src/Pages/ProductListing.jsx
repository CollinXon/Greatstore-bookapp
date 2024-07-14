import BookListing from "../Components/Booklisting";
import { ConnectSection } from "../Components/ConnectSection";

import { HeroSection } from "../Components/HeroSection";

import { NavBar } from "../Components/NavBar";

export const ProductListing = () => {
  return (
    <div className="overflow-x-hidden md:flex font-sans flex-col w-full ">
      <NavBar />
      <HeroSection />

      <ConnectSection />

      <BookListing />
    </div>
  );
};
