package ex.example.solix.controller;

import ex.example.solix.models.Post;
import ex.example.solix.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostService postService;
    @PostMapping("/posts/user/{userId}")
    public ResponseEntity<Post> createPost(@RequestBody Post post, @PathVariable Long userId) throws Exception {
        Post createPost = postService.createNewPost(post, userId);
        return new ResponseEntity<>(createPost, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/posts/{postId}/user/{userid}")
    public ResponseEntity<String> deletePost(@PathVariable Long postId, @PathVariable Long userId) throws Exception {
//        return postService.deletePost(postId, userId);
        return new ResponseEntity<>(postService.deletePost(postId, userId), HttpStatus.OK);
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> findAllPosts() {
        List<Post> posts = postService.findAllPost();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }


    @GetMapping("/posts/{postId}")
    public ResponseEntity<Post> findPostByIdhan(@PathVariable Long postId) throws Exception {
        Post post = postService.findPostById(postId);
        return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
    }

    @GetMapping("/post/user/{userId}")
    public ResponseEntity<List<Post>> findUsersPost(@PathVariable Long userId)
    {
        List <Post> posts=postService.findPostByUserId(userId);
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }


    @PutMapping("/posts/save/{postId}/user/{userid}")
    public ResponseEntity<Post> SavedPostHan(@PathVariable Long postId, @PathVariable Long userid) throws Exception {
        Post post = postService.savedPost(postId, userid);
        return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
    }


    @PutMapping("/posts/like/{postId}/user/{userid}")
    public ResponseEntity<Post> LikedPostHan(@PathVariable Long postId, @PathVariable Long userid) throws Exception {
        Post post = postService.likePsot(postId, userid);
        return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
    }

}
