package com.example.demo.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.mapper.UserMapper;
import com.example.demo.repository.UserEntity;
import com.example.demo.repository.UserRepository;
import com.example.demo.user.User;





@org.springframework.stereotype.Service
public class UserService {
	
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	private UserMapper userMapper;

	public List<User> getAllUsers(){
		
		List<UserEntity> listUserEntity=userRepository.findAll();
		return userMapper.userEntityToUserList(listUserEntity);
		
	}
	
	
	public User consultarUsuario(final Long id) {
		
		if (userRepository.existsById(id)) {
			return userMapper.userEntityToUser(userRepository.findById(id).get());
		}
		return null;
		
	}

	
	public void addUser(User user) {
		
		userRepository.save(userMapper.userToUserEntity(user));
		
	}
	
	public void updateUser(User user) {
		addUser(user);
	}
	
	public void deleteUsers(final Long id) {
		userRepository.deleteById(id);
	}
	
	
	
	
}