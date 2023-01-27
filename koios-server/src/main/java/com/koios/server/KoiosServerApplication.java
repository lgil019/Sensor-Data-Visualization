package com.koios.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KoiosServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(KoiosServerApplication.class, args);
		System.out.println("Hello Spring");
	}

}
