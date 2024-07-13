  import Diversity from "../assets/diversity_2.svg"
  import Globe from "../assets/globe.svg"
  import EditorChoice from "../assets/editor_choice.svg" 


  export const ConnectSection = ()=>{

  return (

  <div className="  md:flex  p-8 w-3/4  ml-28 mt-8 place-items-center space-x-8  ">
       

          <div className=" flex flex-col text-center place-items-center">
              <img src={Diversity} className="w-8"/>
            <h2 className="text-lg font-bold">Join Our Community</h2>
            <p className="text-sm">Connect with fellow book lovers, 
  attend exclusive events, and 
  enjoy personalized recommendations</p>
          </div>
          <div className=" flex flex-col text-center place-items-center">
          <img src={Globe} className="w-8"/>
            <h2 className="text-lg font-bold">Adventure and Discovery</h2>
            <p className="text-sm">Embark on an Adventure at our 
  Goodness Bookstore.
  Every Book is a New Journey</p>
          </div>
          <div className=" flex flex-col text-center place-items-center">
          <img src= {EditorChoice} className="w-8"/>
            <h2 className="text-lg font-bold">Exclusive and Popular</h2>
            <p className="text-sm">Experience literary luxury at Goodness
  Bookstore. Curated collections for
  discerning readers</p>
          </div>
       

  </div>


  )









  }