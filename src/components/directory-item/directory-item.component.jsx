import './directory-item.styles.scss';

const DirectoryItem= ({ imageUrl, title })  =>{
 
  return (
    <div className='directory-container'>
      <div
        className='directory-background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;