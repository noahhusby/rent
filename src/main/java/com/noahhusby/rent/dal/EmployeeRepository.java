package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface EmployeeRepository extends CrudRepository<Employee, UUID> {
}
