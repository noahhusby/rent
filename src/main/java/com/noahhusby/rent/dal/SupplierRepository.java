package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Request;
import com.noahhusby.rent.model.dao.Supplier;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface SupplierRepository extends CrudRepository<Supplier, UUID> {
}
