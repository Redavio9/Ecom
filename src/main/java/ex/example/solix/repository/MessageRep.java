package ex.example.solix.repository;

import ex.example.solix.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRep extends JpaRepository<Message, Long> {
    public List<Message> findByChatId(Long chatId);
}
