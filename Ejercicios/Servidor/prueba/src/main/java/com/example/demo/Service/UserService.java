package com.example.demo.Service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.example.demo.user.User;



@Service
public class UserService {
	HashMap<Long, User> mapuser = insertaUsers();

	public HashMap<Long, User> consultarUsuarios() {
		return mapuser;
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

	public HashMap<Long, User> insertaUsers() {
		HashMap<Long, User> users = new HashMap<>();
		users.put(1L, new User(1L, "Pepe", "Alfredo", 12312323, "pepealfredodominguez@gmail.com"));
		users.put(2L, new User(2L, "Paco", "Alfredo", 12312323, "pacoalfredodominguez@gmail.com"));
		users.put(3L, new User(3L, "Alfredo", "Paco", 12312323, "pepealfredodominguez@gmail.com"));
		users.put(4L, new User(4L, "A", "Paco", 12312323, "pepealfredodominguez@gmail.com"));
		return users;
	}
}