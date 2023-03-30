package com.ezenbooks.backend.service;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.ezenbooks.backend.pay.OrderForm;
import com.ezenbooks.backend.pay.UserOrder;
import com.ezenbooks.backend.pay.UserOrderDetail;
import com.ezenbooks.backend.repository.ItemRepository;
import com.ezenbooks.backend.repository.OrderRepository;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;

    /**
     * 상품 생성
     * 주문 폼 작성시 상품 생성
     */
    public UserOrderDetail createItem(OrderForm form, UserOrder order) {
    	UserOrderDetail orderitem = UserOrderDetail.builder()
                .books_book_num(form.getBooks_book_num())
                .book_price(form.getPrice())
                .book_count(form.getBook_count())
                .order_num(order.getId())
                .build();
        return itemRepository.save(orderitem);
    }

    /**
     * 주문 생성
     * @param form 주문 폼
     */
    public UserOrder createOrder(OrderForm form) {
    	UserOrderDetail orderitem = null;
    	UserOrder order = UserOrder.createOrder(orderitem, form.getUser_id());
        return orderRepository.save(order);
    }

    /**
     * 주문 삭제
     * @param id order_num
     */
    public void deleteOrder(Long order_num) {
    	orderRepository.deleteById(order_num);
    }

    /**
     * 주문 실패 로그
     * @param id order id
     */
    @Transactional
    public void failOrder(Long order_num) {
        orderRepository.deleteById(order_num);
    }


    /**
     * 주문 정상 완료
     * @param id order id
     */
    @Transactional
    public void completeOrder(Long id) {
        UserOrder order = orderRepository.findById(id).orElseThrow();
        order.completeOrder();
    }

    /**
     * 주문 찾기
     */
    @Transactional(readOnly = true)
    public UserOrder findOrder(Long id) {
        return orderRepository.findById(id).orElseThrow();
    }

}
