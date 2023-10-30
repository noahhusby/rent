package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.EmployeeLocation;
import com.noahhusby.rent.model.dao.EmployeeTimesheet;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeTimesheetRepository extends CrudRepository<EmployeeTimesheet, EmployeeTimesheet.EmployeeTimesheetId> {
}
