package ex.example.solix.controller;

import ex.example.solix.models.Post;
import ex.example.solix.models.User;
import ex.example.solix.service.PostService;
import ex.example.solix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostService postService;

    @Autowired
    UserService userService;

    @PostMapping("/api/posts/user/")
    public ResponseEntity<Post> createPost(@RequestBody Post post, @RequestHeader("Authorization") String jwt) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        Post createPost = postService.createNewPost(post, reqUser.getId());
        return new ResponseEntity<>(createPost, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/api/posts/{postId}/user/")
    public ResponseEntity<String> deletePost(@PathVariable Long postId, @RequestHeader("Authorization") String jwt) throws Exception {
//        return postService.deletePost(postId, userId);
        User reqUser = userService.findUserByJwt(jwt);

        return new ResponseEntity<>(postService.deletePost(postId, reqUser.getId()), HttpStatus.OK);
    }

    @GetMapping("/api/posts")
    public ResponseEntity<List<Post>> findAllPosts() {
        List<Post> posts = postService.findAllPost();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }


    @GetMapping("/api/posts/{postId}")
    public ResponseEntity<Post> findPostByIdhan(@PathVariable Long postId) throws Exception {
        Post post = postService.findPostById(postId);
        return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
    }

    @GetMapping("/api/post/user/{userId}")
    public ResponseEntity<List<Post>> findUsersPost(@PathVariable Long userId)
    {
        List <Post> posts=postService.findPostByUserId(userId);
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }


    @PutMapping("/api/posts/save/{postId}")
    public ResponseEntity<Post> SavedPostHan(@PathVariable Long postId, @RequestHeader("Authorization") String jwt) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        Post post = postService.savedPost(postId, reqUser.getId());
        return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
    }


    @PutMapping("/api/posts/like/{postId}/user/{userid}")
    public ResponseEntity<Post> LikedPostHan(@PathVariable Long postId, @RequestHeader("Authorization") String jwt) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        Post post = postService.likePsot(postId, reqUser.getId());
        return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
    }

}
