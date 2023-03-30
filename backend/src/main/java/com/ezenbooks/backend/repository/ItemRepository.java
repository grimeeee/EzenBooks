package com.ezenbooks.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ezenbooks.backend.pay.UserOrderDetail;

@Repository
public interface ItemRepository extends JpaRepository<UserOrderDetail, Long> {


}
