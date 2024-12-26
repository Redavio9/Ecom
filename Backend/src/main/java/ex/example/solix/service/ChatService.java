package ex.example.solix.service;

import ex.example.solix.models.*;


import java.util.List;

public interface ChatService {

    public Chat creatChat(User reqUser, User user);
    public Chat findChatById(long id) throws Exception;
    public List<Chat> findUserChats(Long UserId);

}
