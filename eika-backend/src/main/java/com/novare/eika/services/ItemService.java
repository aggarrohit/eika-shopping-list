package com.novare.eika.services;

import com.novare.eika.exceptions.NotAuthorizedException;
import com.novare.eika.exceptions.UserNotFoundException;
import com.novare.eika.models.Item;
import com.novare.eika.models.User;
import com.novare.eika.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private UserService userService;

    @PreAuthorize("# email == authentication.principal.username")
    public List<Item> getSortedItemsForUser(String email,String sortBy,String sortCriteria){
        User user = userService.getUserByEmail(email);
        int userid = user.getId();

        if(sortBy==null) sortBy="name";
        if(sortCriteria==null) sortCriteria="asc";

        if(sortBy.equals("name") && sortCriteria.equals("desc")){
            return itemRepository.findByUserIdOrderByNameDesc(userid);
        }else
        if(sortBy.equals("name") && sortCriteria.equals("asc")){
            return itemRepository.findByUserIdOrderByNameAsc(userid);
        }else
        if(sortBy.equals("price") && sortCriteria.equals("desc")){
            return itemRepository.findByUserIdOrderByPriceDesc(userid);
        }else
        if(sortBy.equals("price") && sortCriteria.equals("asc")){
            return itemRepository.findByUserIdOrderByPriceAsc(userid);
        }
        return itemRepository.findByUserId(userid);

    }

    @PreAuthorize("# email == authentication.principal.username")
    public Item updateItemStatus(Item item, String email){
        User user = userService.getUserByEmail(email);
        if(user==null) throw new UserNotFoundException("user not valid");
        Item updatedItem = itemRepository.findById(item.getId()).get(0);
        if(updatedItem==null) throw new UserNotFoundException("item not found");
        if(updatedItem.getUser().getId()!=user.getId()) throw new NotAuthorizedException("user not authorized to update this item");
        updatedItem.setDone(item.isDone());
        return itemRepository.save(updatedItem);
    }

    @PreAuthorize("# email == authentication.principal.username")
    public Item addItem(Item item, String email){

        User user = userService.getUserByEmail(email);
        item.setUser(user);
        return itemRepository.save(item);
    }


}
