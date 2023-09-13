package gov.co.mssalon.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gov.co.mssalon.model.Productos;
import gov.co.mssalon.repository.ProductoRepository;



@Service
public class ProductoService {
	
	@Autowired
	private ProductoRepository productoRepository;
	
	
	
	public ProductoService() {
		
	}

	public Productos guardarProducto(Productos producto) {
        return productoRepository.save(producto);
    }
	
	public List<Productos> getProducto() {
        return productoRepository.findAll();
    }
	
	public Productos getProducto(Long productoId ) {
		Optional<Productos> convocatoria = productoRepository.findById(productoId);
        return convocatoria.get();
    }
	
	public void deleteProducto(Long convocatoriaId ) {
		productoRepository.deleteById(convocatoriaId);
       
    }
	public Productos updateProducto(Productos producto) {
        return productoRepository.save(producto);
    }
	
}
