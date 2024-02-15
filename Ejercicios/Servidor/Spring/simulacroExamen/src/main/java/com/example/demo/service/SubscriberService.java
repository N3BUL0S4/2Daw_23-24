package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.dto.RequestSubscriberDTO;
import com.example.demo.dto.ResponseSubscriberDTO;
import com.example.demo.entity.AccountEntity;
import com.example.demo.entity.SubscriberEntity;
import com.example.demo.mapper.SubscriberMapper;
import com.example.demo.repository.AccountRepository;
import com.example.demo.repository.SubscriberRepository;

@Service
public class SubscriberService {

	 @Autowired
	 private SubscriberMapper subscriberMapper;
	 
	 @Autowired
	 private SubscriberRepository subscriberRepository;
	 
	 @Autowired
	 private AccountRepository accountRepository;
	
	 
	 
	 public List<ResponseSubscriberDTO> getAllSubscribers(){
		 return subscriberMapper.Subscriber(subscriberRepository.findAll());
	 }
	 
	 public ResponseSubscriberDTO createSubscriber(RequestSubscriberDTO request){
		 
		 SubscriberEntity s1= new SubscriberEntity();
		 s1.setPrice(500.0);
		 s1.setName(request.getName());
		 s1.setEmail(request.getEmail());
		 s1.setDate(LocalDateTime.now());
		 s1.setProcess(false);
		
		 return subscriberMapper.subscriberEntityToSubscriberDto(subscriberRepository.save(s1));
		 
	 }
	 
	 public boolean checkExistsSubscriberByEmail(String email) {
		 List<ResponseSubscriberDTO> lista = subscriberMapper.Subscriber(subscriberRepository.findAll());
		 for( ResponseSubscriberDTO elemento : lista) {
			 if(elemento.getEmail().equalsIgnoreCase(email)) {
				 return true;
			 }
		 }
		 return false;
	 }
	 
	 public List<SubscriberEntity> checkNewSubscribersToPay(){
		 List<SubscriberEntity> lista = subscriberRepository.findAll();
		 List<SubscriberEntity> lista2= new ArrayList<>();
		 for( SubscriberEntity elemento : lista) {
			 if(!elemento.isProcess()) {
				 lista2.add(elemento);
				 elemento.setProcess(true);
				 subscriberRepository.save(elemento);
			 }
		 }
		 return lista2;
	}
	 
	 public void insertMoney(List<SubscriberEntity> lista) {
		 
		 for( SubscriberEntity elemento : lista) {
			 List<AccountEntity> accounts=accountRepository.findAll();
			 AccountEntity ae= new AccountEntity(accounts.size()+1,"Pago a llados",elemento.getPrice(),LocalDateTime.now());;
			 accountRepository.save(ae);
			 elemento.setPrice(0.0);
			 subscriberRepository.save(elemento);
		 }
	 }
	 
	 
}
