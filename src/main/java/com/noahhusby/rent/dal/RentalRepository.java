package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Product;
import com.noahhusby.rent.model.dao.Rental;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface RentalRepository extends CrudRepository<Rental, Rental.RentalId> {
}
