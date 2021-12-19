SET foreign_key_checks = 0;
CREATE DATABASE IF NOT EXISTS geekware;
USE geekware;
DROP TABLE IF EXISTS products;
CREATE TABLE `products` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` CHAR(50) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `price` DOUBLE(8 , 2 ) NOT NULL,
    `discount` INT (2) UNSIGNED NOT NULL,
    `image` CHAR(255) NOT NULL,
    `category_id` INT UNSIGNED NOT NULL
);
DROP TABLE IF EXISTS users;
CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `surname` VARCHAR(50) NOT NULL,
    `mail` VARCHAR(50) NOT NULL,
    `gender` VARCHAR(50) NOT NULL,
    `avatar` CHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL
);
DROP TABLE IF EXISTS orders;
CREATE TABLE `orders`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `total_price` DOUBLE(8, 2) NOT NULL,
    `payment_date` DATE NOT NULL,
    `user_id` INT UNSIGNED NOT NULL
);
DROP TABLE IF EXISTS categories;
CREATE TABLE `categories`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` INT NOT NULL
);
DROP TABLE IF EXISTS payment_methods;
CREATE TABLE `payment_methods`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `credit_card` CHAR(80) NOT NULL,
    `bank_account` CHAR(80) NOT NULL,
    `user_id` INT UNSIGNED NOT NULL
);
DROP TABLE IF EXISTS wishlist;
CREATE TABLE `wishlist`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT UNSIGNED NOT  NULL ,
    `product_id` INT UNSIGNED NOT NULL
);
DROP TABLE IF EXISTS order_datails;
CREATE TABLE `order_datails`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `amount` INT UNSIGNED NOT NULL,
    `product_id` INT UNSIGNED NOT NULL,
    `order_id` INT UNSIGNED NOT NULL
);


ALTER TABLE
    `order_datails` ADD CONSTRAINT `order_datails_id_orders_foreign` FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`);
ALTER TABLE
    `orders` ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `products` ADD CONSTRAINT `products_id_category_foreign` FOREIGN KEY(`category_id`) REFERENCES `categories`(`id`);
ALTER TABLE
    `payment_methods` ADD CONSTRAINT `payment_methods_id_user_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `wishlist` ADD CONSTRAINT `wishlist_id_user_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `wishlist` ADD CONSTRAINT `wishlist_id_product_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
ALTER TABLE
    `order_datails` ADD CONSTRAINT `order_datails_id_products_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
SET foreign_key_checks = 1;