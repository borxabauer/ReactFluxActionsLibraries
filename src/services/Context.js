import { useState } from 'react'
import { createContext } from 'react'

const myContext = createContext();

function MyContextComponent ({children}) {

  const [ articles, setArticles ] = useState([])
  const [ users, setUsers ] = useState([])
  
  const contextContent = {
    states: {
      users,
      articles
    },
    actions: {
      addUser: function (user) {
        setUsers([...users, user])
      },
      addArticle: function (article) {
        setArticles([...articles, article])
      },
    }
  }

  return (
    <myContext.Provider value={contextContent}>
      {children}
    </myContext.Provider>
  )
  
}

export { MyContextComponent, myContext }