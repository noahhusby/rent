package com.noahhusby.rent.model.dao;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;

@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "request")
@Entity
public class Request {
    @Id
    private RequestId requestId;

    @Embeddable
    @Data
    public static class RequestId implements Serializable {
        @ManyToOne
        @JoinColumn(name = "customer_id")
        private Customer customer;

        @ManyToOne
        @JoinColumn(name = "product_id")
        private Product product;


        @ManyToOne
        @JoinColumn(name = "location_id")
        private Location location;
    }
}
