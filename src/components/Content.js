import React from "react";
import Head from './Header';
import Slider from './Slider';



const Content = ({handleaddproduct , product }) =>{

const expand =()=>{
    document.getElementsByClassName('main')[0].style.height ="auto"
    document.getElementById('load').style.display ="none";
}
 
return(
        <div>
            <Head />
            <div className="content">
             <Slider/>
             <div className="main">
                 {product.map(each =>
                <div className="card" id={each.styleid}>
                     <img src={each.search_image} alt={each.brands_filter_facet}></img>
                     <p>{each.product_additional_info}</p>
                     <span>{each.price}/-</span>
                     <button onClick={()=>handleaddproduct(each)}>Add to cart</button>
                </div>
                 )}
                 <input type="button" value="Load More" onClick={expand} id="load"></input>
                </div>
             </div>
            </div>

    );
}

export default Content;