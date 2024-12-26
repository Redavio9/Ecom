package ex.example.solix.controller;


import ex.example.solix.models.*;
import ex.example.solix.request.ChatRequest;
import ex.example.solix.service.ChatService;
import ex.example.solix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChatController {
    @Autowired
    private ChatService chatService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/chats")
    private Chat createChat(@RequestBody ChatRequest chatRequest)
    {
        Chat chat = chatService.creatChat(chatRequest.getReqUser(), chatRequest.getReqUser());
        return chat;
    }


    @PostMapping("/api/user/chats")
    private List<Chat> findUsersChat(@RequestHeader("Authorization") String jwt)
    {
        User user = userService.findUserByJwt(jwt);
        List <Chat> chats= chatService.findUserChats(user.getId());
        return chats;
    }

}
