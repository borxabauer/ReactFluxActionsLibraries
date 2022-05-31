import { useState } from 'react'

import MyContext from './MyContext'

import MainView from './MainView'

function App() {

  const [ articles, setArticles ] = useState([])

  const context = {
    states: {
      articles
    },
    actions: {
      addArticle: function (article) {
        const oldArticles = [...articles]
        oldArticles.push(article)
        setArticles([...oldArticles])
      },
      deleteArticle: function (articleIdx) {
        const oldArticles = [...articles]
        oldArticles.splice(articleIdx,1)
        setArticles([...oldArticles])
      },
      updateArticle: function (articleIdx, newarticle) {
        const oldArticles = [...articles]
        oldArticles[articleIdx] = newarticle
        setArticles([...oldArticles])
      },
      getArticle: function (propertyName, value) {
        const articleIndex = articles.findIndex(
          item => item[propertyName] === value
        )
        return {
          index: articleIndex,
          article: articles[articleIndex]
        }
      }
    }
  }

  return (
    <MyContext.Provider value={context}>
      <MainView/>
    </MyContext.Provider>
  );
}

export default App;
