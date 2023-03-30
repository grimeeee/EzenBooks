package com.ezenbooks.backend.dto;

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
public class CategoryDTO {
	
	private int  category_code;
	private String category_name;

}
