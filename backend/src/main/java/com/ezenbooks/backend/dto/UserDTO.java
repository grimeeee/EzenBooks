package com.ezenbooks.backend.dto;

import java.sql.Date;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Component //특정한 의미가 없는 class 는 @Component 를 선언해줘야 한다.
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {

	private int user_id;
	private String user_name;
	private String user_pwd;
	private String user_email;
	private String user_nickname;
	private String user_profile;
	private String user_role;
	private Date create_date;
	private Date modify_date;
		
}
