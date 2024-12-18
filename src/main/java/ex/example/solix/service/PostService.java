package ex.example.solix.service;

import ex.example.solix.models.Post;
import org.springframework.stereotype.Service;

import java.util.List;


public interface PostService {
    Post createNewPost(Post post, Long userId) throws Exception;
    String deletePost(Long postId, Long userId) throws Exception;

    List<Post> findPostByUserId(Long userId);

    Post findPostById(Long postId) throws Exception;
    List<Post> findAllPost();

    Post savedPost(Long postId, Long userId) throws Exception;

    Post likePsot(Long postId, Long userId) throws Exception;
}
