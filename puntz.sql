-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-08-2024 a las 22:17:44
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `puntz`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impresiones`
--

CREATE TABLE `impresiones` (
  `id` int(11) NOT NULL,
  `articulo` varchar(250) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` double NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `impresiones`
--

INSERT INTO `impresiones` (`id`, `articulo`, `descripcion`, `precio`, `img_id`) VALUES
(3, 'Mate Groor', 'Lorem ipsum odor amet', 3000, 'ta8kfxrxagsuyy06wglw'),
(5, 'leon para cumples', 'lorem lorem 55d', 50000, 'ruvkurqjvux6r8rzsghp'),
(7, 'algo que aun no se', 'pero es hermoso', 111111111, 'c1kpicyihhqhrxekixzd'),
(9, 'adorno', 'para coleccionar', 10000, 'o3cg1saclezwbgda6hkp'),
(10, 'algun articulo', 'prueba 5000', 123456, 'c8o5csk60oy0afyt0qp5'),
(11, 'oso corte laser', 'celeste y blanco', 22, 'z7bytkxudod2fjcv274q'),
(12, 'mate- diseño personalizado', 'Mate cuadrado Monte Hermoso', 10000, 'yfhyodsg83hvhfz9bhwd'),
(13, 'llavero personalizado', 'lorem lorem 55', 1200, 'fmrit9uytvyzwytnybtu'),
(16, 'aros', 'para usar en el verano', 500, 'kfbthchuwygvstitb3rk'),
(17, 'mate Charly Garcia', 'Mate 3D pintado a mano - material PLA', 120000, 'p19cnb44lshlpewihdfo'),
(19, 'llavero para hotel', 'colores a eleccion', 222, 'wybqoh6duhnpvqzgg1mx'),
(20, 'Medallas', 'en 3D', 444, 'jtrowyvx0ctq62kb0tcd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `nombre`, `apellido`, `email`) VALUES
(1, 'admin', '81dc9bdb52d04dc20036dbd8313ed055', 'administrador', 'admin1', 'juan@sos.com'),
(2, 'juan', '81dc9bdb52d04dc20036dbd8313ed055', 'juan', 'juan', 'juan33@sos.com'),
(3, 'pepe', '81dc9bdb52d04dc20036dbd8313ed055', 'pepe', 'repepe', 'elpepe@sos.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `impresiones`
--
ALTER TABLE `impresiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `impresiones`
--
ALTER TABLE `impresiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
