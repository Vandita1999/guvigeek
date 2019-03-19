-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2019 at 05:16 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guvi`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `first` varchar(50) NOT NULL,
  `last` varchar(50) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `degree` varchar(50) NOT NULL,
  `passout` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`first`, `last`, `mobile`, `password`, `email`, `degree`, `passout`) VALUES
('vandita', 'pandey', '8523694562', '02/429Bob', 'pandey@g.com', 'btech', '2021'),
('vandita', 'pandey', '9532561136', 'vandita02', 'pandeyvandita1999@gmail.com', 'Btech', '2021'),
('vandita', 'pandey', '7825999047', '02/429bob', 'vandita@gmail.com', 'btech', '2021');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `id` int(250) NOT NULL,
  `first` varchar(50) NOT NULL,
  `last` varchar(50) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `adhaar` varchar(20) NOT NULL,
  `degree` varchar(12) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `passout` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `first`, `last`, `mobile`, `email`, `adhaar`, `degree`, `branch`, `passout`) VALUES
(11, 'vandita', 'pandey', '9532566126', 'pandeyvandita1999@gmail.com', '705241236542', 'btech', 'cse', '2021');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
