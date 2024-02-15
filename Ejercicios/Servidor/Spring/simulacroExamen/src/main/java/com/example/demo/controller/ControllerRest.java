package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.RequestSubscriberDTO;
import com.example.demo.dto.ResponseSubscriberDTO;
import com.example.demo.service.SubscriberService;


import io.swagger.v3.oas.annotations.Operation;

@RestController
public class ControllerRest {
 @Autowired
 private SubscriberService subscriberService;

 
 @Operation(summary = "Get all subscribers")
 @GetMapping("sub/getAllSubs")
 public ResponseEntity<List<ResponseSubscriberDTO>> getAllSubscribers(){
	 return  ResponseEntity.status(HttpStatus.OK).body(subscriberService.getAllSubscribers());
 }
 
 @Operation(summary = "Create a new subscriber")
 @PostMapping("sub/createSub")
 public ResponseEntity<ResponseSubscriberDTO> createSubscriber(@RequestBody RequestSubscriberDTO subscriber){
	 return ResponseEntity.status(HttpStatus.CREATED).body(subscriberService.createSubscriber(subscriber));
 }

 
 @Operation(summary = "Check if subscriber exists")
 @GetMapping("sub/checkIfExists")
 public ResponseEntity<Boolean> checkExistsSubscriberByEmail(@RequestParam String email){
	  if(subscriberService.checkExistsSubscriberByEmail(email)) {
		  return ResponseEntity.status(HttpStatus.OK).body(subscriberService.checkExistsSubscriberByEmail(email));
	  }else {
		  return ResponseEntity.status(HttpStatus.NOT_FOUND).body(subscriberService.checkExistsSubscriberByEmail(email));
	  }
 }
 
}

