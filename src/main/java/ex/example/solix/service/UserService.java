package ex.example.solix.service;

import ex.example.solix.models.*;

import java.util.List;

public interface UserService {

    public User registerUser(User user);

    public User findUserById(Long Id) throws Exception;
    public User findUserByEmail(String email);

    public User fllowUser(Long userId1, Long userId2) throws Exception;
    public User updateUser(User user, Long userId) throws Exception;

    public List<User> searchUser(String query);
    public User findUserByJwt(String jwt);
}
