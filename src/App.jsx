

import { Outlet } from "react-router-dom"
import MainLayout from "./ComponentCollection/HomeComponents/MainLayout"


const App = () => {
  return (
    <div>
      <MainLayout>
        <Outlet/>
      </MainLayout>
      
    </div>
  )
}

export default App
