package com.noahhusby.rent.dal;

import com.noahhusby.rent.model.dao.Location;
import com.noahhusby.rent.model.dao.OrderDetail;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface OrderDetailRepository extends CrudRepository<Location, OrderDetail.OrderDetailId> {
}
