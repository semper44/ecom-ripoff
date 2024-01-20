import { Outlet } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../components/profiles/login/LoginFetch";
import Admin from "../components/admin/Admin";
import AdminCreate from "../components/admin/AdminCreate";
import styles from "./pagelayout.module.css";
import SearchModal from "../components/searchmodal/SearchModal";
import jwt_decode from "jwt-decode";
import { SearchOutlined } from "@mui/icons-material";
import {ThemeData} from "../App"
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


function PageLayout(props) {
  const [createShowState, setCreateShowState] = useState(false);
  const [search, setSearch] = useState(false);
  const {theme}= useContext(ThemeData)
  let location=window.location.pathname.slice(1)

  function createShow() {
    setCreateShowState(true);
  }

  function createHide() {
    setCreateShowState(false);
  }
  function hideSearch() {
    setSearch(false);
  }
  function ShowSearch() {
    setSearch(true);
  }

  const { user, logout } = useContext(AuthContext);
  let userDetails;
  if (user) {
    userDetails = jwt_decode(user.access);
  }
 

  return (
    <div className={styles.pagelayout}>
      {userDetails?.is_staff === true || userDetails?.is_superuser === true ? (
        <div className={styles["pagelayout-hold"]}>
          <div className={styles["pagelayout-sideb"]}>
            <Admin />
          </div>
          <div className={styles["pagelayout-body-parent"]}>
            <div className={theme?styles["pagelayout-topbar-dark"]:styles["pagelayout-topbar"]}>
              <div className={styles["top-bar"]}>
                <div
                  onClick={ShowSearch}
                  className={`${styles.pagelayoutsearch} ${
                    search && styles["pagelayoutsearch-active"]
                  }`}
                >
                  <SearchOutlined fontSize="small" sx={{color:theme?"white":undefined}}  />
                  <p>Search</p>
                </div>
                {search && (
                  // <SearchModal changed={(search) => setSearch(search)} />
                  <SearchModal onHide={hideSearch} />
                )}
                <p id={createShowState && styles["create-show"]} onClick={createShow}>Create</p>
                <div className={styles["logout-div"]}>
                <LogoutOutlinedIcon fontSize="small" sx={{color:theme?"white":undefined, mr:"5px"}}/>
                <p id={styles["admin-logout"]} onClick={logout}>Logout</p>
                </div>
              </div>
              {createShowState && <AdminCreate onHide={createHide} />}
            </div>
            <div className={styles["pagelayout-body"]}>
             <h1 id={styles.location}>{location==="admin"?"Overview":location}</h1>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <p>not authorized</p>
      )}
    </div>
  );
}
export default PageLayout;
