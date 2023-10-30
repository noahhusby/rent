package com.noahhusby.rent.model.dao;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "employee_timesheet")
@Entity
public class EmployeeTimesheet {
    @Id
    private EmployeeTimesheetId employeeTimesheetId;
    @Column(name = "clocked_in", nullable = false)
    private LocalDateTime clockedIn;
    @Column(name = "clocked_out")
    private LocalDateTime clockedOut;

    @Embeddable
    @Data
    public static class EmployeeTimesheetId implements Serializable {
        @ManyToOne
        @JoinColumn(name = "location_id")
        private Location location;
        @ManyToOne
        @JoinColumn(name = "employee_id")
        private Employee employee;
    }
}
