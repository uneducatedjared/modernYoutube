package modernyoutubebackend.contoller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    @GetMapping("/test")
    public ResponseEntity<String> getWithCustomHeader() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Custom-Header", "CustomValue");

        return new ResponseEntity<>("Hello with custom header!", headers, HttpStatus.OK);
    }
}
