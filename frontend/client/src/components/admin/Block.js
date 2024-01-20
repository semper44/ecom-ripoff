import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import {Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { CustomUseQuery } from '../../usequery/useQueryRefetch'
import DeleteModals from "./DeleteModal";
import { fetchData } from "../../usequery/useFetchFunction";
// import { useNavigate } from "react-router-dom";

// const fetcher=(productId)=>{
//   return axios.delete(`http://127.0.0.1:8000/product/deleteproduct/${productId}`)
// }

function Delete({setblock, url}) {
  const method = "POST"
  
  function cancel(){
    setblock(false)
  }
  console.log(url)

  return (
    <DeleteModals>
      <Box
        width="fit-content"
        m="7px 2px"
        p="10px 22px"
        diplay="flex"
        justifyContent="center"
        alignItems="center"
        // gap="25px"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Box sx={{}}>
        <Typography color={"grey"} sx={{ ml: "5px" }}>
          Are you sure you want to block?
        </Typography>
        <Box m="11px 0">
        <Button variant="outlined" sx={{':hover':{opacity:0.6}}} startIcon={<DeleteIcon />} onClick={()=>{console.log("delworking");console.log(fetchData(url, method))}}>
          Block
        </Button>
        <Button variant="contained" sx={{ml:"5px", ':hover':{opacity:0.6}}} startIcon={<CancelIcon />} onClick={cancel}>
          Cancel
        </Button>
        </Box>
        </Box>
      </Box>
    </DeleteModals>
  );
}

export default Delete;
