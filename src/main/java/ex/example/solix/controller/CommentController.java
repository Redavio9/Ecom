package ex.example.solix.controller;


import ex.example.solix.models.*;
import ex.example.solix.service.CommentService;
import ex.example.solix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/comments/post/{postId}")
    public Comment createComment(@RequestBody Comment comment, @RequestHeader("Authorization") String jwt, @PathVariable("postId") Long postId) throws Exception {

        User user = userService.findUserByJwt(jwt);
        Comment created = commentService.createComment(comment, postId, user.getId());
        return created;
    }

    @PostMapping("/api/comments/like/{commentId}")
    public Comment likeComment(@RequestHeader("Authorization") String jwt, @PathVariable("commentId") Long commentId) throws Exception {

        User user = userService.findUserByJwt(jwt);
        Comment liked = commentService.LikeComment(commentId, user.getId());
        return liked;
    }

}
