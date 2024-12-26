package ex.example.solix.service;

import ex.example.solix.models.*;
import ex.example.solix.repository.ChatRep;
import ex.example.solix.repository.MessageRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class MessageServiceImp implements MessageService {

    @Autowired
    private MessageRep messageRep;

    @Autowired
    private ChatService chatService;

    @Autowired
    private ChatRep chatRep;
//




    @Override
    public Message createMessage(User user, Long ChatId, Message req) throws Exception {
        Message message = new Message();

        Chat chat = chatService.findChatById(ChatId);
        message.setUser(user);
        message.setContent(req.getContent());
        message.setImage(req.getImage());
        message.setChat(chat);
        message.setDate(LocalDateTime.now());

        Message savedMessage = messageRep.save(message);
        chat.getMessages().add(savedMessage);
        chatRep.save(chat);
        return savedMessage;
    }

    @Override
    public List<Message> findChatsMessages(Long chatId) throws Exception {
        Chat chat = chatService.findChatById(chatId);

        return messageRep.findByChatId(chatId);
    }
}
