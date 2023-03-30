package com.ezenbooks.backend.dto;

public enum UserRole {
	ROLE_ADMIN("관리자"), ROLE_MANAGER("매니저"), ROLE_MEMBER("일반사용자");

	private String value;

	UserRole(String value){
		this.value = value;	
	}

	public String getValue() {
		return value;
	}
}














