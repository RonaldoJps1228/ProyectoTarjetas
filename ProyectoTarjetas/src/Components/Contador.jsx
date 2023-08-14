import React from 'react'

const Contador = (props) => {
  return (
    <div className='cont'>
        <button onClick={()=>props.setCount(props.count +1)}>Aumentar</button>
        <button onClick={()=>props.setCount(props.count -1)}>Disminuir</button>
        <button onClick={()=>props.setCount(0)}>Reset</button>
    </div>
  )
}

export default Contador
