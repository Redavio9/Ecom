package ex.example.solix.models;

import jakarta.persistence.*;
import java.util.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.IdGeneratorType;



@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "app_user")
public class User {
    @Id
    @Column(name = "id")
    private Long Id;

    private String FirstName;
    private String LastName;

    @Column(name = "email")
    private String Email;

    private String Password;
    private String Gendre;
    private List<Long> Followers;
    private List<Long> Followings;
}
