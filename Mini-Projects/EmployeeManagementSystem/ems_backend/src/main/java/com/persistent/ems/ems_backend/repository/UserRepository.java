package com.persistent.ems.ems_backend.repository;

import com.persistent.ems.ems_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
