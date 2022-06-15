import React from "react";
import lamp1 from '../assets/lamp-1.png'
import lamp2 from '../assets/lamp-2.png'
import lamp3 from '../assets/lamp-3.png'
import lamp4 from '../assets/lamp-4.png'
import lamp5 from '../assets/lamp-5.png'
import lamp6 from '../assets/lamp-6.png'

const ProductContext = React.createContext()
const { Provider, Consumer } = ProductContext

const ProductProvider = props => {
  const allItemsObj = [
    {
      id: 1,
      img: lamp1,
      productName: 'Jewellery1',
      price: '150$'
    },
    {
      id: 2,
      img: lamp2,
      productName: 'Mod',
      price: '300$'
    },
    {
      id: 3,
      img: lamp3,
      productName: 'Crown',
      price: '120$'
    },
    {
      id: 4,
      img: lamp4,
      productName: 'Green Mod',
      price: '120$'
    },
    {
      id: 5,
      img: lamp5,
      productName: 'Gold',
      price: '400$'
    },
    {
      id: 6,
      img: lamp6,
      productName: 'Gold',
      price: '400$'
    }
  ]

  const context = {
    allItemsObj
  }

  return <Provider value={context}>{props.children}</Provider>
}

export { ProductProvider, Consumer as ProductConsumer }
export default ProductContext