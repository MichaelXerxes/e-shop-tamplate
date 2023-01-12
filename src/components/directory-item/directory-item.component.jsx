import {BackgroundImage,Body,DirectoryItemContainer}from'./directory-item.styles.jsx';
import { Link } from 'react-router-dom';

const DirectoryItem= ({ imageUrlFrom, title })  =>{
  
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imageUrl={imageUrlFrom}
        
      />
      <Body>
        
        <h2><Link to={`shop/${title}`}>{title} </Link></h2>
       
        
        <p><Link to={'shop'}>Shop Now</Link></p>
       
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
