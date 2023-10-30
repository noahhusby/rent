package com.noahhusby.rent.model.dao;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "inventory")
@Entity
public class Inventory implements Serializable {
    @Id
    private InventoryId inventoryId;
    @Column(name = "quantity", nullable = false)
    private int quantity;
    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime lastUpdatedAt;

    @Embeddable
    @Data
    public static class InventoryId implements Serializable{
        @ManyToOne
        @JoinColumn(name = "location_id")
        private Location location;
        @ManyToOne
        @JoinColumn(name = "product_id")
        private Product product;
    }
}
