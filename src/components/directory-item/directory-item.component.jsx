import './directory-item.styles.scss';
import { Link } from 'react-router-dom';

const DirectoryItem= ({ imageUrl, title })  =>{
  
  return (
    <div className='directory-item-container'>
      <div
        className='directory-background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-body-container'>
        
        <h2><Link to={`shop/${title}`}>{title} </Link></h2>
       
        
        <p><Link to={'shop'}>Shop Now</Link></p>
       
      </div>
    </div>
  );
};

export default DirectoryItem;
