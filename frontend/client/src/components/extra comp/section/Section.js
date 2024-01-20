import React, {useContext, useRef, useState, useEffect} from 'react'
import styles from "./section.module.css"
import {NavLink} from "react-router-dom"
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { ThemeData } from '../../../App';

function Section() {
  const {theme}= useContext(ThemeData)
  const screenWidth= useRef(window.innerWidth)
  console.log(screenWidth.current);

  

  return (
    <>
    <div className={theme?styles["delivery-dark"]:styles.delivery}>
        <NavLink to="delivery">
        <span><LocalShippingOutlinedIcon style={{
                marginRight: 3,
                color:"orange"
              }}/></span>
        <h3>Deliveries</h3>
        </NavLink>
    </div>
    <div className={theme?styles["delivery-dark"]:styles.delivery}>
        <NavLink to="delivery">
        <span><AccountBoxOutlinedIcon style={{
                marginRight: 3,
                color:"limegreen"
              }}/></span>
        <h3>Top Sellers</h3>
        </NavLink>
    </div> 
    <div className={theme?styles["delivery-dark"]:styles.delivery}  id={styles.one}>
        <NavLink to="delivery">
        <span><ThumbUpOutlinedIcon style={{
                marginRight: 3,
                color:"red"
              }}/></span>
        <h3>Most Popular</h3>
        </NavLink>
    </div>
    <div className={theme?styles["delivery-dark"]:styles.delivery}  id={styles.two}>
        <NavLink to="delivery">
        <span><PanToolAltOutlinedIcon  /></span>
        <h3>Suggested</h3>
        </NavLink>
    </div>
    <div className={theme?styles["delivery-dark"]:styles.delivery}  id={styles.three}>
        <NavLink to="delivery">
        <span><HandshakeOutlinedIcon style={{
                marginRight: 3,
                color:"cyan"
              }}/></span>
        <h3>Weekly Deals</h3>
        </NavLink>
    </div>
    <div className={theme?styles["delivery-dark"]:styles.delivery}  id={styles.four}>
        <NavLink to="delivery">
        <span><StorefrontOutlinedIcon style={{
                marginRight: 3,
                color:"purple"
              }}/></span>
        <h3>Sell With Us</h3>
        </NavLink>
    </div>
    </>
  )
}

export default Section