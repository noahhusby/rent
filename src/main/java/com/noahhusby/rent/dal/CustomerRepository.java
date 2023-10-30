package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Customer;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CustomerRepository extends CrudRepository<Customer, UUID> {
}
