import { Fragment} from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../navigation/crown.svg";
//import { UserContext } from "../../contexts/user.context";
import { signOutStart } from "../../store/user/user.action";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
//import { CartContext } from "../../contexts/cart.context";
import { selectIsOpen } from "../../store/cart/cart.selector";
import { useSelector,useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { singOutUser } from "../../utils/fire-base/fire-base.utils";

const Navigation = () => {
  
  const currentUser = useSelector(selectCurrentUser);
  const dispatch=useDispatch();
  const isCartOpen=useSelector(selectIsOpen);
  const singOutUser=()=>dispatch(signOutStart());
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
       <Link className="nav-link" to="/test-display">
            Test
          </Link> 
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nal-link" onClick={singOutUser}>
              Sign Out
            </span>
          ) : (
            <div>
              <Link className="nav-link" to="/authentication">
                Log-In
              </Link>

              <Link className="nav-link" to="/sign-up-form">
                Sing-Up
              </Link>
              <Link className="nav-link" to="/sign-in-form">
                Sing-In
              </Link>
            </div>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
