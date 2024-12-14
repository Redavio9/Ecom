package ex.example.solix.controller;

import org.springframework.web.bind.annotation.*;
import ex.example.solix.models.User;

import java.lang.reflect.Array;
import java.util.*;

@RestController
public class UserCnt {
    @GetMapping("/users/{userid}")
    public User getUSerById(@PathVariable("userid") Long Id)
    {
        List<User> users = new ArrayList<>();
        User user1 = new User(1L, "reda", "Solix", "reda@gmail.com", "123456");
        user1.setId(Id);

        return user1;
    }

    @PostMapping("/users")
    public User PostUser(@RequestBody User user)
    {
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setId(user.getId());
        newUser.setPassword(user.getPassword());
        return newUser;
    }
}
