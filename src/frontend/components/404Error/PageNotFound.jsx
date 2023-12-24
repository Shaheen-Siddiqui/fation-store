import { Link } from "react-router-dom";

import { Footer } from "../Footer/Footer";
export const PageNotFound = () => {
  const cantetCase = {
    height: "61.5vh",
    display: "flex",
    justifyContent: "center",
  };

  const buttonGoBack = {
    padding: "1rem 2rem",
    cursor: "pointer",
  };
  return (
    <>
      <div style={cantetCase}>
        <img
          src="https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif"
          alt="page not fornd"
        />
      </div>
      <center>
        <Link to="/">
          <button style={buttonGoBack}>Go back</button>
        </Link>
      </center>
      <Footer />
    </>
  );
};
export { PageNotFound as default };
