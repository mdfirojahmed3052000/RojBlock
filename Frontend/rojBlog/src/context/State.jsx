import React, { useState } from 'react'
import Context from './Context'

const State = (props) => {
    const [isAuth,setIsAuth] = useState(false)
  return (
    <Context.Provider value={{isAuth,setIsAuth}}>
        {props.children}
    </Context.Provider>
  )
}

export default State