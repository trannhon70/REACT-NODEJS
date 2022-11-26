-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2022 at 01:13 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kevin`
--

-- --------------------------------------------------------

--
-- Table structure for table `allcodes`
--

CREATE TABLE `allcodes` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `valueEn` varchar(255) DEFAULT NULL,
  `valueVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `statusId` varchar(255) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `patientId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `timeType` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `clinics`
--

CREATE TABLE `clinics` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_clinic_specialty`
--

CREATE TABLE `doctor_clinic_specialty` (
  `id` int(11) NOT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `clinicId` int(11) DEFAULT NULL,
  `specialtyId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `files` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` int(11) NOT NULL,
  `currentNumber` int(11) DEFAULT NULL,
  `maxNumber` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `timeType` varchar(255) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-allcode.js'),
('migration-create-booking.js'),
('migration-create-clinic.js'),
('migration-create-docter-clinic-specialty.js'),
('migration-create-history.js'),
('migration-create-schedule.js'),
('migration-create-specialty.js'),
('migration-create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `specialties`
--

CREATE TABLE `specialties` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `positionId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `address`, `phoneNumber`, `gender`, `image`, `roleId`, `positionId`, `createdAt`, `updatedAt`) VALUES
(2, 'nhontrau03@gmail.com', '$2a$10$UU1o5wahNn/gyX141XiGKOGMoLe6/A0OPYTg8Ei8iOypvQtC4Trt2', 'Trần xuan', 'Nhơn a', 'khonog co dia chi', '12354997', 0, NULL, '1', NULL, '2022-11-08 05:59:01', '2022-11-08 07:23:30'),
(3, 'nhdsadontrau03@gmail.com', '$2a$10$UU1o5wahNn/gyX141XiGKOGMoLe6/A0OPYTg8Ei8iOypvQtC4Trt2', 'Trần', 'Nhơn', 'Tìm người yêu lâu dàia', '12354997', 0, NULL, '1', NULL, '2022-11-08 06:03:48', '2022-11-26 09:53:55'),
(6, 'nhontrau013@gmail.com', '$2a$10$7qhLQrV4LT2yWNJ/3HPNwe8NIl2bDBtjM7n9QOPdg0rOA9B04V8JK', 'Kevin', 'Tran', 'Tìm người yêu lâu dài', '12354997', 0, NULL, '0', NULL, '2022-11-21 03:18:50', '2022-11-21 03:18:50'),
(7, 'loang@gmail.com', '$2a$10$iN2zUm5HxbSHwFutD6z8FOUg0PnYMj.1zxqLnmkuKr/8PuwbFgSE.', 'Trần', 'Long', 'sadsadsa', '4564564645654', 0, NULL, '1', NULL, '2022-11-23 15:39:05', '2022-11-23 15:39:05'),
(9, 'nhontraddu03@gmail.com', '$2a$10$rJ0PE2Yyiw.uKFLhjsb7A.UeoF/FUZM3onwxfSvZVtptPIrQzyeA.', 'ngaan', 'hoang', 'long an', '656765756', 0, NULL, '0', NULL, '2022-11-25 11:42:30', '2022-11-26 09:55:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allcodes`
--
ALTER TABLE `allcodes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clinics`
--
ALTER TABLE `clinics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_clinic_specialty`
--
ALTER TABLE `doctor_clinic_specialty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `specialties`
--
ALTER TABLE `specialties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allcodes`
--
ALTER TABLE `allcodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clinics`
--
ALTER TABLE `clinics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_clinic_specialty`
--
ALTER TABLE `doctor_clinic_specialty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `specialties`
--
ALTER TABLE `specialties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
