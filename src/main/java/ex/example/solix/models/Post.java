package ex.example.solix.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
//import ex.example.solix.models.User;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "app_post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String caption;

    private String image;

    private String video;

    @ManyToOne
    private User user;

    @OneToMany
    private List <User> liked = new ArrayList<>();

    private LocalDateTime createdAt;
}
