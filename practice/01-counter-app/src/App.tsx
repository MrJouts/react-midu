
import { ProductCard } from './components/ProductCard'

import styles from './App.module.css'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Manzana',
    price: 100
  },
  {
    id: 2,
    name: 'Naranja',
    price: 200
  },
  {
    id: 3,
    name: 'Banana',
    price: 300
  }
]

function App() {

  const [total, setTotal] = useState(products.reduce((acc, { price }) => acc + price, 0))

  return (
    <>
      <h1>Counter App</h1>
      {products.map(({ id, price, name }) => (
        <ProductCard key={id} price={price} productName={name} total={total} setTotal={setTotal} />
      ))}
      <div className={styles.total}>
        <span className={styles.span}>Total</span>
        <span className={styles.span}>$ {total}</span>
      </div>
    </>
  )
}

export default App
