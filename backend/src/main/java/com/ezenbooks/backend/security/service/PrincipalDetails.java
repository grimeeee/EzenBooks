package com.ezenbooks.backend.security.service;

import java.util.ArrayList;
import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.ezenbooks.backend.dto.UserDTO;

public class PrincipalDetails implements UserDetails{
	private UserDTO userDTO;
	
	public PrincipalDetails() {
	}
	
	public PrincipalDetails(UserDTO userDTO) {
		this.userDTO = userDTO;
	}

	//username(계정)의 권한 목록을 리턴
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> collect = new ArrayList<GrantedAuthority>();
		collect.add(new GrantedAuthority() {
			
			@Override
			public String getAuthority() {
				
//				return user.getUser_role();
				return userDTO.getUser_role();
			}
		});
		return collect;
	}

	public UserDTO getUser() {
		return userDTO;
	}
	
	//비밀번호
	@Override
	public String getPassword() {
		return userDTO.getUser_pwd();
	}

	//이름
	@Override
	public String getUsername() {
		return userDTO.getUser_name();
	}
	
	public String getUsernickname() {
		return userDTO.getUser_nickname();
	}
	
	public String getUserProfile() {
		return userDTO.getUser_profile();
	}

	//계정만료여부 리턴-true(만료안됨)
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	//계정의 잠김여부 리턴-true(잠기지 않음)
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	//비밀번호 만료 여부 리턴-true(만료안됨)
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	//계정의 활성화 여부 리턴-true(활성화됨)
	@Override
	public boolean isEnabled() {
		return true;
	}

}




