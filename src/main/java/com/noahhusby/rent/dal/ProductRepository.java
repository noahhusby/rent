package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Location;
import com.noahhusby.rent.model.dao.OrderDetail;
import com.noahhusby.rent.model.dao.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface ProductRepository extends CrudRepository<Product, UUID> {
}
