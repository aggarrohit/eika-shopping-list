package com.novare.eika.utilities;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.Date;
import java.util.Objects;

public class ImageHandler {

    private ImageHandler(){

    }

    public static String uploadImage(MultipartFile file){

        String imageName = (new Date()).getTime()
                + Objects.requireNonNull(file.getOriginalFilename())
                .replace(" ","_")
                .replace("\\\\","");

        Path imagePath = Path.of("src/main/images/",imageName);

        try {
            Files.copy(file.getInputStream(), imagePath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            return "no image";
        }

        return imageName;
    }

}
