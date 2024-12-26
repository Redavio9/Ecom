package ex.example.solix.service;

import ex.example.solix.models.User;
import ex.example.solix.repository.UserRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UtilisateurService implements UserDetailsService
{
    @Autowired
    private UserRep userRep;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRep.findByEmail(username);
        if(user == null)
        {
            throw new UsernameNotFoundException("username not found");
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(username, user.getPassword(), authorities);
    }
}
