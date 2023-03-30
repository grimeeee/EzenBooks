package com.ezenbooks.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BestsellerDTO {
	
	private int category_code;
	private String start_date;
	private String end_date;

}
