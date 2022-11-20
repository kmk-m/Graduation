-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 23, 2022 at 04:24 PM
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
-- Table structure for table `quizQuestions`
--

CREATE TABLE `quizQuestions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quizId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `questionType` enum('Text','TextAndPhoto') NOT NULL,
  `questionText` varchar(255) NOT NULL,
  `questionImage` text DEFAULT NULL,
  `questionGrade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quizQuestions`
--

INSERT INTO `quizQuestions` (`id`, `quizId`, `questionType`, `questionText`, `questionImage`, `questionGrade`) VALUES
('2a7783d9-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('ac5fb330-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('b46665da-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('c834a327-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('cf817633-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('cf8dd764-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('cfa8ce28-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('cfb184a1-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('cfbd53d9-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('cfc5f94d-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('cfce7369-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('cfd1faad-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d831a82b-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d83e2e5f-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d841126e-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d849b5f8-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d859072c-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d86347f5-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d870e844-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8955e78-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d89ced11-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8ada31a-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8b6257a-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8bec116-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8c74baa-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8d17eb0-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8db9ac0-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8e295bd-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8ecbc21-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d8f6de74-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d90139b8-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d909d6ca-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d912533a-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d915ae9b-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d91e45be-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d928b7a4-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d9316ae5-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d939c5eb-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d9426852-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d94c97af-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1),
('d9536bc3-52dd-11ed-ac01-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'hello ?', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quizQuestions`
--
ALTER TABLE `quizQuestions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quizId` (`quizId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `quizQuestions`
--
ALTER TABLE `quizQuestions`
  ADD CONSTRAINT `quizQuestions_ibfk_1` FOREIGN KEY (`quizId`) REFERENCES `quizzes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
