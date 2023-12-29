import { useContext, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

// internal imports
import "./authentication.css";
import { toast } from "react-toastify";
import { authContext } from "../../hooks/context/authContext";

export const SignUp = () => {
  const navigate = useNavigate();

  const [passwordIcon, setPasswordIcon] = useState(false);
  const { setAuthDispatch } = useContext(authContext);

  const [userInformation, setUserInformation] = useState({
    email: "",
    fullName: "",
    password: "",
    phoneNumber: "",
  });
  const { fullName, email, password, phoneNumber } = userInformation;

  const userSignedUpHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://abcstore-backend.onrender.com/signup",
        userInformation
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

      toast.success("signedup successfully!", { className: "toast-styling" });
      navigate("/product-listing");
    } catch (error) {
      toast.error(error.response.data.error, { className: "toast-styling" });
      console.log(error);
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="login-form signup-form" onSubmit={userSignedUpHandler}>
          <h1 className="form-text">Sign Up</h1>

          <label className="form-lable" htmlFor="fullname">
            Full Name
          </label>
          <input
            value={fullName}
            autoComplete="off"
            required
            type="text"
            id="fullname"
            name="fullName"
            className="form-inp"
            placeholder="Enter your full Name"
            onChange={(event) =>
              setUserInformation({
                ...userInformation,
                fullName: event.target.value,
              })
            }
          />

          <label className="form-lable" htmlFor="confirm-password">
            Mobile Number*
          </label>

          <div className="hide-input-case">
            <input
              // required
              className="hided-input"
              value={phoneNumber}
              autoComplete="off"
              type="number"
              id="phone number"
              name="phoneNumber"
              placeholder="Enter phone number"
              onChange={(event) =>
                setUserInformation({
                  ...userInformation,
                  phoneNumber: event.target.value,
                })
              }
            />
          </div>

          <label className="form-lable" htmlFor="email">
            Email Address*
          </label>
          <input
            value={email}
            className="form-inp"
            type="email"
            id="email"
            required
            name="email"
            placeholder="admin@gmail.com"
            onChange={(event) =>
              setUserInformation({
                ...userInformation,
                email: event.target.value,
              })
            }
          />

          <label className="form-lable" htmlFor="password">
            Password
          </label>
          <div className="hide-input-case">
            <input
              required
              className="hided-input"
              value={password}
              type={passwordIcon ? "password" : "text"}
              id="password"
              autoComplete="off"
              name="password"
              placeholder="Enter your password"
              onChange={(event) =>
                setUserInformation({
                  ...userInformation,
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

          <button type="submit" className="login-btns">
            Register
          </button>

          <p className="new-account">
            Already have account?
            <Link to="/login">
              <strong>
                <u>Login Here</u>
              </strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export { SignUp as default };
