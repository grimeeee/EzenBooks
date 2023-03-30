package com.ezenbooks.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ezenbooks.backend.dto.CategoryDTO;

@Service
public interface CategoryService {
	
	public List<CategoryDTO> bookCategory() throws Exception;

}
