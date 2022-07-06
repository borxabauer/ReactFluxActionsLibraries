import { BrowserRouter } from 'react-router-dom';

import { MyContextComponent } from './services/Context'
import Layout from './views/Layout'

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
