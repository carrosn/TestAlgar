package gov.co.mssalon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gov.co.mssalon.model.Productos;

public interface ProductoRepository  extends JpaRepository<Productos, Long>{

}
