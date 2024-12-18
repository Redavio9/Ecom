package ex.example.solix.service;

import ex.example.solix.models.Post;
import ex.example.solix.models.User;
import ex.example.solix.repository.PostRep;
import ex.example.solix.repository.UserRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImp implements PostService{

    @Autowired
     PostRep postRep;

    @Autowired
    UserService UserService;

    @Autowired
    UserRep UserRep;

    @Override
    public Post createNewPost(Post post, Long userId) throws Exception {

        User user = UserService.findUserById(userId);
        Post newPost= new Post();
        newPost.setCaption(post.getCaption());
        newPost.setImage(post.getImage());
        newPost.setCreatedAt(LocalDateTime.now());
        newPost.setUser(user);
        newPost.setVideo(post.getVideo());

        return postRep.save(newPost);
    }

    @Override
    public String deletePost(Long postId, Long userId) throws Exception {
        Post post = findPostById(postId);
        User user = UserService.findUserById(userId);

        if(post.getUser().getId() != user.getId())
            throw new Exception("you cant delete another users post");
        postRep.delete(post);
        return "post delete succes";
    }

    @Override
    public List<Post> findPostByUserId(Long userId) {
        return postRep.findPostByUserId(userId);
    }

    @Override
    public Post findPostById(Long postId) throws Exception {
        Optional<Post> post = postRep.findById(postId);
        if(post.isPresent())
            return post.get();

        throw new Exception("post not found");
    }

    @Override
    public List<Post> findAllPost() {

        return postRep.findAll();
    }

    @Override
    public Post savedPost(Long postId, Long userId) throws Exception {
        Post post = findPostById(postId);
        User user = UserService.findUserById(userId);

        if(user.getSavedPost().contains(post))
            user.getSavedPost().remove(post);
        else
            user.getSavedPost().add(post);
        UserRep.save(user);
        return post;
    }

    @Override
    public Post likePsot(Long postId, Long userId) throws Exception {
        Post post = findPostById(postId);
        User user = UserService.findUserById(userId);

        if(post.getLiked().contains(user))
            post.getLiked().remove(user);
        else
            post.getLiked().add(user);

        return postRep.save(post);

    }
}
