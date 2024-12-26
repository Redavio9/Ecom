package ex.example.solix.controller;

import ex.example.solix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ex.example.solix.models.*;
import ex.example.solix.repository.*;
import java.lang.reflect.Array;
import java.util.*;

@RestController
public class UserCnt {

    @Autowired
    UserRep userRep;
    @Autowired
    UserService userService;



    @GetMapping("/api/users")
    public List<User> getUSers()
    {
        List<User> users = userRep.findAll();
        return users;
    }


    @GetMapping("/api/users/{userid}")
    public User getUSerById(@PathVariable("userid") Long Id) throws Exception {
        User user = userService.findUserById(Id);
        return user;

//        return null;
    }

    @PutMapping("/api/users/")
    public User updateUSerById(@RequestHeader("Authorization") String jwt, @RequestBody User user) throws Exception
    {
        User reqUser = userService.findUserByJwt(jwt);
        User updatedUser = userService.updateUser(user, reqUser.getId());
        return updatedUser;
    }

    @DeleteMapping("/api/user/{userid}")
    public String deleteUSer(@PathVariable("userid") Long userid) throws Exception {
        Optional <User> user = userRep.findById(userid);
        if(user.isEmpty())
            throw new Exception("user not exist");
        userRep.delete(user.get());
        return "user delete succes with id " + userid;
    }

    @PutMapping("/api/user/follow/{userId2}")
    public User followUserHan(@RequestHeader("Authorization") String jwt, @PathVariable Long userId2) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        User user = userService.fllowUser(reqUser.getId(), userId2);
        return user;
    }

    @GetMapping("/api/users/search")
    public List <User> searchUser(@RequestParam("query") String query)
    {
        List<User> users = userService.searchUser(query);
        return users;
    }

    @GetMapping("/api/users/profile")
    public User getUserFromToken(@RequestHeader("Authorization") String jwt) throws Exception  {
        User user = userService.findUserByJwt(jwt);
        user.setPassword(null);
        System.out.println("jwt ------- > " + jwt);
        return user;
//        userService
    }
}
