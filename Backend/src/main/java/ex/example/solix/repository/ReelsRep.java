package ex.example.solix.repository;

import ex.example.solix.models.Reels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReelsRep extends JpaRepository<Reels, Long> {
    @Query("SELECT r FROM Reels r WHERE r.user.id = :userId")
    public List<Reels> findByUserId(Long userId);
}
