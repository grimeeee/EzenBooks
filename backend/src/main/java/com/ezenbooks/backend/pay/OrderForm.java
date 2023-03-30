package com.ezenbooks.backend.pay;

import lombok.*;


@Data
public class OrderForm {
    private Long books_book_num;
    private Long user_id;
    private int price;
    private int book_count;

    @Builder
    public OrderForm(Long books_book_num, int price, int book_count, UserOrder Order_num, Long user_id) {
        this.books_book_num = books_book_num;
        this.user_id = user_id;
        this.price = price;
        this.book_count = book_count;
    }

}