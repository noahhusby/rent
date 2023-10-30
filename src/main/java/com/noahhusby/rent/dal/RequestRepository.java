package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Rental;
import com.noahhusby.rent.model.dao.Request;
import org.springframework.data.repository.CrudRepository;

public interface RequestRepository extends CrudRepository<Request, Request.RequestId> {
}
