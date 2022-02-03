-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: geekware
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cpus'),(2,'Motherboards'),(3,'Placas de Video'),(4,'Memorias Ram'),(5,'Fuentes'),(6,'Perifericos'),(7,'Accesorios');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_datails`
--

DROP TABLE IF EXISTS `order_datails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_datails` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `amount` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `order_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_datails_id_orders_foreign` (`order_id`),
  KEY `order_datails_id_products_foreign` (`product_id`),
  CONSTRAINT `order_datails_id_orders_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_datails_id_products_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_datails`
--

LOCK TABLES `order_datails` WRITE;
/*!40000 ALTER TABLE `order_datails` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_datails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `total_price` double(8,2) NOT NULL,
  `payment_date` date NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign` (`user_id`),
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_methods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `credit_card` char(80) NOT NULL,
  `bank_account` char(80) NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_methods_id_user_foreign` (`user_id`),
  CONSTRAINT `payment_methods_id_user_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL,
  `name` char(50) NOT NULL,
  `description` longtext NOT NULL,
  `price` double(8,2) NOT NULL,
  `discount` int(2) unsigned NOT NULL,
  `image` char(255) NOT NULL,
  `image_url` char(255) NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `apiProduct` char(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id_category_foreign` (`category_id`),
  CONSTRAINT `products_id_category_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (153288613,'HyperX fury 16 gb','Memoria rap desarrollada por Kingston de la mano de HyperX, cuenta con 16 gb. Es perfecta para los gamers.',1000.00,25,'1643844630734.webp','http://localhost:4000/img/products/1643844630734.webp',4,'http://localhost:4000/api/products/153288613','2022-02-02 23:30:31'),(178611125,'Mouse Logitech g203','Logitech G203 es un avanzado ratón gaming dentro de la serie Prodigy del fabricante, se trata de un modelo orientado a ofrecer unas muy buenas características y prestaciones a un precio bastante ajustado. Presenta un diseño de tamaño reducido con unas medidas de 116 mm x 62 mm x 38 mm y un peso de 85 gramos.',3500.00,0,'1643846308687.jpeg','http://localhost:4000/img/products/1643846187031.jpg',6,'http://localhost:4000/api/products/178611125','2022-02-02 23:56:27'),(554205664,'Corsair Vengeance 8gb','Memoria ram Corsair Vengeance de 8gb, de las mejores del mercado en calidad-precio',550.00,45,'1643844360196.jpg','http://localhost:4000/img/products/1643844360196.jpg',4,'http://localhost:4000/api/products/554205664','2022-02-02 23:26:00'),(681146475,'NVIDIA RTX 3090','La GeForce RTX™ 3090 es increíblemente potente en todas las formas, por lo que te brinda un nivel de rendimiento completamente nuevo. Está impulsada por Ampere, la arquitectura de segunda generación de NVIDIA RTX, que duplica el rendimiento de IA y de ray tracing gracias a los Núcleos RT y Núcleos Tensor mejorados y los nuevos multiprocesadores de transmisión. Además, cuenta con 24 GB de memoria G6X para brindar la experiencia de juego definitiva.',750000.00,10,'1643845479335.jpg','http://localhost:4000/img/products/1643845479335.jpg',3,'http://localhost:4000/api/products/681146475','2022-02-02 23:44:39'),(793301332,'Z590I AORUS Ultra.','GIGABYTE Z590I AORUS ULTRA ITX s1200 DDR4 (11va gen). Con un diseño de vanguardia, excelente funcionalidad, un diseño térmico impresionante, conectividad de próxima generación, un sistema de audio de nivel Hi-Fi y la estética AORUS, la Motherboard insignia Z590I AORUS ULTRA domina la competencia.',63520.00,0,'1643845126733.jpg','http://localhost:4000/img/products/1643845126733.jpg',2,'http://localhost:4000/api/products/793301332','2022-02-02 23:38:47'),(847088722,'MSI Z390-A pro','Compatible con procesadores Intel Core / Pentium Gold / Celeron de 9ª generación i9-9900K, i5-9600K y 8ª generación para enchufe LGA 1151. Soporta memoria DDR4 de doble canal, hasta 4400 (oc) MHz\r\nTurbo M.2: interfaz PCI-E gen3 x4 maximiza el rendimiento para SSD NVME',14322.00,28,'1643845238914.jpg','http://localhost:4000/img/products/1643845238914.jpg',2,'http://localhost:4000/api/products/847088722','2022-02-02 23:40:39'),(873988376,'AMD Ryzen 9 3950x','Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.',95000.00,5,'1643844946911.webp','http://localhost:4000/img/products/1643844946911.webp',1,'http://localhost:4000/api/products/873988376','2022-02-02 23:35:47'),(885128284,'MSI Geforce 210','El procesamiento de gráficos se ha convertido en un ingrediente esencial de los PCs modernos. Por eso, todos pedimos más al ordenador. Si quieres editar fotos y vídeos de forma más cómoda, ver películas con alta calidad de imagen, ejecutar los últimos juegos o simplemente disfrutar de las mejores funciones de Windows 7, la tarjeta gráfica de MSI, Nvidia GeForce 210 introduce en el PC una capacidad de procesamiento gráfico impresionante a un precio increíble.',8550.00,0,'1643845719479.jpg','http://localhost:4000/img/products/1643845719479.jpg',3,'http://localhost:4000/api/products/885128284','2022-02-02 23:48:39'),(1402132123,'Alienware aurora g5','Alienware Aurora permite opciones de gráficos de código rígido en un chasis compacto pero muy expandible para computadora de torre mediana. Muchos jugadores exigen gráficos de código rígido y rendimiento de GPU para aumentar la calidad 3D y la inmersión en juegos de alta definición.',8900.00,10,'1643846571286.jpg','http://localhost:4000/img/products/1643846571286.jpg',7,'http://localhost:4000/api/products/1402132123','2022-02-03 00:02:51'),(1835491042,'NOX NX 750W ATX','NX Series convierte el poder más extremo en un flujo de energía estable gracias, entre otras cosas, a su PFC activo. Incluye un ventilador de aspas rojas que ajusta su velocidad según la temperatura del interior de la fuente y es compatible con sistemas multi-gpu com SLI y Crossfire.',15000.00,12,'1643845901146.jpg','http://localhost:4000/img/products/1643845901146.jpg',5,'http://localhost:4000/api/products/1835491042','2022-02-02 23:51:41'),(2976808241,'Intel Core I9-9900K','CPU Intel Core I9-9900K, actualmente lo mejor que hay en todo el mercado de cpus. ideal para toda la persona que quiera maximizar su pc y llevarla a otro nivel.',100000.00,0,'1643846762901.jpg','http://localhost:4000/img/products/1643844787481.jpg',1,'http://localhost:4000/api/products/2976808241','2022-02-02 23:33:07'),(3178785225,'NOX Urano VX 750W','Las fuentes Urano VX 750W incorporan un ventilador de 140 mm con PWM, que adaptará su funcionamiento en función de la carga que demande el PC en cada momento, evitando el calentamiento de la fuente y en consecuencia del resto de componentes del equipo.',9000.00,20,'1643846051982.jpg','http://localhost:4000/img/products/1643846051982.jpg',5,'http://localhost:4000/api/products/3178785225','2022-02-02 23:54:12'),(3229748269,'Bungee v3 Razer','Mantenedles tu setup limpio y comodo. con este innovador producto nunca mas volverás a sentir tirones al mover el mouse.',1900.00,5,'1643846459847.jpg','http://localhost:4000/img/products/1643846459847.jpg',7,'http://localhost:4000/api/products/3229748269','2022-02-03 00:01:00'),(3707912916,'Mouse Logitech g203','Logitech G203 es un avanzado ratón gaming dentro de la serie Prodigy del fabricante, se trata de un modelo orientado a ofrecer unas muy buenas características y prestaciones a un precio bastante ajustado. Presenta un diseño de tamaño reducido con unas medidas de 116 mm x 62 mm x 38 mm y un peso de 85 gramos.',3150.00,10,'1643846271869.jpg','http://localhost:4000/img/products/1643846225300.png',6,'http://localhost:4000/api/products/3707912916','2022-02-02 23:57:05');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `avatar` char(255) NOT NULL,
  `password` char(255) NOT NULL,
  `apiUser` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wishlist_id_user_foreign` (`user_id`),
  KEY `wishlist_id_product_foreign` (`product_id`),
  CONSTRAINT `wishlist_id_product_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `wishlist_id_user_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-02 21:06:32
