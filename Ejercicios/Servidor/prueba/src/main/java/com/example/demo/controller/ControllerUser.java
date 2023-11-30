package com.example.demo.controller;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.user.User;
import com.example.demo.Service.UserService;


@RestController
	public class ControllerUser {
		
		@Autowired
		private UserService userService;
	
		@GetMapping("/users")
		private HashMap<Long, User> consultarUsuarios() {
			return userService.consultarUsuarios();
		}

		@GetMapping("/user/{id}")
		private User consultarUsuario(@PathVariable("id") final Long id) {
			return userService.consultarUsuario(id);
		}
		@PostMapping("/new/user")
		private void addUser(@RequestBody User user) {
			userService.addUser(user);
		}

		@PostMapping("/update/user")
		private void updateUser(@RequestBody User user) {
			userService.updateUser(user);
		}


		@DeleteMapping("/delete/{id}")
		private void deleteUsers(@PathVariable("id") final Long id) {
			userService.deleteUsers(id);
		}

}
