package ex.example.solix.service;

import ex.example.solix.models.User;
import ex.example.solix.repository.UserRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRep userRep;

    @Override
    public User registerUser(User user) {
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setId(user.getId());
        newUser.setPassword(user.getPassword());

        return userRep.save(newUser);
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
        return userRep.findByEmail(email);
    }

    @Override
    public User fllowUser(Long userId1, Long userId2) throws Exception {
        User user1 = findUserById(userId1);
        User user2 = findUserById(userId2);

        user1.getFollowers().add(userId2); // Added correct logic
        user2.getFollowings().add(userId1); // Added correct logic

        userRep.save(user1);
        userRep.save(user2);
        return user1;
    }

    @Override
    public User updateUser(User user, Long userId) throws Exception {
        User existingUser = findUserById(userId);

        if (user.getEmail() != null)
            existingUser.setEmail(user.getEmail());
        if (user.getFirstName() != null)
            existingUser.setFirstName(user.getFirstName());
        if (user.getLastName() != null)
            existingUser.setLastName(user.getLastName());

        return userRep.save(existingUser);
    }

    @Override
    public List<User> searchUser(String query) {
        return userRep.searchUser(query);
    }
}


//    @Override
//    public List<User> searchUser(String query) {
//        List <User> =
//        return null;
//    }
//}
