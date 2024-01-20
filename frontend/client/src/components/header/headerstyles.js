import { createTheme, styled } from "@mui/material/styles"



export const HeaderStyled =styled("div")(({theme}) => ({
    
    display:"flex",
    paddingTop: "3rem",
    paddingLeft:"5.5%",
    justifyContent:"space-between",
    paddingRight:"5%",        
}))
export const HeaderParent = styled("div")(({theme}) => ({
    width:"100%",
    height: "170px",
    borderRadius: "10px",
    boxSizing: "borderBox",
    boxShadow: '13px 13px 20px #cbced1, -13px -13px 20px #fff',  

    // backgroundColor:"red",
        
}))
export const WelcomeUserContainer = styled("div")(({theme}) => ({
    display: "flex",
    gap: "1.5rem",
    [theme.breakpoints.up("md")]:{
        display: "flex",
        // gap: "1.5rem",
    }
        
}))

export const WelcomeUserParent = styled("div")(({theme}) => ({
    display: "flex",
    justifyContent:"space-between",
    marginRight:"5%",
    marginLeft:"6%",        
}))
