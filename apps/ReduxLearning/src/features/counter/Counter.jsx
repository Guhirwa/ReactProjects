import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {

const count = useSelector((state) => state.counter.count);
const dispatch = useDispatch();

  return (
    <section>
        <div className='bg-gray-400 max-w-[40%] py-18 text-center mx-auto rounded-full '>
          <p className='text-4xl font-semibold'>{count}</p>
        </div>
        <div className='flex justify-center gap-20 -mt-14'>
            <button className='text-3xl text-white bg-emerald-950 font-bold border border-gray-400 rounded-full px-6 py-3' onClick={() => dispatch(decrement())}>-</button>
            <button className='text-3xl text-white bg-emerald-950 font-bold border border-gray-400 rounded-full px-6 py-3' onClick={() => dispatch(increment())}>+</button>
        </div>
    </section>
  )
}

export default Counter