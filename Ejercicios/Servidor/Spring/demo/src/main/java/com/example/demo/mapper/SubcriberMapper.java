package com.example.demo.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import com.example.demo.dto.Subcriber;
import com.example.demo.entitys.SubcriberEntity;

@Mapper(componentModel = "spring")
public interface SubcriberMapper {
    
    Subcriber toSubcriber(SubcriberEntity subcriber);
    SubcriberEntity toSubcriberEntity(Subcriber subcriber);
    List<Subcriber> toSubcribers(List<SubcriberEntity> subcriber);
    List<SubcriberEntity> toSubcriberEntitys(List<Subcriber> subcriber);

}
