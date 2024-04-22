-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-04-2024 a las 12:12:35
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

CREATE TABLE `articulo` (
  `ID-ARTICULO` int(11) NOT NULL,
  `DESCRIPCION` varchar(100) NOT NULL,
  `MODELO` varchar(100) NOT NULL,
  `COLOR` varchar(25) NOT NULL,
  `TALLA` varchar(10) NOT NULL,
  `EXISTENCIAS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `ID-IMAGEN` int(11) NOT NULL,
  `ID-ARTICULO` int(11) NOT NULL,
  `FOTO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `ID-TIENDA` int(11) NOT NULL,
  `LOCALIDAD` varchar(100) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID-USUARIO` varchar(100) NOT NULL,
  `USUARIO` varchar(100) NOT NULL,
  `CONTRASEÑA` varchar(100) NOT NULL,
  `ROL` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `ID-VENTA` int(11) NOT NULL,
  `FECHA` varchar(50) NOT NULL,
  `HORA` varchar(50) NOT NULL,
  `ID-TIENDA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_linea`
--

CREATE TABLE `venta_linea` (
  `ID-VENTA-LINEA` int(11) NOT NULL,
  `ID-VENTA` int(11) NOT NULL,
  `ID-ARTICULO` int(11) NOT NULL,
  `CANTIDAD` int(11) NOT NULL,
  `PVP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`ID-ARTICULO`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`ID-IMAGEN`),
  ADD KEY `FK-ARTICULOS` (`ID-ARTICULO`);

--
-- Indices de la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD PRIMARY KEY (`ID-TIENDA`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID-USUARIO`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`ID-VENTA`),
  ADD KEY `FK-TIENDA` (`ID-TIENDA`);

--
-- Indices de la tabla `venta_linea`
--
ALTER TABLE `venta_linea`
  ADD PRIMARY KEY (`ID-VENTA-LINEA`),
  ADD KEY `FK-VENTA` (`ID-VENTA`),
  ADD KEY `ID-ARTICULO-VENTA` (`ID-ARTICULO`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `ID-IMAGEN` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tienda`
--
ALTER TABLE `tienda`
  MODIFY `ID-TIENDA` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `ID-VENTA` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `venta_linea`
--
ALTER TABLE `venta_linea`
  MODIFY `ID-VENTA-LINEA` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `FK-ARTICULOS` FOREIGN KEY (`ID-ARTICULO`) REFERENCES `articulo` (`ID-ARTICULO`);

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `FK-TIENDA` FOREIGN KEY (`ID-TIENDA`) REFERENCES `tienda` (`ID-TIENDA`);

--
-- Filtros para la tabla `venta_linea`
--
ALTER TABLE `venta_linea`
  ADD CONSTRAINT `FK-VENTA` FOREIGN KEY (`ID-VENTA`) REFERENCES `venta` (`ID-VENTA`),
  ADD CONSTRAINT `ID-ARTICULO-VENTA` FOREIGN KEY (`ID-ARTICULO`) REFERENCES `articulo` (`ID-ARTICULO`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
