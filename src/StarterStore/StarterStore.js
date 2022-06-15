import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import img from '../assets/lovelamps.png'
import './StarterStore.scss'

const StarterStore = () => {

  const { allItemsObj } = useContext(ProductContext)

  return (
    <div className="starter-store-main">
      <div className="love-lamps"> I <img src={img} alt='love' /> lamp</div>
      <div className="map-cont">

        {allItemsObj.map((item) => (
          <div className="all-imgs" key={item.id}>
            <div className="cont-for-img">
              <img className='img' src={item.img} alt='lamp' />
              <div className="under-img">
                <div>{item.productName}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default StarterStore