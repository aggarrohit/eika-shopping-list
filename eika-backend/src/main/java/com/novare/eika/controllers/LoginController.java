package com.novare.eika.controllers;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login-user")
public class LoginController {


    @GetMapping
    ResponseEntity<String> getUserByEmail(){
        return ResponseEntity.ok("login successful..");
    }



}
