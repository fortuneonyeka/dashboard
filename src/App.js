import "./App.css";
import React, {useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {FiSettings} from "react-icons/fi"
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import {NavBar, Footer, SideBar, ThemeSetting,LineChart} from "./Components"
import {Ecommerce,Customers,Orders,Calendar,Employees,Stacked,Pyramid,Kanban,Area,Bar,Pie,Financial,ColorMapping,ColorPicker,Editor} from "./Pages"


const App = () => {
  const activeMenu = false
  return(
    <div>
 <BrowserRouter>
 <div className="flex relative dark:bg-main-dark-bg">
  <div className="fixed right-4 bottom-4" style={{zIndex:"1000"}}>
    <TooltipComponent content="Settings" postion="Top">
    <button type="button" className="text-3xl p-3 hover:drops-shadow-xl hover:bg-light-gray text-white" style={{background:"blue", borderRadius:"50%"}}><FiSettings /></button>
    </TooltipComponent>
  </div>
    {activeMenu ? (
      <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
        <SideBar/>
      </div>
    ):(
      <div className="w-0 dark:bg-secondary-dark-bg">
       <SideBar/>
      </div>
    )}

  <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? " md:ml-72 " : " flex-2"}`
    
   }>
    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
  <NavBar/>
    </div>
  </div>

  <div>
    <Routes>
      {/* Dashboard */}
      <Route path="/" element={<Ecommerce/>}/>
      <Route path="/ecommerce" element={<Ecommerce/>}/>

      {/* pages */}
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/employees" element={<Employees/>}/>
      <Route path="/customers" element={<Customers/>}/>

      {/* Apps */}
      <Route path="/calendar" element={<Calendar/>}/>
      <Route path="/kanban" element={<Kanban/>}/>
      <Route path="/editor" element={<Editor/>}/>
      <Route path="/color-picker" element={<ColorPicker/>}/>

      {/* Charts */}
      <Route path="/linechart" element={<LineChart/>}/>
      <Route path="/area" element={<Area/>}/>
      <Route path="/bar" element={<Bar/>}/>
      <Route path="/pie" element={<Pie/>}/>
      <Route path="/financial" element={<Financial/>}/>
      <Route path="/color-mapping" element={<ColorMapping/>}/>
      <Route path="/pyramid" element={<Pyramid/>}/>

    </Routes>
  </div>
 </div>
 </BrowserRouter>
   </div>
  )
}

export default App;
