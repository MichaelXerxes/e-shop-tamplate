import './directory-item.styles.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DirectoryItem= ({ category})  =>{
  const {title,imageurl,route}=category;
  const navigate=useNavigate();

  const onNavigateHandler=()=>navigate(route);
  return (
    <div className='directory-item-container' onClick={onNavigateHandler}>
      <div
        className='directory-background-image'
        style={{
          backgroundImage: `url(${imageurl})`,
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
