package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Order.Order;
import com.example.demo.Service.OrderService;

@RestController
public class ControllerOrder {
	
	private OrderService orderService;
	
	@GetMapping("/Orders/getAll")
	public ArrayList<Order> getAllOrders() {
		return orderService.getAllOrders();
	}
	
	@PostMapping("/Order/New")
	public void newOrder (@RequestBody Order order) {
		orderService.newOrder(order);
	}
	
	@PostMapping("/Order/update/")
	public void updateOrder(@RequestBody Order order) {
		orderService.updateOrder(order);
	}
	@PostMapping("/Order/process")	
	public void processOder(@RequestBody Order order) {
		orderService.processOder(order);
	}
	@DeleteMapping("/Order/delete/{id}")	
	public void deleteUser(@PathVariable("id") final long id) {
		orderService.deleteUser(id);
	}
	
}
