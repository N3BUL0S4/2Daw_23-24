package com.example.demo.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserEntity;
import com.example.demo.user.User;



@Service
public class UserService {
	private OrderRepository users;

	public List<User> consultarUsuarios() {
		List   <UserEntity> lstUserEntity= users.findAll();
		lstUserEntity.stream().map();
	}

	public User consultarUsuario( final Long id) {
		if (mapuser.get(id) != null) {
			return (User) mapuser.get(id);
		}
		return null;

	}

	public void addUser( User user) {
		mapuser.put(user.getId(), user);
	}

	public void updateUser( User user) {
		mapuser.put(user.getId(), user);
	}

	public void deleteUsers( final Long id) {
		mapuser.remove(id);
	}

}