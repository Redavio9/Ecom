package ex.example.solix.service;

import ex.example.solix.models.*;
//import ex.example.solix.models.Message;

import java.util.List;

public interface MessageService {
    public Message createMessage(User user, Long ChatId, Message req) throws Exception;
    public List<Message> findChatsMessages(Long chatId) throws Exception;

}
