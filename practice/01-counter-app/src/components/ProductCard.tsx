import { useState } from "react"
import { Button } from "./Button"

import styles from './ProductCard.module.css'

export const ProductCard = ({ price, productName, total, setTotal }: {
  price: number
  productName: string
  total: number
  setTotal: (total: number) => void
}) => {
  const [count, setCount] = useState(1)

  const addProduct = () => {
    setCount((count) => count + 1)
    setTotal(total + price)
  }

  const removeProduct = () => {
    if (count <= 1) return
    setCount((count) => count - 1)
    setTotal(total - price)
  }

  return (
    <div className={styles.card}>
      <span className={styles.productName}>{productName}</span>
      <Button text="-" fn={() => removeProduct()} />
      <span className={styles.count}>{count}</span>
      <Button text="+" fn={() => addProduct()} />
      <span className={styles.price}>$ {price * count}</span>
    </div>
  )
}