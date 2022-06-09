import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import img from '../../assets/lovelamps.png'
import lamp1 from '../../assets/lamp-1.png'
import lamp2 from '../../assets/lamp-2.png'
import lamp3 from '../../assets/lamp-3.png'
import lamp4 from '../../assets/lamp-4.png'
import lamp5 from '../../assets/lamp-5.png'
import lamp6 from '../../assets/lamp-6.png'
import './StarterStore.scss'

const StarterStore = () => {

  // const { id } = useParams()

  // const [product, setProduct] = useState('')
  // const [arr, setArr] = useState([])

  // const addProduct = () => {
  //   arr.push(product)
  //   setArr(arr)
  //   setProduct('')
  // }

  return (
    <div className="starter-store-main">
      <div className="love-lamps"> I <img src={img} alt='love' /> lamp</div>
      {/* <div className="btn">
        <input value={product} onChange={(e) => setProduct(e.target.value)} />
        <button onClick={() => addProduct(setProduct)}>Add product</button>
      </div> */}
      <div className="map-cont">
        <div className="all-imgs">
          {/* <Link to={`/starter-store/${id}`}> */}
          <div className="cont-for-img">
            <img className="img" src={lamp1} alt="lamp-1" />
            <div className="under-img">
              <div>Jewellery1</div>
              <div className="price">150$</div>
            </div>
          </div>
          {/* </Link> */}
          <div className="cont-for-img">
            <img className="img" src={lamp2} alt="lamp-2" />
            <div className="under-img">
              <div>Mod</div>
              <div className="price">120$</div>
            </div>
          </div>
          <div className="cont-for-img">
            <img className="img" src={lamp3} alt="lamp-1" />
            <div className="under-img">
              <div>Crown</div>
              <div className="price">300$</div>
            </div>
          </div>
          <div className="cont-for-img">
            <img className="img" src={lamp4} alt="lamp-1" />
            <div className="under-img">
              <div>Green Mod</div>
              <div className="price">120$</div>
            </div>
          </div>
          <div className="cont-for-img">
            <img className="img" src={lamp5} alt="lamp-1" />
            <div className="under-img">
              <div>Gold</div>
              <div className="price">400$</div>
            </div>
          </div>
          <div className="cont-for-img">
            <img className="img" src={lamp6} alt="lamp-1" />
            <div className="under-img">
              <div>Gold</div>
              <div className="price">400$</div>
            </div>
          </div>
        </div>
        {/* {arr.map((item, index) => (
          <div className="all-cont-products" key={index}>
            <div className="product-list">{item}</div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default StarterStore