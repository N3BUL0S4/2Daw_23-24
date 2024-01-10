
package com.example.demo.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import com.example.demo.user.User;
import com.example.demo.repository.UserEntity;



@Mapper(componentModel = "spring")
public interface UserMapper {
	
	User userEntityToUser (UserEntity userEntity);
	
	List<User> userEntityToUserList(List<UserEntity> userEntity);
	
	UserEntity userToUserEntity (User user);	
	
}