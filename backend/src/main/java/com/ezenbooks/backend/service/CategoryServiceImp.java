package com.ezenbooks.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ezenbooks.backend.dao.CategoryDAO;
import com.ezenbooks.backend.dto.CategoryDTO;

@Service
public class CategoryServiceImp implements CategoryService {
	
	@Autowired //BookServiceImp 생성시 자동으로 BookDAO와 연결이 된다. 
	//따로 setter 부분을 만들지 않아도 됨
	private CategoryDAO categoryDAO;
	
	public CategoryServiceImp() {
	}
	
	@Override
	public List<CategoryDTO> bookCategory() throws Exception {

		return categoryDAO.getCategoryList();
	}

}
