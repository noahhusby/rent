package com.noahhusby.rent.model.dao;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "employee_location")
@Entity
public class EmployeeLocation {
    @Id
    private EmployeeLocationId employeeLocationId;
    @Column(name = "hourly_wage", nullable = false)
    private double hourlyWage;

    @Embeddable
    @Data
    public static class EmployeeLocationId implements Serializable {
        @ManyToOne
        @JoinColumn(name = "location_id")
        private Location location;
        @ManyToOne
        @JoinColumn(name = "employee_id")
        private Employee employee;
    }
}
