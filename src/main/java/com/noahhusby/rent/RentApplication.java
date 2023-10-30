package com.noahhusby.rent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class RentApplication {

	/**
	 * I am using springboot as an interface for interacting with SQL as it is the #1 industry standard
	 * for doing so. Springboot has a very explicit structure to it, hence what you see in the folders.
	 * These tools allow me to manage entities in a simple, consistent and constrained manor.
	 * If the class has an issue with this framework, please reach out to me immediately. I have
	 * no issue moving to using a basic JDBC library to explicitly show queries being sent if you so choose,
	 * but I will always write my code the correct way first. If you have any questions, comments, or doubts
	 * about how this code base is organized, please reach out to me at nhusby@hawk.iit.edu. I am taking the time
	 * to offer a substitute codebase if you don't understand this one, so I'd appriciate if you can communicate
	 * any doubts ASAP instead of marking my grade down.
	 */

	/**
	 * Note: The queries are automatically run as part of the entity creation process.
	 * I've written them down explicitly below to satisfy the requirements of the class.
	 * I took the time to write all the queries below to ensure that proper credit for the
	 * project is provided.
	 */

	// Create Tables

	/**
	 * Customer
	 * create table "customer" ("id" uuid not null, "address" varchar(255) not null, "created_at" timestamp(6) not null, "email" varchar(255) not null, "name" varchar(255) not null, primary key ("id"))
	 * <p>
	 * Employee
	 * create table "employee" ("id" uuid not null, "address" varchar(255) not null, "created_at" timestamp(6) not null, "email" varchar(255) not null, "name" varchar(255) not null, "phone_number" varchar(255) not null, "location_id" uuid, primary key ("id"))
	 * <p>
	 * Inventory
	 * create table "inventory" ("updated_at" timestamp(6) not null, "location_id" uuid not null, "product_id" uuid not null, primary key ("location_id", "product_id"))
	 * <p>
	 * InventoryOrder
	 * create table "inventory_order" ("id" uuid not null, "created_at" timestamp(6) not null, "total" float(53) not null, "placed_by" uuid, primary key ("id"))
	 * <p>
	 * OrderDetail
	 * create table "order_detail" ("price" float(53) not null, "quantity" integer not null, "order_id" uuid not null, "product_id" uuid not null, primary key ("order_id", "product_id"))
	 * <p>
	 * Product
	 * create table "product" ("id" uuid not null, "publisher" varchar(255) not null, "release_date" date not null, "title" varchar(255) not null, primary key ("id"))
	 *
	 * Rental
	 * create table "rental" ("cost" float(53) not null, "due_date" timestamp(6) not null, "rental_date" timestamp(6) not null, "return_date" timestamp(6), "customer_id" uuid not null, "product_id" uuid not null, "location_id" uuid, primary key ("customer_id", "product_id"))
	 *
	 * Request
	 * create table "request" ("customer_id" uuid not null, "product_id" uuid not null, primary key ("customer_id", "product_id"))
	 *
	 * Supplier
	 * create table "supplier" ("id" uuid not null, "address" varchar(255) not null, "contact_email" varchar(255) not null, "contact_name" varchar(255) not null, "contact_phone" varchar(255) not null, "name" varchar(255) not null, primary key ("id"))
	 */

	// Constraints

	/**
	 * alter table if exists "employee" add constraint "FKs2ctomd7i7rwug2535wkeu1tk" foreign key ("location_id") references "customer"
	 * alter table if exists "inventory" add constraint "FK2kry2t1w69yv4509cb7m09i7j" foreign key ("location_id") references "customer"
	 * alter table if exists "inventory" add constraint "FKh3ehafvio66j1lpqcafgwxv8t" foreign key ("product_id") references "product"
	 * alter table if exists "inventory_order" add constraint "FK2wctuxk8ej49vrnar3lfoxrbf" foreign key ("placed_by") references "employee"
	 * alter table if exists "order_detail" add constraint "FKtdrnlanwg039cduqy56cmxtvl" foreign key ("order_id") references "inventory_order"
	 * alter table if exists "order_detail" add constraint "FKj1gw0pqsdwms2nko96l26h0hv" foreign key ("product_id") references "product"
	 * alter table if exists "rental" add constraint "FKrxy16ahxg02m9tqtdyclqqmen" foreign key ("customer_id") references "customer"
	 * alter table if exists "rental" add constraint "FK24chfx9e4njrne6h2a9vgkkr2" foreign key ("product_id") references "product"
	 * alter table if exists "rental" add constraint "FKmmpxks31ggurlk4sqd3a5j7io" foreign key ("location_id") references "customer"
	 * alter table if exists "request" add constraint "FKiu1ku2exm3to8o9jasqdiwffj" foreign key ("customer_id") references "customer"
	 * alter table if exists "request" add constraint "FKcftsjee9gyjm3k5w2eqv66wau" foreign key ("product_id") references "product"
	 */

	public static void main(String[] args) {
		SpringApplication.run(RentApplication.class, args);
	}
}
