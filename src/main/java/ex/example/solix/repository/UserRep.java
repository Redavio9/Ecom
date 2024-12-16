package ex.example.solix.repository;
import org.springframework.data.jpa.repository.JpaRepository
import ex.example.solix.models.*


public interface UserRep extends JpaRepository<User, Long>{


}