package es.riberamolinos.examfinal.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SellerDto {
    
    private static final long serialVersionUID = 1L;
    private Long id;
    private String name;
    private String email;
    private Integer phone;
}
