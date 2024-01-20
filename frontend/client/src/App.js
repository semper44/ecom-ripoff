import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import SocialMediaShare from "./components/extra comp/social/SocialMediaShares";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContainer from "./components/carts/CartContainer";
import SearchModal from "./components/searchmodal/SearchModal";
import CartProviders from "./stores/CartProviders";
import GeneralProviders from "./stores/GeneralProviders";
import LoginFetch from "./components/profiles/login/LoginFetch";
import AdminOverviewFetch from "./stores/AdminOverviewFetch";
import Main from "./components/main/Main";
import ProductDetails from "./components/main/ProductDetails";
// import FeaturedMain from "./components/featured/FeaturedMain"
import ProductsFromCategories from "./components/main/ProductsFromCategories"
import { QueryClientProvider, QueryClient } from "react-query";
// import  {ReactQueryDevtools} from "react-query/devtools"
import UserProfile from "./components/profiles/userprofile/UserProfile";
import NotFound from "./components/extra comp/NotFound";
import DashBoard from "./components/admin/DashBoard";
// import AdminAll from "./components/admin/AdminAll";
import StatBox from "./components/extra comp/admin/StatBox";
import {PieChart} from "./components/extra comp/admin/PieChart"
import {LineChart} from "./components/extra comp/admin/LineChart"
import {BarChart} from "./components/extra comp/admin/BarChart"
import Users from "./components/admin/Users";
import Moderator from "./components/extra comp/Moderator";
import PageLayout from "./pagelayouts/PageLayout";
import Body from "./pagelayouts/Body";
import axios from "axios";
// import AdminTry from "./components/admin/AdminTry";
import Delete from "./components/admin/Delete";
// import Login from "./components/profiles/login/Login";
// import EditDetails from "./components/admin/EditDetails";
// import ImageLists from "./images/ImageList";
// import General from "./components/MenuComponents.js/General";
import Loading from "./components/extra comp/Loading";
import Ratings from "./components/extra comp/RatingsProfile";
import SellersProduct from "./components/profiles/SellersProduct";
import Critical from "./components/profiles/reviews/Critical";
import Orders from "./components/profiles/Orders";
import { io } from "socket.io-client";
import jwt_decode from "jwt-decode"
import FetchTry from "./components/extra comp/FetchTry";
// import NotificationProvider from "./stores/NotificationProvider";
import HeaderContainerData from "./stores/HeaderContainerData";
import AllFollowingNotification from "./components/profiles/generalnotifications/AllFollowingNotification";
import AllProductNotification from "./components/profiles/generalnotifications/AllProductNotification";
// import GeneralNotifications from "./stores/GeneralNotifications";
import ProfileProvider from "./stores/ProfileProvider";
import AllGeneralNotifications from "./components/profiles/generalnotifications/GeneralNotifications";
import YourOrders from "./components/profiles/YourOrders";
import AllFollowers from "./components/profiles/followesandfollowing/AllFollowers";
import AllFollowing from "./components/profiles/followesandfollowing/AllFollowing";
import ResetPassword from "./components/profiles/resetpassword/ResetPassword";
import ChangePassword from "./components/profiles/resetpassword/ChangePassword";
import ConfirmAndUpdateOrder from "./components/profiles/poductcreation/ConfirmAndUpdateOrder";
import MenuIcon from "./components/menuicon/MenuIcon";
// import FetchMostBought from "./components/admin/FetchMostBought";
// import Workers from "./components/extra comp/Workers";

const Login = lazy(() => import("./components/profiles/login/Login"));
// const FeaturedDetails = lazy(() =>
//   import("./components/featured/FeaturedDetails")
// );
const Register = lazy(() => import("./components/profiles/register/Register"));
const AllProduct = lazy(() => import("./components/admin/AllProduct"));
// const AllProduct= lazy(()=>import("./components/admin/AllProduct"))

export const isActive = React.createContext();
export const menuChange = React.createContext();
export const cart = React.createContext();
export const cartActiveContxt = React.createContext();
export const ThemeData = React.createContext();
export const notificationscontext = React.createContext();

const queryclient = new QueryClient();


const initialIp = {
  country: [],
  ip: [],
};


let themeState;
  let check= window.localStorage.getItem("themes")
  

  if(check === undefined || check==="false" || check === null){
    console.log(check)
    themeState=false
  }else if(check==="true"){
    console.log("typeof(check)")
    themeState=true

  }

function App() {
  // let check=window.localStorage.getItem("themes")
  // console.log(check)
  // console.log(typeof(check))
  // let themestate;
  // 
  
  console.log(themeState)
  console.log(typeof(themeState))
  const [theme, setTheme] = useState(themeState);
  const [ShowCart, SetShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [MenuTransform, setMenuTransform] = useState(false);
  const [ipState, setIpState] = useState(initialIp);
  // const [theme, setTheme] = useState();
  const [socket, setSocket] = useState();
  // const theme= useRef(themeState);

  
  console.log(theme)
  console.log(typeof(theme))


  // console.log(window.location.href.includes("http://localhost:3000/profile/"))
  // console.log("profile/")
  // useEffect(()=>{
  //   let beating;
  //   if(window.location.href.includes("http://localhost:3000/profile/") && document.hidden===false){
  //   beating= setInterval(()=>{
  //     console.log("runheartbeat")
  //     socket?.emit("heartbeat", {data:"a"})  
  //   }, 1000)
  // }else if(!window.location.href.includes("http://localhost:3000/profile/") && document.hidden!==false){
  //   console.log("heartbeat")
  //   setTimeout(()=>clearInterval(beating), 1500)

  // }  
  // }, [window.location.href, document.hidden]) 

  // const [UnSentNotification, setUnSentNotification] = useState();
  const auth=JSON.parse(window.localStorage.getItem("authToken"))||undefined
  
  const toggleTheme= ()=>{
    setTheme(!theme);
    window.localStorage.setItem("themes", !theme)
  }

  // useEffect(()=>{

  //  }, [theme])


  let userDetail
  if(auth){
    userDetail= jwt_decode(auth?.access)
  }

  useEffect(()=>{
     setSocket(io("http://localhost:5000"))
  },[])

  const  userId= userDetail?.user_id
  useEffect(()=>{
    socket?.emit("following",(userId))  
  },[socket, userId])


  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get("https://fakestoreapi.com/products");
  //     const response = await res;
  //     setData(response.data);
  //   })();
  // }, []);

  // if (datas) {
  //   window.localStorage.setItem("data", JSON.stringify(datas));
  // }

  useEffect(() => {
    getUserIp();
  }, []);

  const getUserIp = async () => {
    const ipGet = await axios.get("https://ipapi.co/json");
    if (!ipState.ip.includes(ipGet.data.ip)) {
      setIpState({
        ...ipState,
        country: ipGet.data.country_name,
        ip: ipGet.data.ip,
      });
    }
  };

  // useEffect(()=>{
  //     const ipSend= axios.post('http://127.0.0.1:8000/admindetails/', ipState);
  //     console.log(ipSend)
  // }, [ipState])

  const getPage = () => {
    if (window.location.pathname === "featured") {
      console.log("featured");
    } else if (window.location.pathname === "promo-deals") {
      console.log("promo-deals");
    } else if (window.location.pathname === "categories") {
      console.log("categories");
    } else if (window.location.pathname === "profiles") {
      console.log("profiles");
    }
  };

  // useEffect(()=>{
  //   Promise.all([
  //     fetch('http://127.0.0.1:8000/product/retrievecart/')
  //   ])
  // })

  let urls= "https://fakestoreapi.com/products"
  let urls2= "http://127.0.0.1:8000/product/allproducts/electronics/"
  console.log("app running");

  const ShowCartToggle = () => {
    SetShowCart(true);
  };
 
  const HideCartToggle = () => {
    SetShowCart(false);
  };

  const ShowSearchModal = () => {
    setShowSearch(true);
  };

  const HideSearchModal = () => {
    setShowSearch(false);
  };

  const notificationModal = () => {
    if(userDetail?.user_id){
      setNotification(true);
    }else{
      window.location.href="/login"
    }
  };

  const hideNotificationModal = () => {
    setNotification(false);
  };

  const MenuToggle = () => {
    setMenuTransform((prevMenuTransfrom) => !prevMenuTransfrom);
  };

  return (
    <>
    <div className={theme? "dark": "light" }>
      <QueryClientProvider client={queryclient}>
        <ThemeData.Provider value={{theme:theme, toggleTheme}}>
        <GeneralProviders>
            <Router>
              <AdminOverviewFetch>
                <LoginFetch> 
                  <ProfileProvider>
                    {/* <NotificationProvider  socket={socket}> */}
                      <HeaderContainerData>
                        <CartProviders>
                          {ShowSearch && <SearchModal onHide={HideSearchModal} />}
                          {notification && <AllGeneralNotifications  hideNotifFn={hideNotificationModal}/>}
                          <cart.Provider value={{ cartFunc: HideCartToggle }}>
                            {ShowCart && <CartContainer onToglle={HideCartToggle} />}
                          </cart.Provider>
                            <notificationscontext.Provider value={{ hideNotifFn:hideNotificationModal, showNotifFn:notificationModal, notification:notification }}>
                              <isActive.Provider value={{ showSearchState: ShowSearch }}>
                                <menuChange.Provider value={{ MenuState: MenuTransform, MenuFunc: MenuToggle }}>

                                  <cartActiveContxt.Provider value={{ cartActivestate: ShowCart }}>
                                  
                                    <Suspense fallback={<Loading />}>
                                      <Routes>
                                        <Route
                                          element={
                                            <Body
                                              onToglling={ShowCartToggle}
                                              onShow={ShowSearchModal}
                                              onChange={ShowSearchModal}
                                              socket={socket}
                                            />
                                          }
                                        >
                                          <Route path="/" element={<Main />} />
                                          {/* <Route path="/categories" element={<Categories />} /> */}
                                          {/* <Route path="/featured" element={<Featured />} /> */}
                                          <Route path="/featured" element={<ProductsFromCategories 
                                          url={urls} />} />
                                          <Route path="/promodeals" element={<ProductsFromCategories 
                                          url={urls} />} />
                                          <Route path="/electronics" element={<ProductsFromCategories 
                                          url={urls2} />} />
                                          <Route path="/categories" element={<ProductsFromCategories 
                                          url={urls} />} />
                                          <Route path="/productdetails/:id/" element={<ProductDetails/>} />
                                          <Route path="/confirmandupdateorder/:cart_id/" element={<ConfirmAndUpdateOrder />} />

                      
                                          {/* <Route path="/Products" element={<SellersProduct />} /> */}
                                          <Route path="/profile/:id/">
                                            <Route index element={<UserProfile socket={socket} />} /> 
                                            <Route path="followernotifications" element={<AllFollowingNotification />}/>
                                            <Route path="productnotifications" element={<AllProductNotification />}/>
                                            <Route path="allfollowers" element={<AllFollowers />}/>
                                            <Route path="allfollowing" element={<AllFollowing />}/>
                                            <Route path="userproducts" element={<SellersProduct />}/>
                                            <Route path="customerorders" element={<Orders />}/>
                                            <Route path="yourorders" element={<YourOrders />}/>
                                            <Route path="reviews/critical" element={<Critical />}/>
                                            <Route path="reviews/positive" element={<Critical />}/>
                                          </Route>
                                            {/* element={<UserProfile socket={socket}/>}
                                          /> */}

                                          {/* <Route path="/table" element={<Table />} /> */}
                                        </Route>
                                        <Route element={<PageLayout />}>
                                          {/* <Route path="/admin" element={<AdminAll />} /> */}
                                          <Route path="/moderator" element={<Moderator />} />
                                          <Route path="/admin" element={<DashBoard />}/>
                                          {/* <Route path="/allproduct" element={<AllProduct />}/> */}
                                          {/* <Route path="/statbox" element={<StatBox />}/> */}
                                          {/* <Route path="/admin/editproducts/:id" element={<EditProduct />}
                                          /> */}
                                          <Route path="/delete" element={<Delete />} />
                                          {/* <Route path="/admin/editproduct/details/:id" element={<EditDetails />} />   */}
                                          <Route path="/users" element={<Users />} />
                                          <Route path="/admin/products" element={<AllProduct />} />
                                        </Route>
                                        <Route path="/register" element={<Register />} />
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/barchat" element={<BarChart />} />
                                        <Route path="/statbox" element={<StatBox />}/>zxv 
                                      
                                        <Route path="/piechart" element={<MenuIcon />} />
                                        <Route path="/linechart" element={<LineChart />} />
                                        <Route path="admin/products/fullpage" element={<AllProduct />} />
                                        <Route path="admin/users/fullpage" element={<AllProduct />} />
                                        <Route path="/ratingsprofile" element={<Ratings />} />
                                        <Route path="/sellersproduct" element={<SellersProduct />} />
                                        <Route path="/profile/reset/password/" element={ <ResetPassword /> } />
                                        <Route path="/profile/password-reset/:uid/:id/" element={ <ChangePassword /> } />
                                        {/* <Route path="/workers" element={<Workers />} /> */}
                                        {/* <Route path="/notifications" element={<Notification />} /> */}
                                        <Route path="/share" element={<SocialMediaShare/>} />
                                        <Route path="/social" element={<SocialMediaShare/>} />
                                        {/* <Route path="/cartretrieve" element={<CartRetrive socket={socket}/>} /> */}
                                        <Route path="*" element={<NotFound />} />
                                      </Routes>
                                    </Suspense>
                                  </cartActiveContxt.Provider>
                                </menuChange.Provider>
                              </isActive.Provider>
                            </notificationscontext.Provider>

                        </CartProviders>
                      </HeaderContainerData>
                    {/* </NotificationProvider> */}
                  </ProfileProvider>
                </LoginFetch >
              </AdminOverviewFetch>
            </Router>
        </GeneralProviders>
        </ThemeData.Provider>
      </QueryClientProvider>
    </div>
    </>
  );
}

export default App;
