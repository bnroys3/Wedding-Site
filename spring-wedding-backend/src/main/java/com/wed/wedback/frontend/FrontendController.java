package com.wed.wedback.frontend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping(value = {"", "/", "/gallery", "/rsvp", "/details", "/registry"})
public class FrontendController {

    //This endpoint serves frontend html content
    @GetMapping(produces = MediaType.TEXT_HTML_VALUE)
    public ResponseEntity<String> getFrontend() throws IOException {

        Resource resource = new ClassPathResource("static/index.html");
        Path indexPath = Paths.get(resource.getURI());

        //get html content from index.html
        String htmlContent = Files.readString(indexPath, StandardCharsets.UTF_8);
        return ResponseEntity.ok(htmlContent);
    }
    
    
}
