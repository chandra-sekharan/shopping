import React, { useState, useEffect } from 'react';
import Router from './Router';



function App() {

  const [cart , setcart] = useState([]);
  const [product , setproduct] = useState([]);

useEffect(()=>{
    fetch("https://api.jsonbin.io/b/5efb732c7f16b71d48a8cd5d/1").then(
        Response => Response.json()
    ).then(
        data => setproduct(data.products)
    )
},[])

  const handleaddproduct = (product) =>{
    setcart([...cart, {...product , quantity:1}]);
    alert("Item added to the cart")
  }

  return (
    <div>
      <Router kart={cart} product={product} handleaddproduct={handleaddproduct}/>
    </div>
  );
}

export default App;
