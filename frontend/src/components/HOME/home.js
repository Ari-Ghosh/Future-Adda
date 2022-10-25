import React from 'react';
import Feat from "./Feat";
import Inst from "./Inst";
import Comp from "./Comp";
import Busi from "./Busi";
import Tiles from "./Tiles";
import Transform from "./Transform";
import Carousel from './Carousel/Carausel';




const Home = () => {
    return (
     <div>  
      <Carousel/>
      <Tiles />
      <Feat />
      <Inst />
      <Comp />
      <Busi />
      <Transform />
     </div>
    );
}

export default Home;
