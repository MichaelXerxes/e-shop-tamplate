import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

const categories=[
  {
    id: 1,
    title: "Hats",
    imageurl: "https://i.ibb.co/cvpntL1/hats.png",
    route:'shop/hats'
  },
  {
    id: 2,
    title: "Jackets",
    imageurl: "https://i.ibb.co/px2tCc3/jackets.png",
    route:'shop/jackets'
  },
  {
    id: 3,
   title: "Sneakers",
    imageurl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route:'shop/sneakers'
  },
  {
    id: 4,
    title: "Womens",
    imageurl: "https://i.ibb.co/GCCdy8t/womens.png",
    route:'shop/womens'
  },
  {
    id: 5,
    title: "Mens",
    imageurl: "https://i.ibb.co/R70vBrQ/men.png",
    route:'shop/mens'
  }
];

const Directory =()=>{
  const {categoriesMap}=useContext(CategoriesContext);

  
    return (
        <div className="directory-container">
      {categories.map((category)=>(
        <DirectoryItem key={category.id} category={category}/>
      ))}
      
      
 
    </div>
    );

}
export default Directory;