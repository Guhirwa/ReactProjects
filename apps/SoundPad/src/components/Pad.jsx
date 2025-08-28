import React from 'react'

const Pad = (props) => {

  const [onOff, setOnOff] = React.useState(props.light)

  function ligthOnOff(){
    return setOnOff(prevOnOff => !prevOnOff)
  }

  return (
    <button onClick={ligthOnOff} style={{backgroundColor: props.btnColor}} className={`h-[200px] w-[200px] border rounded-md cursor-pointer border-solid border-white ${(onOff) ? "opacity-100" : "opacity-15"}`}></button>
  )
}

export default Pad