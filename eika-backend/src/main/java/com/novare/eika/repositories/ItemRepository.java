package com.novare.eika.repositories;

import com.novare.eika.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public  interface ItemRepository extends JpaRepository<Item,Integer> {

    List<Item> findById(int itemId);
    List<Item> findByUserId(int userId);

    List<Item> findByUserIdOrderByNameDesc(int userId);
    List<Item> findByUserIdOrderByPriceDesc(int userId);
    List<Item> findByUserIdOrderByNameAsc(int userId);
    List<Item> findByUserIdOrderByPriceAsc(int userId);

}
