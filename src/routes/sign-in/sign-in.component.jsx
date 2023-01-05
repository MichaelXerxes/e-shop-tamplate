import {singInWithPopIpGoogle} from '../../utils/firebase/firebase.utils';
const SignIn=()=>{
    const logoGoogleUser=async ()=>{
        const response =await singInWithPopIpGoogle();
    }
    return (
        <div>
            <h1>Sign In</h1>
           <button  onClick={logoGoogleUser}>
            Sign In with PopUp Google
            </button>
            <h1>Sign In</h1>
        </div>
    );
};



export default SignIn;