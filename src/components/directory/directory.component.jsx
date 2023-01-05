import CategoryItem from "../category-item/category-item.component"

import './directory.styles.scss';

const Directory =({categories})=>{
    
    return (
        <div className="directory-container">
      {categories.map(({imageUrl,title,id})=>(
        <CategoryItem key={id} imageUrl={imageUrl} title={title}/>
      ))}
      
      
 
    </div>
    );

}
export default Directory;