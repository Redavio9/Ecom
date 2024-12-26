package ex.example.solix.service;

import ex.example.solix.models.*;
import ex.example.solix.repository.CommentRep;
import ex.example.solix.repository.PostRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CommentServiceImp implements CommentService {

    @Autowired
    private PostService postService;

    @Autowired
    private CommentRep commentRep;

    @Autowired
    private UserService userService;

    @Autowired
    private PostRep postRep;


    @Override
    public Comment createComment(Comment comment, Long postId, Long userId) throws Exception {
        User user = userService.findUserById(userId);
        Post post = postService.findPostById(postId);

        comment.setUser(user);
        comment.setComment(comment.getComment() + 1);
        comment.setCreatedAt(LocalDateTime.now());

        Comment savedComment = commentRep.save(comment);
        post.getComments().add(savedComment);
        postRep.save(post);


        return savedComment;
    }


    @Override
    public Comment LikeComment(Long commentId, long userId) throws Exception {

        Comment comment = findComment(commentId);
        User user = userService.findUserById(userId);

        if(!comment.getLiked().contains(user)) {
            comment.getLiked().add(user);
        }
        else
            comment.getLiked().remove(user);
        return commentRep.save(comment);
    }

    @Override
    public Comment findComment(Long commentId) throws Exception {
        Optional<Comment> opt = commentRep.findById(commentId);
        if (opt.isEmpty())
            throw new Exception("Comment not exist !");
        return opt.get();
    }
}
