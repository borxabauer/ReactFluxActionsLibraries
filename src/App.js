import { BrowserRouter } from 'react-router-dom';

import { MyContextComponent } from './context/MyContextComponent'
import Layout from './Layout'

function App() {

  return (
    <BrowserRouter>
      <MyContextComponent>
        <Layout/>
      </MyContextComponent>
    </BrowserRouter>
  )

}

export default App;