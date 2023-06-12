package org.kol.iBlog.controller;

import org.kol.iBlog.dto.RegisterRequest;
import org.kol.iBlog.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
//http://localhost:4200
public class AuthController {

    @Autowired
    private AuthService authService;

    /*

    http://localhost:8080/api/auth/signup

    {
    "username":"test",
    "email": "test@gmail.com",
    "password": "test"
}
     */

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody RegisterRequest registerRequest) {
        authService.signup(registerRequest);
        return new ResponseEntity(HttpStatus.OK);
    }

}
