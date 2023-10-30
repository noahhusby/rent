package com.noahhusby.rent.model.dao;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;

@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "order_detail")
@Entity
public class OrderDetail {
    @Id
    private OrderDetailId orderDetailId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "price", nullable = false)
    private double price;

    @Embeddable
    @Data
    public static class OrderDetailId implements Serializable {
        @ManyToOne
        @JoinColumn(name = "order_id")
        private InventoryOrder order;

        @ManyToOne
        @JoinColumn(name = "product_id")
        private Product product;
    }
}
