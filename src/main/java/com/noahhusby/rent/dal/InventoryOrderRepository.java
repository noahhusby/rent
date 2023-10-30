package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Inventory;
import com.noahhusby.rent.model.dao.InventoryOrder;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface InventoryOrderRepository extends CrudRepository<InventoryOrder, UUID> {
}
