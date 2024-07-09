import { BookListing } from "../Components/Booklisting";
import { ConnectSection } from "../Components/ConnectSection";
import { EditorsListing } from "../Components/EditorsListing";
import { HeroSection } from "../Components/HeroSection";
import { MostSearched } from "../Components/SearchListing";

export const ProductListing = () => {
  return (
    <div className="font-sans Container flex flex-col w-full  ml-4  mt-0 ">
      <HeroSection />

      <ConnectSection />

      <BookListing />
      <EditorsListing />
      <MostSearched />
    </div>
  );
};
