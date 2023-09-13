package gov.co.mssalon.links;


import org.springframework.stereotype.Component;

@Component
public class ProductosLinks {

    public static final String PRODUCTOS = "/productos";
    public static final String PRODUCTO = "/productos/{id}";
    public static final String CREATE_PRODUCTOS = "/productos";
    public static final String UPDATE_PRODUCTOS = "/productos";
    public static final String DELETE_PRODUCTOS = "/productos" + "/{id}";

  
}
