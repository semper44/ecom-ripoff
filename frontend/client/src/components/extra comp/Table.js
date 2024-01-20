import React from 'react'
import {mockDataTeam} from "./mockData"
import { DataGrid} from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Avatar, Box, Typography } from '@mui/material';

function Table() {
  const columns=[
    {field:'id', headerName:"ID"},
    {field:"Category",
      headerName:"Category",
      flex:1,
      cellClassName:"name-column--cell"},
    {field:"name",
      headerName:"name",
      flex:1,
      headerAlign:"left",
      },
    {field:"Image",
      headerName:"Image",
      flex:1,
      },
    {field:"Sellers",
      headerName:"Sellers",
      flex:1,
      renderCell:()=><Avatar src='../../ecom_images/R.jpg'/>
        
        // console.log(params)
     
      },
    {field:"Price",
      headerName:"Price",
      type:"number",
      headerAlign:"left",
      
      },
    {field:"access",
      headerName:"Access",
      flex:1,
      renderCell:({row:{ access}})=>{
        return(
        <Box
          width="60%"
          m="7px 2px"
          p="5px"
          diplay="flex"
          justifyContent="center"
          >
          {access ==="admin" && <AdminPanelSettingsOutlinedIcon />}
          {access ==="manager" && <SecurityOutlinedIcon />}
          {access ==="user" && <LockOpenOutlinedIcon />}
          <Typography color={"grey"} sx={{ml:"5px"}}>
            {access}
          </Typography>
          </Box>
        )
      }
    },
  ]
  return (
    <div style={{ height:"100vh", width: '100%' }}>
      <Box 
      m="80px 0 0 0"
      height="100vh">
        <DataGrid 
        rows={mockDataTeam} 
        columns={columns} 
        pageSize={4}
        rowsPerPageOptions={[4]}
        checkboxSelection/>
      </Box>
    </div>
    
  )
}

export default Table