package com.ezenbooks.backend.service;

import java.util.List;

import com.ezenbooks.backend.dto.BestsellerDTO;
import com.ezenbooks.backend.dto.BookDTO;

public interface BestsellerService {
	
	public List<BookDTO> bestsellerProcess(BestsellerDTO dto);
	
	public List<BookDTO> newBooksListProcess(Integer category_code);

}
