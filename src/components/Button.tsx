import { useState } from "react"

const Button = () => {
    const [count, setCount] = useState(0)
   const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }
  return (
    <div>
    <button onClick={increase}> Increase</button> 
    <p>{count}</p>
    <button onClick={decrease}> Decrease</button>
     </div>
  )
}

export default Button