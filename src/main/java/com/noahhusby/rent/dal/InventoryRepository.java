package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Inventory;
import org.springframework.data.repository.CrudRepository;

public interface InventoryRepository extends CrudRepository<Inventory, Inventory.InventoryId> {
}
