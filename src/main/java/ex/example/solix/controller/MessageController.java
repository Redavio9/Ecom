package ex.example.solix.controller;

import ex.example.solix.models.Message;
import ex.example.solix.models.User;
import ex.example.solix.service.MessageService;
import ex.example.solix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MessageController {



    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/messages/chat/{chatId}")
    public Message createMessage(@RequestBody Message req, @RequestHeader("Authorization") String jwt, @PathVariable Long chatId) throws Exception {
        User user = userService.findUserByJwt(jwt);
        Message message = messageService.createMessage(user,chatId,req);
        return message;
    }

    @GetMapping("/api/messages/chat/{chatId}")
    public List<Message> findChatMessage (@RequestBody Message req, @RequestHeader("Authorization") String jwt, @PathVariable Long chatId) throws Exception {
        User user = userService.findUserByJwt(jwt);
        List<Message> message = messageService.findChatsMessages(chatId);
        return message;
    }

}
