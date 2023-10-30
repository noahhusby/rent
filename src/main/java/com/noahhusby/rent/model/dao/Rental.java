package com.noahhusby.rent.model.dao;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "rental")
@Entity
public class Rental {
    @Id
    private RentalId rentalId;
    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;
    @CreatedDate
    @Column(name = "rental_date", nullable = false, updatable = false)
    private LocalDateTime rentalDate;
    @Column(name = "due_date", nullable = false)
    private LocalDateTime dueDate;
    @Column(name = "return_date")
    private LocalDateTime returnDate;
    @Column(name = "cost", nullable = false)
    private double cost;

    @Embeddable
    @Data
    public static class RentalId implements Serializable {
        @ManyToOne
        @JoinColumn(name = "customer_id")
        private Customer customer;

        @ManyToOne
        @JoinColumn(name = "product_id")
        private Product product;
    }
}
