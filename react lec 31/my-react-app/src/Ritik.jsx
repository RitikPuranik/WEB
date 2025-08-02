import React from 'react'
import { useContext } from 'react'
import Context from './Context'

const Ritik = () => {
    let Data = useContext(Context)
  console.log(Data)
  return (
    <div>props: {Data}</div>
  )
}

export default Ritik