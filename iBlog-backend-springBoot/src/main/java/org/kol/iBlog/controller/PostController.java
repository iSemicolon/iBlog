package org.kol.iBlog.controller;


import org.kol.iBlog.dto.PostDto;
import org.kol.iBlog.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts/")
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

    @Autowired
    private PostService postService;

    /*
    http://localhost:9090/api/posts/

{
    "content": "This is a Blog Post",
    "title": "This is a Title"
}
     */
    @PostMapping
    public ResponseEntity createPost(@RequestBody PostDto postDto) {
        System.out.println("create");
        postService.createPost(postDto);
        return new ResponseEntity(HttpStatus.OK);
    }

//    @PostMapping("/test/{postDto}")
//    public ResponseEntity testy(@PathVariable int postDto) {
//        System.out.println("create"+postDto );
//      //  postService.createPost(postDto);
//        return new ResponseEntity(HttpStatus.OK);
//    }

    @GetMapping("/all")
    public ResponseEntity<List<PostDto>> showAllPosts() {
        System.out.println("show-all");
        return new ResponseEntity<>(postService.showAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<PostDto> getSinglePost(@PathVariable @RequestBody Long id) {
        System.out.println("getSingle");
        return new ResponseEntity<>(postService.readSinglePost(id), HttpStatus.OK);
    }
}
