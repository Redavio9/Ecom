package ex.example.solix.service;


import ex.example.solix.models.*;
import ex.example.solix.repository.ChatRep;
import ex.example.solix.repository.UserRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ChatServiceImp implements ChatService {

    @Autowired
    private ChatRep chatRep;

    @Autowired
    private UserRep userRep;

    @Override
    public Chat creatChat(User reqUser, User user) {
        Chat isExist = chatRep.findByChatByUserId(user, reqUser);
        if(isExist != null)
            return isExist;
        Chat chat = new Chat();
        chat.getUsers().add(reqUser);
        chat.getUsers().add(user);
        chat.setCreatedAt(LocalDateTime.now());

        return chatRep.save(chat);
    }


    @Override
    public Chat findChatById(long id) throws Exception {
        Optional<Chat> chat = chatRep.findById(id);
        if(chat.isEmpty())
            throw new Exception("chat not found with id " + id);
        return chat.get();
    }

    @Override
    public List<Chat> findUserChats(Long UserId) {
        return chatRep.findByUsersId(UserId);
    }

}
