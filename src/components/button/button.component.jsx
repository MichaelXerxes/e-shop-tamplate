import {BaseButton,GoogleSignInButton,InvertedButton}from'./button.styles.jsx';



export const BUTTON_TYPE_CLASSES={
    base:'base',
    google:'google-sign-in',
    inverted:'inverted',
    red:'red',
}

const getButton=(buttonType=BUTTON_TYPE_CLASSES.base)=>({
    [BUTTON_TYPE_CLASSES.base]:BaseButton,
    [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
}[buttonType]);

const ButtonC=({children,buttonType,...otherProps})=>{

    const CustomButton=getButton(buttonType);
    return(
        <CustomButton {...otherProps}> 
        {/* className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}*/}
        
                {children}
        </CustomButton>
    );
}

export default ButtonC;