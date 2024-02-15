package com.example.demo.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.example.demo.dto.ResponseSubscriberDTO;
import com.example.demo.entity.SubscriberEntity;


@Mapper(componentModel = "spring")
public interface SubscriberMapper {

	List<ResponseSubscriberDTO> Subscriber(List<SubscriberEntity> subscriber);
	
	ResponseSubscriberDTO subscriberEntityToSubscriberDto(SubscriberEntity subscriber);
    
	SubscriberEntity subscriberDtoToSubscriberEntity(ResponseSubscriberDTO subscriber);
}