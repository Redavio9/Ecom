package ex.example.solix.repository;

import ex.example.solix.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChatRep extends JpaRepository<Chat, Long> {

    public List<Chat> findByUsersId(Long userId);

    @Query("SELECT c FROM Chat c WHERE :user MEMBER OF c.users AND :reqUser MEMBER OF c.users ")
    public Chat findByChatByUserId(@Param("user") User user, @Param("reqUser") User userReq);


}
