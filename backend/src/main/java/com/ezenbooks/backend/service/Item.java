package com.ezenbooks.backend.service;

import java.util.Comparator;

import lombok.AllArgsConstructor;
import lombok.ToString;

/*
 * comparator 를 이용한 인기도 순 정렬
 */

@ToString
@AllArgsConstructor
public class Item {
	
	int index;
	int bought;
	double[][] s;
	double[][] u;
	int NUM_USERS;
	
	public Item(int index) {
		this.index = index;
	}
	
	public Item(int index, double[][] s, double[][] u, int NUM_USERS) {
		this.index = index;
		this.s = s;
		this.u = u;
		this.NUM_USERS = NUM_USERS;
	}
	
	public double popularity() {
		double sum = 0;
		for (int i = 1; i <= NUM_USERS; i++) {
			sum += u[i][this.index];
		}
		return sum;
	}
	
	public double similarity(Item item) {
		return s[this.index][item.index];
	}
	
	public class PopularityComparator implements Comparator<Item> {

		@Override
		public int compare(Item item1, Item item2) {
			double p1 = item1.popularity();
			double p2 = item2.popularity();
			
			return (p1 > p2 ? -1 : 1);
		}
		
	}
	
	public class SimilarityComparator implements Comparator<Item> {

		@Override
		public int compare(Item item1, Item item2) {
			double s1 = Item.this.similarity(item1);
			double s2 =  Item.this.similarity(item2);
			
			return (s1 > s2 ? -1 : 1);
		}
		
	}
	
}
