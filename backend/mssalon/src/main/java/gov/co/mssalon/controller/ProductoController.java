package gov.co.mssalon.controller;


import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import gov.co.mssalon.dto.ResponseDto;
import gov.co.mssalon.links.ProductosLinks;
import gov.co.mssalon.model.Productos;
import gov.co.mssalon.service.ProductoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController

@RequestMapping("/api")

public class ProductoController {
	private static final Logger LOGGER = LoggerFactory.getLogger(ProductoController.class);
	@Autowired
	private ProductoService productoService;
	@GetMapping(path = ProductosLinks.PRODUCTOS)
    public ResponseEntity<?> getConvocatorias() {
        List<Productos> usuarioList = productoService.getProducto();
        return ResponseEntity.ok(usuarioList);
    }
	
	@GetMapping(path = ProductosLinks.PRODUCTO)
    public ResponseEntity<?> getConvocatoria(@PathVariable("id") Long id) {
	try {
		LOGGER.info("ProductoController::: " + id);
		Productos convocatoria = productoService.getProducto(id);
        return ResponseEntity.ok(convocatoria);
	}catch (RuntimeException exc) {
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Resource Not Found", exc);
    }
    }
	
	@PostMapping(path = ProductosLinks.CREATE_PRODUCTOS)
    
    public ResponseEntity<?> createConvocatoria(@RequestBody Productos convocatoria) {
        LOGGER.info("ProductoController: " + convocatoria);
        Productos dispositivo = productoService.guardarProducto(convocatoria);
        ResponseDto  response=new ResponseDto();
        response.setResponseCode(HttpStatus.OK);
        response.setMessage("OK");
        response.setData(dispositivo);
        response.setTransactionId("");
        
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
 
    }
	
	
	@DeleteMapping(path = ProductosLinks.DELETE_PRODUCTOS)  
	private void deleteConvocatoria(@PathVariable("id") Long id)   
	{  
		
		try {
			LOGGER.info("ProductoController::: " + id);
			productoService.deleteProducto(id);  
		}catch (RuntimeException exc) {
	        throw new ResponseStatusException(
	                HttpStatus.NOT_FOUND, "Resource Not Found", exc);
	    }
		
	} 
	
	@PutMapping(path = ProductosLinks.UPDATE_PRODUCTOS)
	private ResponseEntity<?> updateConvocatoria(@RequestBody Productos convocatoria)   
	{  
		
		LOGGER.info("ProductoController: " + convocatoria);
        Productos dispositivo = productoService.updateProducto(convocatoria);
        ResponseDto  response=new ResponseDto();
        response.setResponseCode(HttpStatus.OK);
        response.setMessage("OK");
        response.setData(dispositivo);
        response.setTransactionId("");
        
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
	 
	}  
	
}
