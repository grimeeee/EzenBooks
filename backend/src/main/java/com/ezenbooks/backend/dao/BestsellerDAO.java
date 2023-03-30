package com.ezenbooks.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.ezenbooks.backend.dto.BestsellerDTO;
import com.ezenbooks.backend.dto.BookDTO;

@Mapper
@Repository
public interface BestsellerDAO {
	
	public List<BookDTO> getBestsellerList(BestsellerDTO dto);
	
	public List<BookDTO> getNewBooksList(Integer category_code);
	
}
