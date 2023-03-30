package com.ezenbooks.backend.repository;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import com.ezenbooks.backend.dto.UserDTO;

@Repository
@Mapper
public interface UserRepository {
	//회원가입
	void saveUser(UserDTO userDTO);
	
	//로그인
	UserDTO getUserAccount(String username);

	// 중복체크
	public int getUserName(UserDTO userDTO) throws Exception;

	public int getUserNick(UserDTO userDTO) throws Exception;
	
	public int getUserEmail(UserDTO userDTO) throws Exception;
}
