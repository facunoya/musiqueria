-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2023 a las 22:01:41
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
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`cart_id`, `user_id`, `product_id`, `quantity`) VALUES
(1, 1, 1, 4),
(3, 3, 1, 2),
(32, 1, 2, 1),
(33, 1, 3, 1),
(34, 21, 5, 2),
(41, 21, 8, 1),
(42, 21, 3, 1),
(51, 28, 1, 1),
(52, 28, 2, 2),
(53, 23, 2, 1),
(54, 20, 5, 1),
(55, 23, 8, 1),
(56, 3, 5, 1),
(81, 30, 1, 1),
(90, 20, 1, 1),
(91, 20, 10, 1),
(95, 32, 2, 1),
(96, 32, 10, 1),
(120, 33, 1, 7),
(121, 33, 5, 4),
(122, 33, 8, 1),
(129, 25, 5, 5),
(130, 25, 8, 3),
(131, 25, 3, 1),
(132, 25, 10, 1),
(135, 24, 5, 2),
(136, 24, 1, 3),
(139, 22, 5, 2),
(140, 22, 3, 2),
(141, 22, 2, 4),
(142, 34, 1, 1),
(143, 34, 11, 5),
(144, 31, 1, 3),
(146, 35, 8, 1),
(147, 22, 1, 12),
(148, 22, 10, 6),
(149, 22, 11, 5),
(150, 1, 10, 3),
(153, 36, 11, 1),
(154, 36, 2, 1),
(155, 36, 1, 1),
(157, 29, 11, 4),
(159, 21, 21, 1),
(161, 39, 5, 1),
(162, 39, 18, 2),
(163, 39, 21, 1),
(165, 40, 5, 1),
(166, 40, 18, 2),
(167, 40, 21, 1),
(169, 25, 1, 10),
(171, 2, 1, 37),
(174, 25, 2, 24),
(176, 9, 5, 2),
(177, 3, 11, 2),
(178, 3, 10, 1),
(179, 22, 8, 1),
(180, 22, 21, 5),
(181, 41, 3, 1),
(187, 42, 3, 4),
(189, 43, 1, 2),
(190, 43, 2, 1),
(191, 44, 3, 2),
(192, 44, 10, 1),
(193, 44, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
  `offer` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `productImg` varchar(255) NOT NULL,
  `createdDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `name`, `subcategory_id`, `stock`, `description`, `colors`, `price`, `offer`, `brand`, `productImg`, `createdDate`) VALUES
(1, 'Guitarra', 1, 48, 'Guitarra', 'Azul', '25000', 15, 'Gibson', 'img-1689114413463.jpg', '2005-07-23'),
(2, 'Parlantes', 2, 38, 'Parlantes Edifier M201bt Audio 2.1 -subwooferbluetooth 5.0', 'Azul', '12490', 0, 'Edifer', 'img-1685750412885.webp', '2005-07-23'),
(3, 'Bajo', 1, 22, 'Bajo eléctrico de 4 cuerdas - Activo. Electrónica: 2 pastillas Powersound PSEB4-4/F y PSEB1-4/R', 'Rojo', '23555', 0, 'Cort', 'img-1685310362172.jpg', '0000-00-00'),
(5, 'Bateria', 1, 33, 'Una batería innovadora con un tono brillante y expansivo', 'Rojo', '23555', 0, 'Tama', 'img-1685310272930.png', '0000-00-00'),
(8, 'Amplificador', 2, 48, 'Amplificador Guitarra Eléctrica Marshall Gold Mg15g 15w', 'Negro', '54789', 20, 'Marshal', 'img-1685310401825.jpg', '0000-00-00'),
(10, 'Auriculares', 2, 35, 'Auriculares Ovansu 2.5mts de cable', 'Azul', '7000', 0, 'Ovansu', 'img-1685310542983.jpg', '0000-00-00'),
(11, 'Piano', 1, 10, 'Piano Medeli Modelo Sp4000', 'Negro', '54789', 20, 'Medeli', 'img-1685413087146.jpg', '0000-00-00'),
(18, 'Palillos', 1, 13, 'La linea STD de Sambys madera Guatambú es un palillo versatil para bateristas', 'Marrón', '1500', 0, 'Sam Bys', 'img-1688002785539.webp', '0000-00-00'),
(20, 'Puas', 3, 93, 'Distintas varidiedades inculye 20 unidades por compra', 'Todos', '100', 15, 'Stone', 'img-1688003016067.webp', '0000-00-00'),
(21, 'Banco para bateria', 3, 7, 'Asiento para Baterista DS550 Yamaha Asiento redondo Ajuste de la altura del tornillo', 'Negro', '1500', 0, 'Yamaha', 'img-1688075494003.jpg', '0000-00-00');

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
-- Volcado de datos para la tabla `salesdetails`
--

INSERT INTO `salesdetails` (`salesdetail_id`, `product_id`, `salesheader_id`, `price`, `quantity`) VALUES
(1, 5, 8, '23555', 1),
(2, 5, 9, '23555', 2),
(3, 5, 10, '47110', 2),
(4, 5, 11, '23555', 1),
(5, 1, 12, '30640', 2),
(6, 1, 13, '15000', 1),
(7, 1, 14, '15000', 1),
(8, 1, 15, '15000', 1),
(9, 1, 16, '15000', 1),
(10, 1, 17, '15000', 1),
(11, 3, 18, '23555', 1),
(12, 1, 19, '15000', 1),
(13, 3, 22, '23555', 1),
(14, 5, 22, '23555', 1),
(15, 1, 22, '15000', 1),
(16, 1, 23, '15000', 1),
(17, 2, 23, '12490', 1),
(18, 5, 23, '23555', 1),
(19, 1, 24, '15000', 1),
(20, 2, 24, '12490', 1),
(21, 3, 24, '23555', 1),
(22, 1, 25, '25000', 1),
(23, 3, 25, '23555', 1),
(24, 3, 26, '23555', 1),
(25, 5, 26, '23555', 1),
(26, 5, 27, '23555', 1),
(27, 8, 28, '54789', 1),
(28, 3, 29, '47110', 2),
(29, 1, 30, '50000', 2),
(30, 1, 31, '50000', 2),
(31, 1, 32, '75000', 3),
(32, 1, 33, '50000', 2),
(33, 5, 33, '23555', 1),
(34, 2, 34, '12490', 1),
(35, 5, 35, '47110', 2),
(36, 2, 36, '12490', 1),
(37, 8, 37, '54789', 1),
(38, 5, 37, '47110', 2),
(39, 5, 38, '23555', 1),
(40, 1, 39, '25000', 1),
(41, 10, 40, '7000', 1),
(42, 2, 41, '12490', 1),
(43, 5, 42, '23555', 1),
(44, 10, 42, '7000', 1),
(45, 3, 42, '23555', 1),
(46, 1, 42, '75000', 3),
(47, 1, 43, '25000', 1),
(48, 11, 44, '54789', 1),
(49, 10, 45, '7000', 1),
(50, 10, 46, '7000', 1),
(51, 11, 46, '54789', 1),
(52, 1, 47, '50000', 2),
(53, 3, 48, '23555', 1),
(54, 5, 49, '23555', 1),
(55, 1, 50, '350000', 14),
(56, 1, 51, '75000', 3),
(57, 1, 52, '75000', 3),
(58, 1, 53, '25000', 1),
(59, 3, 54, '259105', 11),
(60, 2, 55, '12490', 1),
(61, 1, 56, '25000', 1),
(62, 1, 57, '575000', 23),
(63, 1, 58, '25000', 1),
(64, 1, 59, '575000', 23),
(65, 1, 60, '2050000', 82),
(66, 1, 61, '400000', 16),
(67, 1, 62, '375000', 15),
(68, 1, 63, '150000', 6),
(69, 1, 64, '50000', 2),
(70, 3, 65, '23555', 1),
(71, 1, 66, '75000', 3),
(72, 2, 66, '12490', 1),
(73, 2, 66, '12490', 1),
(74, 1, 66, '50000', 2),
(75, 1, 66, '75000', 3),
(76, 5, 66, '23555', 1),
(77, 1, 67, '50000', 2),
(78, 1, 69, '50000', 2),
(79, 8, 70, '54789', 1),
(80, 2, 71, '37470', 3),
(81, 5, 72, '47110', 2),
(82, 8, 73, '54789', 1),
(83, 2, 74, '49960', 4),
(84, 8, 75, '767046', 14),
(85, 1, 76, '250000', 10),
(86, 20, 76, '200', 2),
(87, 18, 77, '4500', 3),
(88, 11, 78, '164367', 3),
(89, 8, 79, '54789', 1),
(90, 20, 80, '500', 5),
(91, 3, 81, '164885', 7),
(92, 5, 82, '23555', 1);

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
-- Volcado de datos para la tabla `salesheaders`
--

INSERT INTO `salesheaders` (`salesheader_id`, `user_id`, `dateSale`, `total`) VALUES
(1, 9, '2023-05-25', '23555'),
(2, 9, '2023-05-25', '23555'),
(3, 9, '2023-05-25', '23555'),
(4, 9, '2023-05-25', '23555'),
(5, 9, '2023-05-25', '23555'),
(6, 9, '2023-05-25', '15320'),
(7, 9, '2023-05-25', '23555'),
(8, 9, '2023-05-25', '23555'),
(9, 9, '2023-05-25', '23555'),
(10, 9, '2023-05-25', '23555'),
(11, 3, '2023-05-25', '23555'),
(12, 3, '2023-05-25', '15320'),
(13, 30, '2023-05-26', '15000'),
(14, 30, '2023-05-26', '15000'),
(15, 30, '2023-05-26', '15000'),
(16, 30, '2023-05-26', '15000'),
(17, 30, '2023-05-26', '15000'),
(18, 30, '2023-05-26', '23555'),
(19, 30, '2023-05-26', '15000'),
(21, 30, '2023-05-26', '0'),
(22, 30, '2023-05-26', '0'),
(23, 30, '2023-05-26', '0'),
(24, 30, '2023-05-26', '0'),
(25, 30, '2023-05-26', '0'),
(26, 30, '2023-05-26', '47110'),
(27, 30, '2023-05-26', '23555'),
(28, 30, '2023-05-26', '54789'),
(29, 30, '2023-05-26', '23555'),
(30, 30, '2023-05-26', '0'),
(31, 30, '2023-05-26', '0'),
(32, 30, '2023-05-26', '75000'),
(33, 30, '2023-05-26', '73555'),
(34, 30, '2023-05-27', '12490'),
(35, 9, '2023-05-27', '23555'),
(36, 2, '2023-05-27', '12490'),
(37, 2, '2023-05-27', '101899'),
(38, 31, '2023-05-30', '23555'),
(39, 31, '2023-05-30', '25000'),
(40, 31, '2023-05-30', '7000'),
(41, 31, '2023-05-30', '12490'),
(42, 29, '2023-05-30', '129110'),
(43, 29, '2023-05-30', '25000'),
(44, 29, '2023-05-30', '54789'),
(45, 29, '2023-05-30', '7000'),
(46, 33, '2023-05-30', '61789'),
(47, 9, '2023-06-01', '25000'),
(48, 9, '2023-06-01', '23555'),
(49, 9, '2023-06-01', '23555'),
(50, 9, '2023-06-01', '25000'),
(51, 9, '2023-06-01', '25000'),
(52, 9, '2023-06-01', '25000'),
(53, 9, '2023-06-01', '25000'),
(54, 9, '2023-06-01', '23555'),
(55, 9, '2023-06-01', '12490'),
(56, 9, '2023-06-01', '25000'),
(57, 9, '2023-06-01', '25000'),
(58, 9, '2023-06-01', '25000'),
(59, 9, '2023-06-01', '25000'),
(60, 9, '2023-06-01', '25000'),
(61, 9, '2023-06-01', '25000'),
(62, 9, '2023-06-02', '25000'),
(63, 25, '2023-06-03', '25000'),
(64, 25, '2023-06-03', '25000'),
(65, 25, '2023-06-03', '23555'),
(66, 24, '2023-06-04', '248535'),
(67, 35, '2023-06-19', '50000'),
(68, 35, '2023-06-19', '0'),
(69, 29, '2023-06-24', '25000'),
(70, 29, '2023-06-28', '54789'),
(71, 29, '2023-06-28', '12490'),
(72, 2, '2023-07-08', '23555'),
(73, 24, '2023-07-11', '54789'),
(74, 9, '2023-07-11', '12490'),
(75, 9, '2023-07-11', '54789'),
(76, 9, '2023-07-21', '250200'),
(77, 41, '2023-08-22', '1500'),
(78, 42, '2023-08-22', '54789'),
(79, 42, '2023-08-22', '54789'),
(80, 42, '2023-08-22', '100'),
(81, 42, '2023-08-22', '23555'),
(82, 43, '2023-09-06', '23555');

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
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO `subcategories` (`subcategory_id`, `name`, `category_id`) VALUES
(1, 'Instrumentos', 1),
(2, 'Sonido', 3),
(3, 'Accesorios', 2);

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
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `avatar`, `profile`) VALUES
(1, 'Diego', 'diego@gmail.com', '$2a$10$Nr1jho6kt1kyw.n6f7m8eOYtNmcVFppD5upCixdgrgvlni1jQ8czO', 'img-1686490059643.jpeg', 'Administrador'),
(2, 'Fanku', 'facunoya@hotmail.com', '$2a$10$LJunk9501ZDJ1uhwNG3.4u7Wjr1CgZnDprt9dd6WB1gBFh3QcxPq6', 'img-1685312901855.jpeg', 'Administrador'),
(3, 'Agostina', 'agos@gmail.com', '$2a$10$rNau.Y0kHo2mqNHzJdDFX.LHJ1uk30KNzr1YSx5ANkuDJ2cgC8neO', 'img-1685399079814.jpeg', 'Administrador'),
(9, 'Nina', 'snoya1987@gmail.com', '$2a$10$DSlPHQn1YQVU.7/Pd2DQ4utNDsKvX.f9MWa19M6z53rRVgmkZSC7W', 'img-1685312615326.jpeg', 'Administrador'),
(20, 'Nina', 'nina@gmail.com', '$2a$10$2Llk4htJCbx5fzVeRM6ZEexqbak0rUmDhSgseSJEntt/mXFpSXODK', 'img-1688075562741.jpeg', 'Administrador'),
(21, 'Lin', 'lin@gmail.com', '$2a$10$3HVvmHAKBWesCzuwezFVyuBIujGF2oJINahc0VHkwgdHnUzkvmB3K', 'lin.jpeg', 'Administrador'),
(22, 'Merlina', 'merli@gmail.com', '$2a$10$MUaBmlEb.qylRegGq3y01uTxzk.BwdSJAy/6JZHltmF/70.tjNLAG', 'img-1685308854245.jpeg', 'Administrador'),
(23, 'Fanku', 'fanku@gmail.com', '$2a$10$9n3SIdz0YYHNwObSyqE/O.RWVlhcicHLgenwW2zgYbqoUIQPi1ble', 'img-1688234026503.jpg', 'Administrador'),
(24, 'Luis', 'nuez@gmail.com', '$2a$10$kYWT5LsCLCU2aGX3HyyCKOLg2CMvag8/eUj05cc9mnmJlzHTWgWzS', 'img-1685313542401.jpeg', 'Administrador'),
(25, 'Maxi', 'maxi@gmail.com', '$2a$10$Ee739xLctiRV7slnYI4sye.5oJaZkifocSUzsOUg9Ympy2NrYO4US', 'img-1685313081116.jpeg', 'Administrador'),
(28, 'Luna', 'lunita@gmail.com', '$2a$10$ZsYoHlLDtdsjgajIr1PGQuu0QiQRxp2SUlQ9LPZ4cHhMX21ingUge', 'luna.jpg', 'Cliente'),
(29, 'Emilio', 'emilio@gmail.com', '$2a$10$m2QxoZ0QDG8FpPHBUeXvGe0n1aaZD9YEZ.wleb2AX3x2EaHyd31w2', 'img-1687570742684.jpg', 'Cliente'),
(30, 'Ameo9', 'ameo@mail.com', '$2a$10$KauZoDYmDaIY4Swqg9Bcl.CUhut7Tz/FpUcMt7XcOL3MTCdqxh56u', 'img-1685413340645.png', 'Administrador'),
(31, 'Belen', 'belen@gmail.com', '$2a$10$61tRVqYsKbTVDNARJ9/VdOQ7UVNIHWFmsi3OfvMMHqzl4DuMoYrxq', 'img-1688234170878.jpg', 'Cliente'),
(32, 'Fanku87', 'fanku87@gmail.com', '$2a$10$dhjcuXxbwXzNENQXspgX0O3hVl0gg2VO2aPTXZPmr63zDrALOXQGW', 'img-1685413672918.jpg', 'Cliente'),
(33, 'More', 'morena@gmail.com', '$2a$10$B.ZGX7SXWGbHCFZRcn53w.NBKLw.XxMRKstEITzqdjiWB3YrWEIwa', 'img-1685486522983.jpg', 'Cliente'),
(34, 'Cristian', 'cristian@gmail.com', '$2a$10$mkQGy8VX.I0R/kFlO.7cf.O1ql3b.UO11YDSho5.C0.tz7zFNlQ0e', 'img-1688781865667.png', 'Cliente'),
(35, 'Horacio', 'hnoya@gmail.com', '$2a$10$sAr2s6cgoXqEU7L05Yw0aertykaQPnEBPvJaSD.OJXdHVrI9pCbMq', 'img-1687196935958.jpg', 'Administrador'),
(36, 'Maribe', 'maribe@gmail.com', '$2a$10$Kpk5Np5c52HR/1D3MRCPSu0pagkMBrToKqnb0IAE28wycYgR0wFY.', 'img-1687644382378.jpg', 'Cliente'),
(37, 'Jeremias', 'gatofelix@gmail.com', '$2a$10$EncXeijZAblxwuoikSZ2KOE6NWrajpjczV2QRTcbtd5RAmCHEh2dO', 'img-1687998211809.png', 'Cliente'),
(38, 'Bella', 'agostina@gmail.com', '$2a$10$NSobzroKzjrtsjVNljG.E.eSoGYQ0CA6ZfbIsdV5XRjMGLqOuk8lm', 'img-1688235496044.jpg', 'Administrador'),
(39, 'Agustin', 'agustin@hotmail.com', '$2a$10$Orhe.031Y.BYAAAh5YZezuF.sKm4/1amoWx5dJtf/dYUKLfe1R1wG', 'img-1688235420452.jpg', 'Administrador'),
(40, 'Franco', 'colo@gmail.com', '$2a$10$IpYuXYe9f3TkudyT5zaMw.O7Hz.2wHuma.RbcbNVEhQ4O.gCLxHf6', 'img-1688234306979.jpg', 'Administrador'),
(41, 'Juan', 'juan@gmail.com', '$2a$10$juC/WHHd/JpXxrcMVnclyOVJHFj99QS3iZTRHNdM76xLYYNP16uky', 'img-1692738738622.jpeg', 'Cliente'),
(42, 'Federico', 'champi@gmail.com', '$2a$10$TajmNpAUEvdFHNAcr5EsXuU0mXX1b9GKXD9DwDeAVfpPnBRMOShjO', 'img-1692739445296.jpg', 'Administrador'),
(43, 'turelli', 'maribecac@gmail.com', '$2a$10$DizSv/BOs43mEG/SvsgLUefJaIpFHQbEKFDWM6TxXtVGrhqfRm1gC', 'img-1694043742915.jpg', 'Administrador'),
(44, 'Fanku', 'fanku87@mail.com', '$2a$10$DHYzIZPRCk5JByyL7YBap.fARHaBz/LnfhuvCgmHHyJhtJxiU61jW', 'img-1699651560019.jpg', 'Administrador');

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
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=194;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `salesdetails`
--
ALTER TABLE `salesdetails`
  MODIFY `salesdetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT de la tabla `salesheaders`
--
ALTER TABLE `salesheaders`
  MODIFY `salesheader_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `subcategory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

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
