import './App.css'
import ProductComponent from './components/ProductComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListProductComponent from './components/ListProductComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
 
  return (
    <>
      <BrowserRouter>
             <HeaderComponent/>
                  <Routes>
                       {/* //http://localhost:3000 */}
                       <Route path='/' element = {<ListProductComponent/>}></Route>

                       {/* //http://localhost:3000/product */}
                       <Route path='/product' element = {<ListProductComponent/>}></Route>

                        {/* //http://localhost:3000/addProdcut */}
                        <Route path='/addProduct' element = {<ProductComponent/>}></Route>
                        
                        {/* //http://localhost:3000/editProduct */}
                        <Route path='/editProduct/:id' element = {<ProductComponent/>}></Route>

                        {/* //http://localhost:3000/approvedtProduct */}
                        {/* <Route path='/approvedtProduct/:id' element = {<ProductComponent/>}></Route> */}

                         {/* //http://localhost:3000/rejectedtProduct */}
                         {/* <Route path='/rejectedtProduct/:id' element = {<ProductComponent/>}></Route> */}

                  </Routes>
                 
             <FooterComponent/>
          </BrowserRouter>
    </>
  )
}

export default App
