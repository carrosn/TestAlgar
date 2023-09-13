package gov.co.mssalon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class MsSalonApplication  implements WebMvcConfigurer{

	public static void main(String[] args) {
		SpringApplication.run(MsSalonApplication.class, args);
	}
	
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
                .allowedOrigins("http://localhost:4200")
               // .allowedOrigins("http://ika.cnsc.net:8080")
                .allowedHeaders("Authorization", "Cache-Control", "Content-Type", "tokenrpca", "Accept", "X-Requested-With", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Origin")
                .exposedHeaders("Access-Control-Expose-Headers", "Authorization", "Cache-Control", "Content-Type", "tokenrpca", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Origin")
                .allowCredentials(true);
    }

}
