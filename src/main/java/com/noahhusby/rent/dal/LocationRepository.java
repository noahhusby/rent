package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.InventoryOrder;
import com.noahhusby.rent.model.dao.Location;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface LocationRepository extends CrudRepository<Location, UUID> {
}
