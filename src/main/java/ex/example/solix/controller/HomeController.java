package ex.example.solix.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {
    @GetMapping("")
    public String HomeControllerHandler()
    {
        return "this is home controller";
    }
//    @PostMapping
//    @PutMapping
//    @DeleteMapping
}

