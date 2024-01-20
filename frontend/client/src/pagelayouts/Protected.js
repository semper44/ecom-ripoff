import Header from "../components/header/Header";
import styles from "./Body.module.css";
import Footer from "../components/footer/Footer";
import { Outlet, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../components/profiles/login/LoginFetch";

function Protected(props) {
  // const[show, setShow]= useState(true)
  const userdetails = useContext(AuthContext);
  let user;
  if (userdetails) {
    user = userdetails.user;
  }
  return (
    <>
      <div className={styles["styles-body"]}>
        <Header
          onCart={props.onToglling}
          onSearch={props.onShow}
          onTransform={props.onChange}
        />
      </div>
      {user ? <Outlet /> : <Navigate to="/login" />}

      <Footer />
    </>
  );
}

export default Protected;
