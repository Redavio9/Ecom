package ex.example.solix.controller;


import ex.example.solix.request.LoginRequest;
import ex.example.solix.response.AuthRespone;
import ex.example.solix.Config.JwtProvider;
import ex.example.solix.models.User;
import ex.example.solix.repository.UserRep;
import ex.example.solix.service.UserService;
import ex.example.solix.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRep userRep;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider; // تأكد بأن JwtProvider مخدوم بشكل صحيح


    @Autowired
    private UtilisateurService  utilisateurService;

    @PostMapping("/signup")
    public AuthRespone registerUser(@RequestBody User user) throws Exception {

        User isExist = userRep.findByEmail(user.getEmail());
        if (isExist != null) {
            throw new Exception("Email already exists");
        }

        User newUser = new User();
        newUser.setId(user.getId());
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        User SavedUser = userRep.save(newUser);

        // Authentication
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                SavedUser.getEmail(), SavedUser.getPassword()
        );

        // Generate JWT Token
        String token = JwtProvider.generateToken(authentication); // استخدم JwtProvider بشكل صحيح

        // Response
        return new AuthRespone(token, "Registered Successfully");
    }
    @PostMapping("/signin")
    public AuthRespone signin(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticate(
                loginRequest.getEmail(), loginRequest.getPassword()
        );

        // Generate JWT Token
        String token = JwtProvider.generateToken(authentication); // استخدم JwtProvider بشكل صحيح

        // Response
        return new AuthRespone(token, "Login Successfully");

    }

    private Authentication authenticate(String email, String password) {
        UserDetails userDetails = utilisateurService.loadUserByUsername(email);
        if(userDetails == null) {
            throw new BadCredentialsException("invalid username");
        }
        if(!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

}
