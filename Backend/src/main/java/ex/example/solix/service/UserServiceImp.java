package ex.example.solix.service;

import ex.example.solix.Config.JwtProvider;
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
    public User fllowUser(Long reqUserId, Long userId2) throws Exception {
        User reqUser = findUserById(reqUserId);
        User user2 = findUserById(userId2);

        reqUser.getFollowers().add(userId2); // Added correct logic
        user2.getFollowings().add(reqUserId); // Added correct logic

        userRep.save(reqUser);
        userRep.save(user2);
        return reqUser;
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
        if(user.getGender() != null)
            existingUser.setGender(user.getGender());

        return userRep.save(existingUser);
    }

    @Override
    public List<User> searchUser(String query) {
        return userRep.searchUser(query);
    }

    @Override
    public User findUserByJwt(String jwt) {
        String email = JwtProvider.getEmailFromJwtToken(jwt);
        System.out.println("email from jwt -----> " + email);
        System.out.println("jwt from jwt -----> " + jwt);
        User user = userRep.findByEmail(email);
        return user;
    }
}


//    @Override
//    public List<User> searchUser(String query) {
//        List <User> =
//        return null;
//    }
//}
