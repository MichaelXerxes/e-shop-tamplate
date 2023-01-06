import './footer.styles.scss';


const Footer=()=>{

    return(
        <div className='footer-container'>
            <div className='footer-col'>
                <p>Contact Details</p>
                <p>Mobile</p>
                <p>EMail</p>
            </div>
            <div className='footer-col'>
                <h3>E-Shop</h3>
            </div>
            <div className='footer-col'>
                <p>Address</p>
                <p>Post Code</p>
                <p>City</p>
            </div>
        </div>
    );
}
export default Footer;