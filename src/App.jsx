import './App.css'
import Phones from './Phones/Phones'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/daisyNav/daisyNav'


function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <div className='w-11/12 mx-auto mt-10'>
      <LineChart></LineChart>
      <Phones></Phones>
      </div>
      
    </>
  )
}

export default App
