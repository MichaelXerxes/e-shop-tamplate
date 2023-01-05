import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from "../navigation/crown.svg";

const Navigation =()=>{
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
             <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    Shop
                </Link>
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/sign-in">
                    Sing-In
                </Link>
                <Link className="nav-link" to="/sign-up-form">
                    Sing-Up From!
                </Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;