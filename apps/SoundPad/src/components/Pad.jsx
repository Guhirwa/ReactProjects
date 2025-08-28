import React from 'react'

const Pad = (props) => {

  return (
    <button onClick={() => {props.toggle(props.id)}} style={{backgroundColor: props.btnColor}} className={`h-[200px] w-[200px] border rounded-md cursor-pointer border-solid border-white ${(props.light) ? "opacity-100" : "opacity-15"}`}></button>
  )
}

export default Pad