package com.ezenbooks.backend.dto;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*
 * @Data : @Getter, @Setter, @ToString, @EqualAndHashCode, 
 * 		   @RequiredArgusConstructor 을 합쳐 놓은 어노테이션이다.
 * 
 * 일반적으로 어노테이션은 필요한것만 따로 사용하는 것을 권장하고 있다.
 */

@Component //특정한 의미가 없는 class 는 @Component 를 선언해줘야 한다.
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class BookDTO {

	private int book_num;
	private int category_code;
	private String book_title;
	private String book_author;
	private String book_image;
	private int book_price;
	private String book_publisher;
	private String book_pubdate;
	private String book_isbn;
	private String book_desc;
	
}
