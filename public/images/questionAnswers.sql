-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 23, 2022 at 04:22 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms`
--

-- --------------------------------------------------------

--
-- Table structure for table `questionAnswers`
--

CREATE TABLE `questionAnswers` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `questionId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `answerType` enum('Text','Photo') NOT NULL,
  `answerText` varchar(255) DEFAULT NULL,
  `answerImage` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questionAnswers`
--

INSERT INTO `questionAnswers` (`id`, `questionId`, `answerType`, `answerText`, `answerImage`) VALUES
('00bc46d7-52de-11ed-ac01-0045e21c18f1', '2a7783d9-52dd-11ed-ac01-0045e21c18f1', 'Text', 'Egypt', NULL),
('01e27bf1-52de-11ed-ac01-0045e21c18f1', '2a7783d9-52dd-11ed-ac01-0045e21c18f1', 'Text', 'Egypt', NULL),
('e77e26aa-52dd-11ed-ac01-0045e21c18f1', '2a7783d9-52dd-11ed-ac01-0045e21c18f1', 'Text', 'Egypt', NULL),
('fe1482ad-52dd-11ed-ac01-0045e21c18f1', '2a7783d9-52dd-11ed-ac01-0045e21c18f1', 'Text', 'Egypt', NULL),
('ff9ed8c8-52dd-11ed-ac01-0045e21c18f1', '2a7783d9-52dd-11ed-ac01-0045e21c18f1', 'Text', 'Egypt', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questionAnswers`
--
ALTER TABLE `questionAnswers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questionId` (`questionId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `questionAnswers`
--
ALTER TABLE `questionAnswers`
  ADD CONSTRAINT `questionAnswers_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `quizQuestions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
