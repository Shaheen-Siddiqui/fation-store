import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import axios from "axios";

import "./authentication.css";
import { authContext } from "../../hooks/context/authContext";

export const LogIn = () => {
  const navigate = useNavigate();
  const [passwordIcon, setPasswordIcon] = useState(false);

  const [userLoginCredential, setUserLoginCredential] = useState({
    email: "",
    password: "",
  });
  const { setAuthDispatch, user } = useContext(authContext);
  const { email, password } = userLoginCredential;

  const userLoginHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        userLoginCredential
      );
      setAuthDispatch({
        type: "USER_VELIDATED",
        payload: {
          user: res.data.data,
          token: res.data.token,
        },
      });

      localStorage.setItem("user", JSON.stringify(res.data.data));
      localStorage.setItem("token", res.data.token);

      toast.success("Logged in successfully!", { className: "toast-styling" });
      navigate("/product-listing");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error, { className: "toast-styling" });
      } else if (error.request) {
        toast.error("No response received from server", {
          className: "toast-styling",
        });
      } else {
        toast.error("Error occurred while logging in", {
          className: "toast-styling",
        });
      }
      console.log(error, "ERROR");
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={userLoginHandler}>
        <h1 className="form-text">Login</h1>

        <label className="form-lable" htmlFor="email">
          Email Address*
        </label>
        <input
          value={email}
          className="form-inp"
          id="email"
          type="text"
          required
          onChange={(event) =>
            setUserLoginCredential({
              ...userLoginCredential,
              email: event.target.value,
            })
          }
        />
        <label className="form-lable" htmlFor="password">
          Password*
        </label>

        <div className="hide-input-case">
          <input
            value={password}
            type={passwordIcon ? "password" : "text"}
            className="hided-input"
            required
            id="password"
            onChange={(event) =>
              setUserLoginCredential({
                ...userLoginCredential,
                password: event.target.value,
              })
            }
          />
          {passwordIcon ? (
            <FontAwesomeIcon
              className="eye-icon"
              icon={faEyeSlash}
              onClick={() => setPasswordIcon(!passwordIcon)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEye}
              className="eye-icon"
              onClick={() => setPasswordIcon(!passwordIcon)}
            />
          )}
        </div>
        {/* <button
          className="login-btns"
          type="submit"
          onClick={guestCredentialHandler}
        >
          Enter Guest credentials
        </button> */}
        <button className="login-btns" type="submit">
          LogIn
        </button>
        <p className="new-account">
          Not a user yet?
          <Link to="/sign-up">
            <strong>
              <u>Create Acoount</u>
            </strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export { LogIn as default };
