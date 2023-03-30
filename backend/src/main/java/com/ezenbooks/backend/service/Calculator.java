package com.ezenbooks.backend.service;

public class Calculator {

	public double cosine(double[][] u, int j, int k, int m) {
		double denominator = norm(u, j, m) * norm(u, k, m);
		return (denominator == 0 ? 0 : dot(u, j, k, m) / denominator);
	}
	
	public double dot(double[][] u, int j, int k, int m) {
		double sum = 0.0;
		for (int i = 0; i <= m; i++) {
			sum += u[i][j] * u[i][k];
		}
		return sum;
	}
	
	public double norm(double[][] u,int j, int m) {
		return Math.sqrt(dot(u, j, j, m));
	}
	
}
