import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
const Directory =({categories})=>{
  const {categoriesMap}=useContext(CategoriesContext);
    return (
        <div className="directory-container">
      {categories.map(({imageUrl,title,id})=>(
        <DirectoryItem key={id} imageUrl={imageUrl} title={title}/>
      ))}
      
      
 
    </div>
    );

}
export default Directory;