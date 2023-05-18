-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-05-2023 a las 12:10:02
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `musiqueria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `carts`:
--   `product_id`
--       `products` -> `product_id`
--   `user_id`
--       `users` -> `user_id`
--

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`cart_id`, `user_id`, `product_id`, `quantity`) VALUES
(1, 1, 1, 1),
(2, 2, 2, 1),
(3, 3, 1, 2),
(4, 9, 5, 1),
(5, 9, 1, 1),
(6, 3, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `categories`:
--

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`category_id`, `name`) VALUES
(1, 'Instrumentos'),
(2, 'Accesorios'),
(3, 'Sonido');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `stock` int(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `colors` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `productImg` varchar(255) NOT NULL,
  `createdDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `products`:
--   `subcategory_id`
--       `subcategories` -> `subcategory_id`
--

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `name`, `subcategory_id`, `stock`, `description`, `colors`, `price`, `brand`, `productImg`, `createdDate`) VALUES
(1, 'Guitarra elèctrica', 1, 5, 'Guitarra electrica, Les Paul', 'Rojo', '15320', 'Gibson', 'guitarra.jpg', '2005-07-23'),
(2, 'Parlantes', 2, 4, 'Parlantes', 'Azul', '12490', 'Edifer', 'parlantes.jpg', '2005-07-23'),
(3, 'Bajo acústico', 1, 3, 'bajo cort ', 'rojo', '23555', 'cort', 'bajo.jpg', '0000-00-00'),
(5, 'Bateria', 1, 7, 'Bateria artesanl', 'Brillante', '23555', 'Tama', 'bata.jpg', '0000-00-00'),
(8, 'Amplificador', 2, 4, 'Amplificador', 'Negro', '54789', 'Marshal', 'ampli.jpg', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salesdetails`
--

CREATE TABLE `salesdetails` (
  `salesdetail_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `salesheader_id` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `salesdetails`:
--   `salesheader_id`
--       `salesheaders` -> `salesheader_id`
--   `product_id`
--       `products` -> `product_id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salesheaders`
--

CREATE TABLE `salesheaders` (
  `salesheader_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `dateSale` date NOT NULL,
  `total` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `salesheaders`:
--   `user_id`
--       `users` -> `user_id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategories`
--

CREATE TABLE `subcategories` (
  `subcategory_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `subcategories`:
--   `category_id`
--       `categories` -> `category_id`
--

--
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO `subcategories` (`subcategory_id`, `name`, `category_id`) VALUES
(1, 'Guitarra', 1),
(2, 'Parlantes', 3),
(3, 'Púas', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `profile` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `users`:
--

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `avatar`, `profile`) VALUES
(1, 'Diego', 'diego@gmail.com', '123456', 'diego.jpg', 'Administrador'),
(2, 'Fanku', 'facunoya@hotmail.com', '123456', 'Facu.jpg', 'Administrador'),
(3, 'Agostina', 'agos@gmail.com', '123456', 'Agos.jpg', 'Administrador'),
(9, 'Nina', 'snoya1987@gmail.com', '123456', 'algo.jpg', 'Usuario'),
(20, 'Nina', 'nina@gmail.com', '123456', 'algo.jpg', 'Administrador'),
(21, 'Lin', 'lin@gmail.com', '123456', 'algo.jpg', 'Administrador'),
(22, 'Merlina', 'merli@gmail.com', '123456', 'algo.jpg', 'Administrador'),
(23, 'Fanku 87', 'fanku@gmail.com', '123456', 'algo.jpg', ''),
(24, 'Luis', 'nuez@gmail.com', '123456', 'algo.jpg', 'Administrador'),
(25, 'Maxi', 'maxi@gmail.com', '123456', 'algo.jpg', 'Administrador'),
(28, 'Luna', 'lunita@gmail.com', '123456', 'luna.jpg', 'Administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `fk_productos` (`product_id`),
  ADD KEY `fk_usuarios` (`user_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `fk_subcategoria` (`subcategory_id`);

--
-- Indices de la tabla `salesdetails`
--
ALTER TABLE `salesdetails`
  ADD PRIMARY KEY (`salesdetail_id`),
  ADD KEY `fk_salesproducts` (`product_id`),
  ADD KEY `fk_salesheaders` (`salesheader_id`);

--
-- Indices de la tabla `salesheaders`
--
ALTER TABLE `salesheaders`
  ADD PRIMARY KEY (`salesheader_id`),
  ADD KEY `fk_salesuser` (`user_id`);

--
-- Indices de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`subcategory_id`),
  ADD KEY `fk_categoria` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `salesdetails`
--
ALTER TABLE `salesdetails`
  MODIFY `salesdetail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `salesheaders`
--
ALTER TABLE `salesheaders`
  MODIFY `salesheader_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `subcategory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `fk_productos` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `fk_usuarios` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_subcategoria` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`subcategory_id`);

--
-- Filtros para la tabla `salesdetails`
--
ALTER TABLE `salesdetails`
  ADD CONSTRAINT `fk_salesheaders` FOREIGN KEY (`salesheader_id`) REFERENCES `salesheaders` (`salesheader_id`),
  ADD CONSTRAINT `fk_salesproducts` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Filtros para la tabla `salesheaders`
--
ALTER TABLE `salesheaders`
  ADD CONSTRAINT `fk_salesuser` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Filtros para la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
