package es.riberamolinos.examfinal.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import es.riberamolinos.examfinal.dto.SaleDto;
import es.riberamolinos.examfinal.entity.SaleEntity;

@Mapper(componentModel = "spring")
public interface SaleMapper {
    SaleDto toSale(SaleEntity sale);
    SaleEntity toSaleEntity(SaleDto sale);
    List<SaleDto> toSales(List<SaleEntity> sales);
    List<SaleEntity> toSalesEntity(List<SaleDto> sales);
}
