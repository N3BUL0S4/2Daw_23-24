package com.example.demo.conf;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class OpenApiConf {

	@Bean
	OpenAPI myOpenAPI() {
	
		
		Info info = new Info().title("Mi api rest de pre examen").version("1.0").description("This API exposes endpoints.")
				.termsOfService("https://www.ayuda.com/terms")
				.license(new License().name("MIT License").url("https://choosealicense.com/licenses/mit/"))
				.contact(new Contact().email("lobato@gmail.com").name("Pepe").url("https://www.forocoches.com"));

		return new OpenAPI().info(info)
				.externalDocs(new ExternalDocumentation().description("Repositorio y Documentación del Proyecto y API")
						.url("https://github.com/joseluisgs/tenistas-rest-springboot-2022-2023"));
	}

}

