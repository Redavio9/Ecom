package ex.example.solix.service;

import ex.example.solix.models.Post;
import ex.example.solix.models.Reels;

import java.util.List;

public interface  ReelsService {
    Reels createNewReels(Reels reel, Long userId) throws Exception;

    List<Reels> findReelsByUserId(Long userId);

    List<Reels> findAllReels();

}
