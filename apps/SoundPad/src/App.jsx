import React from 'react'
import padsData from '/src/pads.js'
import Pad from './components/Pad.jsx'

const App = () => {

  const [pads, setPads] = React.useState(padsData)

  const padsElement = pads.map(pad => (
    <Pad key={pad.id} btnColor={pad.color} light={pad.on}  />
  ))

  console.log(padsElement)
  return (
    <main className='flex justify-center items-center'>
      <div className='grid grid-cols-4 grid-rows-2 gap-2.5 mt-10'>
        {padsElement}
      </div>
    </main>
  )
}

export default App