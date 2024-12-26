package ex.example.solix.controller;

import ex.example.solix.models.Post;
import ex.example.solix.models.Reels;
import ex.example.solix.models.User;
import ex.example.solix.service.ReelsService;
import ex.example.solix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReelsControler {

    @Autowired
    public ReelsService reelsService;

    @Autowired
    public UserService userService;

    @PostMapping("/api/reels/user/")
    public ResponseEntity<Reels> createReels(@RequestBody Reels reels, @RequestHeader("Authorization") String jwt) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        Reels createReels = reelsService.createNewReels(reels, reqUser.getId());
        return new ResponseEntity<>(createReels, HttpStatus.ACCEPTED);
    }


    @GetMapping("/api/reels")
    public ResponseEntity<List<Reels>> findAllReels() {
        List<Reels> reels = reelsService.findAllReels();
        return new ResponseEntity<>(reels, HttpStatus.OK);
    }


    @GetMapping("/api/users/reels/")
    public ResponseEntity<List<Reels>> findReelsByIdhan( @RequestHeader("Authorization") String jwt) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        List<Reels> reels = reelsService.findReelsByUserId(reqUser.getId());
        return new ResponseEntity<>(reels, HttpStatus.ACCEPTED);
    }




}
