import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
const  Home=()=> {

  
 
  return (
    <div>
        
        <Directory  />
        <Outlet/>
    </div>
    
  );
};


export default Home;
