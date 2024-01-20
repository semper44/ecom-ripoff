import React, { useState, useContext } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { CustomUseQuery } from "../../usequery/useQueryNo";
import Delete from "./Delete";
import Block from "./Block";
import {Link} from "react-router-dom"
import { ThemeData } from "../../App";
import Loading from "../extra comp/Loading";
import useFetch from "../../usequery/useFetch";

// const fetcher = () => {
//   return axios.get("http://127.0.0.1:8000/profile/allprofiles");
// };

function AllProfiles() {
  // const [productData, setproductData] = useState("");
  const [deleteState, setdeleteState] = useState(false);
  const [blockState, setBlockState] = useState(false);
  const [urls, setUrls] = useState("");
  const [id, setdId] = useState(null);
  const {theme}= useContext(ThemeData)
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  const url= "http://127.0.0.1:8000/profile/allprofiles"
  const requestOptions= {method:"GET",
    headers:{
    'Content-Type':'application/json',
    'Authorization': 'Bearer '+ token.access
    }}
  const {data, loading, error}= useFetch(url, requestOptions)
  console.log(data)
  console.log(loading, error)
  // const { data } = CustomUseQuery(fetcher);
  // console.log(data?.data)
  // useEffect(() => {
  //   if (data) {
  //     setproductData(data.data);
  //   }
  // }, [data]);
    // console.log(params.id)

  // function block(params) {
  //   console.log(params.row.blocked==="true", params.row.tags==="seller")
  //   if(params.row.blocked==="true" && params.row.tags==="seller"){
  //     setUrls(`http://127.0.0.1:8000/profile/unblockseller/${params.id}/`)
  //     console.log("hy")

  //   }
  //   else if(params.row.blocked==="false" && params.row.tags==="seller"){
  //     setUrls(`http://127.0.0.1:8000/profile/blockseller/${params.id}/`)
  //     console.log("hy2")

  //   }
  //   else if(params.row.blocked==="true" && params.row.tags==="no-seller"){
  //     setUrls(`http://127.0.0.1:8000/profile/unblockuser/${params.id}/`)
  //     console.log("hy3")

  //   }
  //   else if(params.row.blocked==="false" && params.row.tags==="no-seller"){
  //     setUrls(`http://127.0.0.1:8000/profile/blockuser/${params.id}/`)
  //     console.log("hy4")

  //   }
  //   setBlockState(true)
  //   setdId(params.id)
    
  // }
  function block(params) {
    console.log("ok")
    console.log(params.row.blocked==="True", params.row.tags==="seller")
    console.log(params.row.blocked, params.row.tags)
    if(params.row.blocked==="True" && params.row.tags==="seller"){
      setUrls(`http://127.0.0.1:8000/profile/unblockseller/${params.id}/`)
      console.log("hy")

    }
    else if(params.row.blocked==="false" && params.row.tags==="seller"){
      setUrls(`http://127.0.0.1:8000/profile/blockseller/${params.id}/`)
      console.log("hy2")

    }
    else if(params.row.blocked==="True" && params.row.tags==="no-seller"){
      setUrls(`http://127.0.0.1:8000/profile/unblockuser/${params.id}/`)
      console.log("hy3")

    }
    else if(params.row.blocked==="false" && params.row.tags==="no-seller"){
      setUrls(`http://127.0.0.1:8000/profile/blockuser/${params.id}/`)
      console.log("hy4")

    }
    setBlockState(true)
    setdId(params.id)
    
  }

  console.log(urls)
  function del(params) {
    setdeleteState(true)
  }

  const columns = [
    { field: "id", headerName: "ID", hide: "true" },

    {
      field: "pics",
      headerName: "pics",
      filterable: false,
      renderCell: (params) => {
        // console.log(params.row.image);
        return <Avatar src={params.row.image} />;
      },
    },
    { field: "name", headerName: "Users", flex: 1 },
    {
      field: "access",
      headerName: "Access",
      filterable: false,
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            m="7px 2px"
            p="5px"
            diplay="flex"
            justifyContent="center"
            gap="25px"
          >
            <IconButton
              aria-label="View"
              size="small"
              className=""
              component={Link}
              to={`/profile/${params.id}`}
            >
              <EditOutlinedIcon sx={{color:theme?"cyan":undefined}} />
              <Typography color={"grey"} sx={{ ml: "5px" }}>
                View
              </Typography>
            </IconButton>
            <IconButton
              aria-label="Delete"
              size="small"
              className=""
              onClick={()=>del(params)}
            >
              <DeleteOutlinedIcon sx={{color:theme?"red":undefined}}/>
              <Typography color={"grey"} sx={{ ml: "5px" }}>
                Delete
              </Typography>
            </IconButton>
            {deleteState &&<Delete setdelete={setdeleteState} url= {`http://127.0.0.1:8000/profile/delete/${params.id}`}/>}
            {params.row.blocked==="false"? 
            <IconButton
              aria-label="Delete"
              size="small"
              className=""
              onClick={()=>block(params)}
            >
              <DeleteOutlinedIcon sx={{color:theme?"red":params.row.tags==="no-seller"? "red":"cyan"}}/>
              <Typography color={"grey"} sx={{ ml: "5px" }}>
                Block
              </Typography>
            </IconButton>
            // blockState &&<Block setblock={setBlockState} url= {params.row.tags==="no-seller"?`http://127.0.0.1:8000/profile/blockuser/${params.id}`:`http://127.0.0.1:8000/profile/blockseller/${params.id}`}/>
            :<IconButton
              aria-label="Delete"
              size="small"
              className=""
              onClick={()=>block(params)}
            >
              <DeleteOutlinedIcon sx={{color:theme?"red":params.row.tags==="no-seller"? "red":"cyan"}}/>
              <Typography color={"grey"} sx={{ ml: "5px" }}>
                Unblock
              </Typography>
            </IconButton>}
            {blockState &&<Block setblock={setBlockState} url={urls}/>}
          </Box>
        );
      },
    },
  ];
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {data ? (
        <Box m="35px 0 0 0" height="77vh">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
            components={{Toolbar:GridToolbar, GridCell:{border:"none"}}}
            // showColumnRightBorder={false}
            disableSelectionOnClick={true}
            sx={theme && {color:"white", 
            "& .MuiDataGrid-cellCheckbox":{outline:"white"},
            "& .MuiCheckbox-colorPrimary":{color:"white"},
            "& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},
            "& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white", borderTop:"none"},
            "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},
            "& .MuiDataGrid-cell":{borderBottom:"none"},
            "& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none", backgroundColor:"#0e7878", color:"white"},
            "& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{ color:"white"},
            "& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},
            "& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red "},
          }}
            
          />
        </Box>
      ): <Loading />}
    </div>
  );
}

export default AllProfiles;
