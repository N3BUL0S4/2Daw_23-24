package es.riberamolinos.examfinal.dto;

import es.riberamolinos.examfinal.entity.Brand;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarDto {
    
	private static final long serialVersionUID = 1L;

    private Long id;
    private String model;
    private Brand brand;
    private boolean used;
}
