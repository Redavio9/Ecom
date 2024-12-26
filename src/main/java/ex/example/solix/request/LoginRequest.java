package ex.example.solix.request;


import ex.example.solix.response.AuthRespone;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {
    private String email;
    private String password;

}
