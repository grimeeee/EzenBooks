package com.ezenbooks.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ezenbooks.backend.dto.CategoryDTO;
import com.ezenbooks.backend.service.CategoryService;

@CrossOrigin("*") //포트번호에 관계없이 응답을 허가해주는 어노테이션
//@CrossOrigin(origins = {"http://localhost:3000"}) //특정 url에만 허가하는 방법
@RestController //= @Controller + @ResponseBody
//@Controller
public class CategoryController {
	 
	@Autowired
	private CategoryService categoryService;
	
	public CategoryController() {}
	
	@GetMapping("/categorydata")
	public List<CategoryDTO> getCategoryList() throws Exception {
	return categoryService.bookCategory();
	}

}
