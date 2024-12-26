package ex.example.solix.service;

import ex.example.solix.models.Post;
import ex.example.solix.models.Reels;
import ex.example.solix.models.User;
import ex.example.solix.repository.ReelsRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReelsServiceImp implements ReelsService {

    @Autowired
    private ReelsRep reelsRep;

    @Autowired
    private UserService userService;


    @Override
    public Reels createNewReels(Reels reel, Long userId) throws Exception {

        User user = userService.findUserById(userId);
        Reels newReels= new Reels();
        newReels.setTitle(reel.getTitle());
        newReels.setUser(user);
        newReels.setVideo(reel.getVideo());

        return reelsRep.save(newReels);
    }

    @Override
    public List<Reels> findReelsByUserId(Long userId) {
        return reelsRep.findByUserId(userId);
    }

    @Override
    public List<Reels> findAllReels() {
        return reelsRep.findAll();
    }
}
