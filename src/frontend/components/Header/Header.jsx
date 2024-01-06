import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Tippy from '@tippyjs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faMagnifyingGlass,
  faCartArrowDown,
  faAddressCard,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { filterContext } from '../../hooks/context/filterContext';
import { productContext } from '../../hooks/context/productsContext';
import { authContext } from '../../hooks/context/authContext';
import { toast } from 'react-toastify';

export const Header = ({ bars, setBars }) => {
  const [isUserCaseOpen, setIsUserCaseOpen] = useState(false);
  const { setfilterDispatch, search } = useContext(filterContext);
  const { cart } = useContext(productContext);
  const { token, user, setAuthDispatch } = useContext(authContext);
  const navigate = useNavigate();

  const userLogoutHandler = () => {
    setAuthDispatch({ type: 'USER_LOGOUT' });

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    toast.info('logged out successfully', {
      autoClose: 2000,
      className: 'toast-styling',
    });
  };

  return (
    <>
      <div>
        <div className="header-container">
          <Link to="/" className="remove-ud">
            <div className="hdr-logo">
              <img
                className="logo-img "
                src="https://i.ibb.co/M6zm0Rh/logo.jpg"
                alt="logo"
                border="0"
              />
              <h2 className="logo-name">Abdullah Store</h2>
            </div>
          </Link>

          <div className="search-baar">
            <input
              type="search"
              placeholder="Search..."
              size="30"
              value={search}
              onChange={(event) =>
                setfilterDispatch({
                  type: 'SEARCH_PRODUCTS',
                  payload: event.target.value,
                })
              }
              onKeyPress={(e) => e.which === 13 && navigate('/product-listing')}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </div>

          <div className="hdr-right-side">
            <Link to="/product-listing" className="remove-ud">
              <h2>Explore</h2>
            </Link>

            <Link to="/cart">
              <div>
                <p className="c-w-count">{cart.length}</p>
                <br />
                <Tippy content="Cart" delay={[700, 0]}>
                  <FontAwesomeIcon icon={faCartArrowDown} size="2xl" />
                </Tippy>
              </div>
            </Link>

            <Tippy content="address" delay={[700, 0]}>
              <FontAwesomeIcon
                icon={faAddressCard}
                size="2xl"
                onClick={() => {
                  setIsUserCaseOpen(!isUserCaseOpen);
                }}
              />
            </Tippy>

            <Link to="/login">
              {token ? (
                <button className="hrd-login-btn" onClick={userLogoutHandler}>
                  Log out
                </button>
              ) : (
                <button className="hrd-login-btn">Log in</button>
              )}
            </Link>
          </div>
          <div
            className={bars === true ? 'responsive-bars' : 'bars'}
            onClick={() => setBars(!bars)}
          >
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </div>
        </div>

        {bars ? (
          <div className="rwd-hdr-right-side">
            <Link to="/" onClick={() => setBars(false)}>
              <h5>Home</h5>
            </Link>

            <Link to="/product-listing" onClick={() => setBars(false)}>
              <h5>Explore</h5>
            </Link>

            <Link to="/cart" onClick={() => setBars(false)}>
              <i>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </i>
            </Link>

            <i
              onClick={() => {
                setIsUserCaseOpen(!isUserCaseOpen);
              }}
            >
              <FontAwesomeIcon icon={faAddressCard} />
            </i>

            <Link to="/login" onClick={() => setBars(false)}>
              {token ? (
                <button className="rwd-login-btn" onClick={userLogoutHandler}>
                  Log out
                </button>
              ) : (
                <button className="rwd-login-btn">log in</button>
              )}
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>

      {token && isUserCaseOpen && (
        <div className="user-detail-space">
          <h2>name</h2>
          <p className="current-user-detail">{user.fullName}</p>
          <h2>email</h2>
          <p className="current-user-detail">{user.email}</p>
          <button
            className="address-btn"
            onClick={() => setIsUserCaseOpen(false)}
          >
            {user.phoneNumber}
          </button>
        </div>
      )}
    </>
  );
};

export { Header as default };
