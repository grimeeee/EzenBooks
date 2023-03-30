package com.ezenbooks.backend.pay;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import org.hibernate.annotations.Comment;
import org.hibernate.mapping.List;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@Entity
@Table(name = "user_order")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SequenceGenerator(
        name = "USER_ORDER_SEQ_GEN",
        sequenceName = "USER_ORDER_ORDER_NUM_SEQ",
        initialValue = 1,
        allocationSize = 1)


public class UserOrder {
    @Id 
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="USER_ORDER_SEQ_GEN")
    @Column(name = "order_num")
    private Long id;
    private Long user_id;
    private String order_date;
	
    @Enumerated(value = EnumType.STRING)
    private OrderStatus orderStatus;
    

	@Comment("우편번호")
	private String address1;
	
	@Comment("주소")
	private String address2;
	
	@Comment("상세주소")
	private String address3;
	
	


    @Builder
    private UserOrder(Long user_id, UserOrderDetail item, String address1, String address2, String address3) {
        this.user_id = user_id;
        this.order_date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
        this.address1 = address1;
        this.address2 = address2;
        this.address3 = address3;	
        this.orderStatus = OrderStatus.ORDER;
    }

    /**
     * 주문 생성
     * @return Order entity
     */
    public static UserOrder createOrder(UserOrderDetail orderitem, Long user_id) {
        return UserOrder.builder()
                .item(orderitem)
                .user_id(user_id)
                .build();
    }

    /**
     * 주문 정상적으로 완료
     */
    public void completeOrder() {
        this.orderStatus = OrderStatus.COMP;
    }

    /**
     * 주문 실패
     */
    public void failOrder() {
        this.orderStatus = OrderStatus.FAIL;
    }




}
