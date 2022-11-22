import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../../../features/counter/counterSlice'
import './Counter.css'
import { useState } from 'react'

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const [incrementAmt, setIncrementAmt] = useState(0)

  const addValue = Number(incrementAmt) || 0

  const resetAll = () => {
    setIncrementAmt(0)
    dispatch(reset())
  }

  return (
    <div className='Counter'>
      <div className='box'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Reset value"
          onClick={() => resetAll()}
        >
          Reset All
        </button>
      </div>
      <div className="box">
        <input type="text" value={incrementAmt} onChange={(e) => setIncrementAmt(e.target.value)} />
        <button
          aria-label="Increment By Amount"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Increment By Amount
        </button>
      </div>
    </div>
  )
}

export default Counter