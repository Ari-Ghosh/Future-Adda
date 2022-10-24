import React from 'react';
import Feat from "./Feat";
import Inst from "./Inst";
import Comp from "./Comp";
import Busi from "./Busi";
import Transform from "./Transform";
import Carousel from './Carousel/Carausel';




const Home = () => {
    return (
     <div>  
      <Carousel/>
      <Feat />
      <Inst />
      <Comp />
      <Busi />
      <Transform />
     </div>
    );
}

export default Home;
