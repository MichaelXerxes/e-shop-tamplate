import { Fragment ,useContext} from "react";
import { Outlet,Link } from "react-router-dom";
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from "../navigation/crown.svg";
import { UserContext } from "../../contexts/user.context";
import {singOutUser} from '../../utils/firebase/firebase.utils';

const Navigation =()=>{
    const {currentUser}=useContext(UserContext);
    console.log(currentUser);
    
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
             <div className="nav-links-container">
             <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/shop">
                    Shop
                </Link>
                {
                    currentUser ?(
                        <span className='nal-link' onClick={singOutUser}>
                            Sign Out
                            </span>
                    ):(
                        <Link className="nav-link" to="/authentication">
                            Log-In
                        </Link>
                    )}
                
                <Link className="nav-link" to="/sign-up-form">
                    Sing-Up
                </Link>
                <Link className="nav-link" to="/sign-in-form">
                    Sing-In
                </Link>
                
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;