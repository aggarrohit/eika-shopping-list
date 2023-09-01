package com.novare.eika.controllers;

import com.novare.eika.models.Item;
import com.novare.eika.services.ItemService;
import com.novare.eika.utilities.ImageHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/user/{email}/items")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping
    List<Item> getUserItems(@PathVariable String email,
                            @RequestParam(required = false) String sortBy,
                            @RequestParam(required = false) String sortCriteria){
        return itemService.getSortedItemsForUser(email,sortBy,sortCriteria);
    }

    @PostMapping
    ResponseEntity<Item> addItemWithEmail(@RequestParam(required = false) MultipartFile file,
                                          Item item,
                                          @PathVariable String email){
        if(file!=null){
            String imageName = ImageHandler.uploadImage(file);
            if(!imageName.equals("no image")) item.setImageUrl(imageName);
        }

        return ResponseEntity.status(HttpStatus.OK).body(itemService.addItem(item,email));
    }

    @PutMapping
    ResponseEntity<Item> updateItemStatus(@RequestBody Item item,@PathVariable String email){
        return ResponseEntity.status(HttpStatus.OK).body(itemService.updateItemStatus(item,email));
    }
}
