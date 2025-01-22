package ex.example.solix.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)  
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "gender")
    private String gender;

//    @ElementCollection
//    @CollectionTable(name = "user_followers", joinColumns = @JoinColumn(name = "user_id"))
//    @Column(name = "follower_id")
    private List<Long> followers = new ArrayList<>();

//    @ElementCollection
//    @CollectionTable(name = "user_followings", joinColumns = @JoinColumn(name = "user_id"))
//    @Column(name = "following_id")
    private List<Long> followings = new ArrayList<>();

    @ManyToMany
    private List<Post> savedPost= new ArrayList<>();
}
