import axiosInstance from "../../axios/axios"


function AdminTry() {
  
  return (
    axiosInstance.get("listproduct/")
      .then(res=>{
        console.log(res)
      })
  )
}

export default AdminTry