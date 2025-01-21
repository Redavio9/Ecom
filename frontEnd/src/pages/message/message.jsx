import React, { use, useState , useEffect} from "react";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
// import avatar1 from '../../static/images/avatar3.png'
// import avatar2 from '../../static/images/avatare2.png'
// import avatar3 from '../../static/images/avatar1.png'
import {MyFriends} from '../../components/Friends/friends.js';


  const ChatPage = () => 
  {
    const [friends, setFriends] = useState(MyFriends); // Friends list


    // const firend = MyFriends;

    // const setmyfriends = ( value ) => {
    //   MyFriends = value;
    //   // relander chapage .
    // } 

    const [selectedFriend, setSelectedFriend] = useState(null); // Track the selected friend
    const [newMessage, setNewMessage] = useState(""); // Track the new message
  
    // Select a friend to chat with
    const handleFriendClick = (friend) => {
      setSelectedFriend(friend);
    };
  
    // Send a new message
    const handleSendMessage = () => {
      if (newMessage.trim() && selectedFriend) {
        const updatedFriends = friends.map((friend) =>
          friend.id === selectedFriend.id
            ? { ...friend, messages: [...friend.messages, { text: newMessage, sender: "user" }] }
            : friend
        );
        setFriends(updatedFriends);
        setSelectedFriend((prev) => ({
          ...prev,
          messages: [...prev.messages, { text: newMessage, sender: "user" }],
        }));
        setNewMessage("");
      }
    };
    useEffect(() => {

      const dfg = document.getElementById('rfgfgfoot');
      console.log(dfg)
    }, [selectedFriend, newMessage]);
    return (
      <div id="rfgfgfoot">
        gdffg
      </div>
    )
  // return (
  //   <Box className="flex h-screen bg-gradient-to-r from-blue-100 to-cyan-100">
  //       {/* Sidebar */}
  //       <Box className="w-1/4 bg-blue-800 text-white p-4 hidden md:block">
  //         <Typography variant="h5" className="mb-6 font-bold text-center">
  //           Friends
  //         </Typography>
  //         <Box className="space-y-4">

  //           {MyFriends.map((friend) => (
  //             <Box
  //               key={friend.id}
  //               className="flex items-center p-3 hover:bg-blue-600 rounded-lg cursor-pointer"
  //               onClick={() => handleFriendClick(friend)}
  //             >
  //               <img
  //                 src={friend.avatar}
  //                 alt={`${friend.name}'s Avatar`}
  //                 className="rounded-full w-10 h-10"
  //               />
  //               <Typography variant="body1" className="ml-4 font-medium">
  //                 {friend.name}
  //               </Typography>
  //             </Box>
  //           ))}
  //         </Box>
  //       </Box>

  //       {/* Chat Area */}
  //       <Box className="flex flex-col flex-1">
  //             {/* Header */}
  //             <Box className="flex items-center justify-between bg-white p-4 shadow">
  //               <IconButton className="md:hidden">
  //                 <MenuIcon />
  //               </IconButton>
  //               <Typography variant="h6" className="font-bold">
  //                 {selectedFriend ? selectedFriend.name : "Select a Friend"}
  //               </Typography>
  //             </Box>

  //             {/* Messages */}
  //             <Box className="flex-1 overflow-y-auto p-4 space-y-4">
  //               {selectedFriend &&
  //                 selectedFriend.messages.map((message) => (
  //                   <Box
  //                     key={message.id}
  //                     className={`flex ${
  //                       message.sender === "user" ? "justify-end" : "justify-start"
  //                     }`}
  //                   >
  //                     <Box
  //                       className={`rounded-lg p-3 max-w-xs ${
  //                         message.sender === "user"
  //                           ? "bg-blue-500 text-white"
  //                           : "bg-gray-200 text-gray-900"
  //                       }`}
  //                     >
  //                       {message.text}
  //                     </Box>
  //                   </Box>
  //                 ))}
  //             </Box>

  //             {/* Input Box */}
  //             <Box className="p-4 bg-gray-100">
  //               <Box className="flex items-center">
  //                 <TextField
  //                   fullWidth
  //                   placeholder="Type your message..."
  //                   variant="outlined"
  //                   size="small"
  //                   value={newMessage}
  //                   onChange={(e) => setNewMessage(e.target.value)}
  //                   disabled={!selectedFriend}
  //                 />
  //                 <IconButton
  //                   color="primary"
  //                   onClick={handleSendMessage}
  //                   className="ml-2"
  //                   disabled={!selectedFriend}
  //                 >
  //                   <SendIcon />
  //                 </IconButton>
  //               </Box>
  //             </Box>
  //       </Box>
  //   </Box>
  // );
};

export default ChatPage;
