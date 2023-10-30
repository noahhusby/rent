package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.EmployeeLocation;
import com.noahhusby.rent.model.dao.EmployeeTimesheet;
import com.noahhusby.rent.model.dao.InventoryOrder;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface EmployeeLocationRepository extends CrudRepository<EmployeeLocation, EmployeeLocation.EmployeeLocationId> {
}
