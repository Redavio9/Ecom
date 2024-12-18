package ex.example.solix.service;

import ex.example.solix.models.User;
import ex.example.solix.repository.UserRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    UserRep userRep;
    @Autowired
    UserService userService;



    @Override
    public User registerUser(User user) {

        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setId(user.getId());
        newUser.setPassword(user.getPassword());

        User savedUser=userRep.save(newUser);
        return savedUser;
    }

    @Override
    public User findUserById(Long Id) throws Exception
    {

        Optional<User> user = userRep.findById(Id);
        if(user.isPresent())
            return user.get();
        throw new Exception("user not exist" + Id);
    }

    @Override
    public User findUserByEmail(String email) {
        User user= userRep.findByEmail(email);
        return user;
    }

    @Override
    public User fllowUser(Long userId1, Long userId2) throws Exception {
        User user1 = findUserById(userId1);
        User user2 = findUserById(userId2);

        user1.getFollowers().add(user1.getId());
        user2.getFollowings().add(user2.getId());

        userRep.save(user1);
        userRep.save(user2);
        return user1;
    }

    @Override
    public User updateUser(User user , Long userId) throws Exception {
        Optional <User> user1 = userRep.findById(userId);
        if(user1.isEmpty())
            throw new Exception("user not exist");
        User OldUser = user1.get();
        if(user.getEmail() != null)
            OldUser.setEmail(user.getEmail());
        if(user.getFirstName() != null)
            OldUser.setFirstName(user.getFirstName());
        if(user.getLastName() != null)
            OldUser.setLastName(user.getLastName());
        User updateUser=userRep.save(OldUser);
        return updateUser;
    }

    @Override
    public List<User> searchUser(String query) {

        return userRep.searchUser(query);
    }

//    @Override
//    public List<User> searchUser(String query) {
//        List <User> =
//        return null;
//    }
}
