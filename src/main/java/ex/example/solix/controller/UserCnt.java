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

    @PostMapping("/users")
    public User PostUser(@RequestBody User user)
    {
        User savedUser=userService.registerUser(user);
        return savedUser;
    }

    @GetMapping("/users")
    public List<User> getUSers()
    {
        List<User> users = userRep.findAll();
        return users;
    }


    @GetMapping("/users/{userid}")
    public User getUSerById(@PathVariable("userid") Long Id) throws Exception {
        User user = userService.findUserById(Id);
        return user;

//        return null;
    }

    @PutMapping("/users/{userid}")
    public User updateUSerById(@RequestBody User user, @PathVariable("userid")   Long Id) throws Exception
    {

        User updatedUser = userService.updateUser(user, Id);
        return updatedUser;
    }

    @DeleteMapping("user/{userid}")
    public String deleteUSer(@PathVariable("userid") Long userid) throws Exception {
        Optional <User> user = userRep.findById(userid);
        if(user.isEmpty())
            throw new Exception("user not exist");
        userRep.delete(user.get());
        return "user delete succes with id " + userid;
    }

    @PutMapping("/user/{userId1}/{userId2}")
    public User followUserHan(@PathVariable Long userId1, @PathVariable Long userId2) throws Exception {
        User user = userService.fllowUser(userId1, userId2);
        return user;
    }

    @GetMapping("/users/search")
    public List <User> searchUser(@RequestParam("query") String query)
    {
        List<User> users = userService.searchUser(query);
        return users;
    }
}
