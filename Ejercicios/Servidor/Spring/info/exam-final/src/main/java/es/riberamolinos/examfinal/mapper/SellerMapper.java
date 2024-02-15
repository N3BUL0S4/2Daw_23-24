
package es.riberamolinos.examfinal.mapper;

import org.mapstruct.Mapper;

import es.riberamolinos.examfinal.dto.SellerDto;
import es.riberamolinos.examfinal.entity.SellerEntity;

/**
 * SellerMapper
 */
@Mapper(componentModel = "spring")
public interface SellerMapper {

    SellerEntity toSellerEntity(SellerDto seller);
    SellerDto toSeller(SellerEntity seller);
    
}