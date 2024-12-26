package ex.example.solix.repository;

import ex.example.solix.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRep extends JpaRepository<Comment, Long> {


}
