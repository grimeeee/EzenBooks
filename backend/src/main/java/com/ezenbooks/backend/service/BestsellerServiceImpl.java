package com.ezenbooks.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ezenbooks.backend.dao.BestsellerDAO;
import com.ezenbooks.backend.dto.BestsellerDTO;
import com.ezenbooks.backend.dto.BookDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BestsellerServiceImpl implements BestsellerService {
	
	private final BestsellerDAO dao;

	@Override
	public List<BookDTO> bestsellerProcess(BestsellerDTO dto) {
		
		return dao.getBestsellerList(dto);
	}

	@Override
	public List<BookDTO> newBooksListProcess(Integer category_code) {
		
		return dao.getNewBooksList(category_code);
	}

}
