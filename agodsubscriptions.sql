-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2022 at 08:48 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agodsubscriptions`
--

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emails`
--

INSERT INTO `emails` (`email`) VALUES
('4sdfd'),
('adjsdklas'),
('fardeenmemon15@gmail.com'),
('fardeenmemon17@gmail.com'),
('fdafasd@gmail.com'),
('fdafdsadasasd@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` varchar(255) NOT NULL,
  `referalID` varchar(255) DEFAULT NULL,
  `stripeID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `referalID`, `stripeID`) VALUES
('3424asdfdfdsa', 'djkhaskjdhkjashdkjashdkjhskjd', NULL),
('43fdfgdf', 'djkhaskjdhkjashdkjashdkjhskjd', NULL),
('465423fsdfasfddsr43', 'djkhaskjdhkjashdkjashdkjhskjd', NULL),
('6rf3fv', 'djkhaskjdhkjashdkjashdkjhskjd', ''),
('djkhaskjdhkjashdkjashdkjhskjd', '', NULL),
('fardeen2@gmail.com', NULL, 'cus_MYZ9QZ5lKJ53gL'),
('fardeen3@gmail.com', '', 'cus_MYZ9hRMh7S7Unl');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emails`
--
ALTER TABLE `emails`
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `userID` (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
