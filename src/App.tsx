
import './App.css'
import { Button,Navbar,Stack,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './components/navbar'
import SideMenu from './components/sidebar'
import ContentPage from './components/content'
function App() {

  return (
    <>
     <BasicExample/>
      <div className='d-flex'>
        <SideMenu/>
        <ContentPage/>
      </div>
    </>
  )
}

export default App
