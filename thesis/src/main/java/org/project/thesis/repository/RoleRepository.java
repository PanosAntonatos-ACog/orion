package org.project.thesis.repository;

import java.util.Optional;

import org.project.thesis.entity.Role;
import org.project.thesis.model.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(RoleType name);
}
