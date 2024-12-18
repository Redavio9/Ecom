package ex.example.solix.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import ex.example.solix.models.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface UserRep extends JpaRepository<User, Long>{
    public User findByEmail(String email);
    @Query("select u from User u where u.FirstName LIKE %:query% OR u.LastName LIKE %:query% OR u.Email LIKE %:query%")
    public List<User> searchUser(@Param("query") String query);


}