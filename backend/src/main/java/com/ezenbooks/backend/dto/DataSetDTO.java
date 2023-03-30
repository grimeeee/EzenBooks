package com.ezenbooks.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DataSetDTO {
	
	private int user_id;
	
	private int book_num;
	
	private int review_rating;
	
}
