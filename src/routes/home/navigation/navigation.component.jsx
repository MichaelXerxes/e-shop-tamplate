import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import './navigation.styles.scss';

const Navigation =()=>{
    return (
      <Fragment>
        <div className="navigation">
            <div>Logo</div>
             <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    Shop
                </Link>
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;