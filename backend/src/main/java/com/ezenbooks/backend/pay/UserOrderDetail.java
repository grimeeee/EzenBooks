package com.ezenbooks.backend.pay;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "user_order_detail")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
public class UserOrderDetail {
    @Id
    @GeneratedValue
    @Column(name = "order_detail_num")
    private Long id;
    private int book_count;
    public int book_price;
    private String order_detail_status;
    private Long books_book_num;
    private Long order_num;

    
    
    @Builder
    public UserOrderDetail(Long order_num, int book_count, int book_price, String order_detail_status , Long books_book_num) {
        this.order_num = order_num;
        this.book_count = book_count;
        this.book_price = book_price;
        this.order_detail_status = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yy/MM/dd"));
        this.books_book_num = books_book_num;
        
        
        
        
    }
    
   
}
