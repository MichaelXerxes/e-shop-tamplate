import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';

const Directory =({categories})=>{
    
    return (
        <div className="directory-container">
      {categories.map(({imageUrl,title,id})=>(
        <DirectoryItem key={id} imageUrl={imageUrl} title={title}/>
      ))}
      
      
 
    </div>
    );

}
export default Directory;