import { BrowserRouter } from 'react-router-dom';

import { MyContextComponent } from './services/MyContextComponent'
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
