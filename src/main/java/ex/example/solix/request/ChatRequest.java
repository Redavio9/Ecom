package ex.example.solix.request;

import ex.example.solix.models.*;
import lombok.Data;

@Data

public class ChatRequest {

    private User reqUser;
    private User user2;

}
