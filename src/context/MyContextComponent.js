import { createContext } from 'react'

import useContextData from './useContextData';

export const myContext = createContext();

export function MyContextComponent ({children}) {

  return (
    <myContext.Provider value={useContextData()}>
      {children}
    </myContext.Provider>
  )
  
}