import React,{useContext, useState} from 'react'
// import styles from "./header.module.css"
import MenuIcon from '../menuicon/MenuIcon'
import { AuthContext } from '../profiles/login/LoginFetch'
import { ThemeData } from '../../App'
import { Box, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HeaderContainer from '../headercontainer/HeaderContainer'
import jwt_decode from "jwt-decode"
import { HeaderStyled, WelcomeUserContainer, WelcomeUserParent,
HeaderParent } from './headerstyles'
import { Stack } from '@mui/material'
import {  ThemeProvider, createTheme } from '@mui/material/styles'
// import BreakPointtheme  from './muiThemes'



function Header(props) {
  const userdetails= useContext(AuthContext)
  const [sidebar, setSidebar] = useState(false);

  const {theme}= useContext(ThemeData)
  console.log(theme)
  let user
  let userDetail
  if(userdetails){
      user=userdetails.user
  }
  if(user){
    userDetail= jwt_decode(user.access)

  }

  const showSidebar = () => setSidebar(!sidebar);

  const BreakPointtheme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:480,
            md:575,
            lg:711,
            xl:813
        }
    }
})
  return (
    <ThemeProvider theme={BreakPointtheme}>
    <Stack sx={{width:"100%", zIndex:"100"}}>
      {sidebar &&<MenuIcon showSidebar={showSidebar}/>}
    <HeaderParent>
        <HeaderStyled>
          <Box>
            {!sidebar &&<MenuOutlinedIcon fontSize='large' notif={props.headernotif} onClick={showSidebar} sx={{color:theme ? "cyan":"black", cursor:"pointer"}} />}
          </Box>
          <Box>
            <HeaderContainer onShow={props.onCart} onReveal={props.onSearch} notif={props.headernotif}/>
          </Box>
        </HeaderStyled>
        <WelcomeUserParent>
          <Box sx={{backgroundColor:"white", width:"30px", height:"100%"}}>
          </Box>
          <WelcomeUserContainer>
            <Typography paragraph sx={{color: theme? "cyan": "black"}}>
              {user?
                `Welcome ${userDetail.username}`
              :
                "Welcome Guest"}
            </Typography>
          </WelcomeUserContainer>
        </WelcomeUserParent>
      {/* </div> */}
    </HeaderParent>
    <Box sx={{height:"35px"}}>
    </Box>
    <Box sx={{display:"flex", gap:"2%", alignItems:"center", justifyContent:"center", mt:"4%", mb:"2%"}}>
      <Typography paragraph sx={{color: theme? "cyan": "black"}}>          
        Categories
      </Typography>
      <Typography paragraph sx={{color: theme? "cyan": "black"}}>          
        Become a Seller
      </Typography>
      <Typography paragraph sx={{color: theme? "cyan": "black"}}>          
        Deliveries
      </Typography>
      <Typography paragraph sx={{color: theme? "cyan": "black"}}>          
        Sellers
      </Typography>
    </Box>
      {/* <div className={theme?styles['main-space-dark']:styles['main-space']}></div> */}
    </Stack>
    </ThemeProvider>
  )
}

export default Header 