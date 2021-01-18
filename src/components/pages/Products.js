import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cards2 from "../cards2"
import Footer from '../Footer';
import ProductType from "../productType";
// import Marquee from "react-double-marquee";
import ProductsCourousel from "../productCourousel";


export default function Products() {



  return (
    <React.Fragment>
      {/* <h1 className='products'>PRODUCTS</h1> */}
      {/* <ProductType></ProductType> */}
      {/* <div className="marquee">This text will scroll from bottom to up</div> */}
      <ProductsCourousel></ProductsCourousel>
      {/* <Marquee>Content goes here </Marquee> */}
      <Cards displayTitle="Check out our solar products!"></Cards>
      <hr style={{ width: "80%", marginLeft: "10%" }}></hr>
      <Cards2 displayTitle="Check out our invertor products!"></Cards2>
      <ProductsCourousel></ProductsCourousel>
      <Footer />
    </React.Fragment>
  );
}
