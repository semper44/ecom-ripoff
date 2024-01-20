// import React, { useState, useEffect, useContext } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import { Avatar, Box, IconButton, Typography } from "@mui/material";
// import axios from "axios";
// import Delete from "../admin/Delete";
// import {Link} from "react-router-dom"
// import { ThemeData } from "../../App";



// function FullPageSellersProduct() {
//   const [productData, setproductData] = useState("");
//   const [deleteState, setdeleteState] = useState(false);
//   // const [id, setdId] = useState(null);
//   const {theme}= useContext(ThemeData)

//   useEffect(() => {
//     fetchProducts()
//   }, []);

//     const fetchProducts= async()=>{
//         try {
//             let response= await axios.get(`http://127.0.0.1:8000/product/listproductsnoauthorization/${id}`)
//             setproductData(response.data)
//             console.log(response)
//         } catch (error) {
//             console.log(error)
            
//         }
//     }

//   // function del(params) {
//   //   setdeleteState(true)
//   //   setdId(params.id)
//   // }
//   const columns = [
//     { field: "id", headerName: "ID", hide: "true" },
//     {
//       field: "category",
//       headerName: "Category",
//       hide: "true",
//       flex: 1,
//       headerAlign: "left",
//     },
//     {
//       field: "image",
//       headerName: "Image",
//       filterable: false,
//       renderCell: (params) => {
//         // console.log(params.row.image);
//         return <Avatar src={params.row.image} />;
//       },
//     },
//     { field: "sellers", headerName: "Sellers", flex: 1 },
//     { field: "description", headerName: "Description", flex: 1, hide: "true" },
//     {
//       field: "price",
//       headerName: "Price",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//       cellClassName:theme?"dark":undefined,
//     },
//     {
//       field: "size",
//       headerName: "Size",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//       hide: "true",
//     },
//     {
//       field: "access",
//       headerName: "Access",
//       filterable: false,
//       flex: 1,
//       renderCell: (params) => {
//         return (
//           <Box
//             width="60%"
//             m="7px 2px"
//             p="5px"
//             diplay="flex"
//             justifyContent="center"
//             gap="25px"
//           >
//             <IconButton
//               aria-label="Edit"
//               size="small"
//               className=""
//               component={Link}
//               to= {`/admin/editproducts/${params.id}`} 
//             >
//               <EditOutlinedIcon sx={{color:theme?"cyan":undefined}} />
//               <Typography color={"grey"} sx={{ ml: "5px" }}>
//                 Edit
//               </Typography>
//             </IconButton>
//             <IconButton
//               aria-label="Delete"
//               size="small"
//               className=""
//               // onClick={()=>del(params)}
//             >
//               <DeleteOutlinedIcon sx={{color:theme?"red":undefined}}/>
//               <Typography color={"grey"} sx={{ ml: "5px" }}>
//                 Delete
//               </Typography>
//             </IconButton>
//             {deleteState &&<Delete setdelete={setdeleteState} id={id}/>}
//           </Box>
//         );
//       },
//     },
//   ];
//   return (
//     <div style={{ height: "60vh", width: "100%", marginBottom:"20px", paddingRight:"2%" }}>
//       {productData && (
//         <Box m="35px 0 0 0" height="60vh">
//           <DataGrid
//             rows={productData}
//             columns={columns}
//             pageSize={7}
//             rowsPerPageOptions={[7]}
//             checkboxSelection
//             components={{Toolbar:GridToolbar, GridCell:{border:"none"}}}
//             // showColumnRightBorder={false}
//             disableSelectionOnClick={true}
//             sx={theme && {color:"white", 
//             "& .MuiDataGrid-cellCheckbox":{outline:"white"},
//             "& .MuiCheckbox-colorPrimary":{color:"white"},
//             "& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},
//             "& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white", borderTop:"none"},
//             "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},
//             "& .MuiDataGrid-cell":{borderBottom:"none"},
//             "& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none", backgroundColor:"#0e7878", color:"white"},
//             "& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{ color:"white"},
//             "& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},
//             "& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red "},
//           }}
            
//           />
//         </Box>
//       )}
//     </div>
//   );
// }

// export default FullPageSellersProduct;
