import { Server } from "socket.io";

const io = new Server({
    cors:{
        origin:"http://localhost:3000"
    }
 });
let flag= false
let onlineUsers=[]
const addNewUser=(userid, socketId)=>{
  !onlineUsers.some((user)=>user.userid===userid)&& onlineUsers.push({userid, socketId})
}
const removeUser=(socketId)=>{
  onlineUsers=onlineUsers.filter((user)=>user.socketId !==socketId)
}

const getUser=(userId)=>{
  return onlineUsers.find(user=>user.userid===userId)
}

let count= false

io.on("connection", (socket) => {
  // ...
  console.log("connected")
  socket.on("heartbeat", ({data})=>{
    console.log(data);
    console.log("data");
  }) 
  socket.on("following", (userId)=>{
    // console.log(userId);
    addNewUser(userId, socket.id)
  }) 
  socket.on("offline", ({offline, userId})=>{
    const logedoutUser=getUser(userId)
    removeUser(logedoutUser?.socketId)
    console.log(userId);
  }) 

  socket.on("sendFollowingNotification", ({receivers, sender,senderName, time, seen, type})=>{
    const receiver= getUser(receivers)
    if(receiver?.socketId){
      io.to(receiver.socketId).emit("getfollowingnotif", {
        sender, senderName, receivers, time, seen, type
      })
      console.log("followed")
    }
    else if(!receiver?.socketId){
      // const receiver= getUser(sender)
      io.emit("offlinefollowingnotif", {
        sender, senderName, receivers, time, seen, type
    })
  }
  })
  socket.on("newproduct", ({senderName,followers, sender, seen, time, type})=>{
    const senderId= getUser(sender)
    followers?.map((follower)=>{
      onlineUsers.map((user)=>{
        if(user.userid ===follower){
          if(count !== true){
            count= true
          }
          flag=true
          console.log(user.userid)
          io.to(user.socketId).emit("newproductnotif", {
            senderName, seen, followers, sender, time, type
          })
          console.log("check")
          console.log(count)
        }
      })
    })
    console.log(flag)
    if(flag===false){
      io.emit("offlineproductnotif", {
        senderName, seen, followers, sender, time, type
      })  
    }        
    if(count===true){
      io.emit("userproductnotif", {
        senderName, seen, followers, sender, time, type
      })          
      console.log("ran")
        
    }
  })
  socket.on("disconnect", ()=>{
    console.log("someone has left")
    removeUser(socket.id)
    flag=false
  })
});

io.listen(5000);