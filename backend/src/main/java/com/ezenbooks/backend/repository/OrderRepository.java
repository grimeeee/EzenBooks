package com.ezenbooks.backend.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ezenbooks.backend.pay.UserOrder;




@Repository
public interface OrderRepository extends JpaRepository<UserOrder, Long>  {
	
	
}

