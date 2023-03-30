package com.ezenbooks.backend.dto;

import java.sql.Date;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class ReviewDTO {
	private int review_num;
	private int user_id;
	private int book_num;
	private String review_content;
	private int review_rating;
	private String review_writer;
	private Date review_reporting_date;
}
