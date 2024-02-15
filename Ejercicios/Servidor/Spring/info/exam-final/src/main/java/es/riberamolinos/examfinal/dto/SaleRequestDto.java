package es.riberamolinos.examfinal.dto;
import java.time.LocalDate;

import es.riberamolinos.examfinal.entity.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SaleRequestDto {

    private Status status;
    private Double price;
    private LocalDate date;
    private Long clientId;
    private Long car;
    private Long seller;

    
}
