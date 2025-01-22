package ex.example.solix.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String chatName;
    private String chatMessage;
    private String chatImageUrl;
    @ManyToMany()
    private List<User> users = new ArrayList<>();

    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "chat")
    private List<Message> messages = new ArrayList<>();


}
