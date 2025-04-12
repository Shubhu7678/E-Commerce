
import {Routes, Route} from 'react-router-dom'
import {lazy,Suspense } from 'react';

const Home = lazy(() =>  import("./pages/Home.tsx"));
const Cart =  lazy(() =>  import('./pages/Cart.tsx')) 
const Search = lazy(() =>  import('./pages/Search.tsx'))
import Loader from './components/Loader.tsx';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes> 
      </Suspense>
    </>
  )
}

export default App