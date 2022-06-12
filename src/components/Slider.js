import { Carousel } from 'react-carousel-minimal';
import './content.css';


function Sliderview() {
 const data = [
    {
      image: require('./images/image1.jpg'),
    },
    {
      image: require("./images/imag2.jpg"),
      
    },
    {
      image: require("./images/image3.jpg"),
      
    },
    {
      image: require("./images/image4.jpg"),
      
    },
    
    
    
  ];

  return (
    <div className="App">
        <div className="app">
        <Carousel
            data={data}
            time={2000}
            width="550px"
            height="250px"
            radius="10px"
            automatic={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
          />
        </div>
        </div>
  );
}

export default Sliderview;