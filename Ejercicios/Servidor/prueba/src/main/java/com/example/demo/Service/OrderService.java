package com.example.demo.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.example.demo.Order.Order;
import com.example.demo.Order.Order.Estado;
import com.example.demo.user.User;

@Service
public class OrderService {
	
	HashMap<Long, Order> orders = initOrder();
	
	public ArrayList<Order> getAllOrders() {
		return new ArrayList<>(orders.values());
	}
	
	public void newOrder(Order order) {
		orders.put(order.getId(), order);
	}
	
	public void updateOrder(Order order) {
		if (order.getEstado().equals(Estado.procesado)) {
			return;
		}
		orders.put(order.getId(), order);
		return;
		
	}
	
	public void processOder(Order order) {
		order.setEstado(Estado.procesado);
		orders.put(order.getId(), order);
	}
	
	public void deleteUser(Long id) {
		orders.remove(id);   
	}
	
	
	public HashMap<Long, Order> initOrder() {
		HashMap<Long, Order> orders = new HashMap<>();
		orders.put(1L, new Order(1L,20,Estado.noProcesado,LocalDate.now(), new User(1L, "Pepe", "Alfredo", 12312323, "pepealfredodominguez@gmail.com")));
		return orders;
	}
}
