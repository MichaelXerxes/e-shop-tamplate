import './product-card.styles.scss';
import ButtonC from '../button/button.component';
const ProductCard=({product})=>{
    const {name,price,imageUrl}=product;
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonC buttonType='inverted'>Add to card</ButtonC>
        </div>
    );
};


export default ProductCard;