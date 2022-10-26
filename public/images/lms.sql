-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 22, 2022 at 06:00 PM
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
-- Table structure for table `allMessages`
--

CREATE TABLE `allMessages` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `usersId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `contant` text NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT 0,
  `sender` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Assignments`
--

CREATE TABLE `Assignments` (
  `assignmentId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `details` text NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Assignments`
--

INSERT INTO `Assignments` (`assignmentId`, `name`, `courseId`, `details`, `createdAt`) VALUES
('0f2fd64e-3f7d-11ed-b255-0045e21c18f1', 'Add url', '1673637c-3f57-11ed-b255-0045e21c18f1', '* make file html,\r\n* make file css,\r\n* make h1 type in it hello world,\r\n* style it with color red', '2022-09-28 19:58:06'),
('3a246c2b-3f57-11ed-b255-0045e21c18f1', 'Hello world', '1673637c-3f57-11ed-b255-0045e21c18f1', '* make file html,\r\n* make file css,\r\n* make h1 type in it hello world,\r\n* style it with color red,', '2022-09-28 19:58:06'),
('b07ae669-3fd7-11ed-a5b7-0045e21c18f1', 'Add image', '1673637c-3f57-11ed-b255-0045e21c18f1', '* make file html,\r\n* make file css,\r\n* make h1 type in it hello world,\r\n* style it with color red,', '2022-09-28 03:58:06');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Certificates`
--

CREATE TABLE `Certificates` (
  `certificateid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `trackId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `correctAnswers`
--

CREATE TABLE `correctAnswers` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `questionId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `answerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `courseCategories`
--

CREATE TABLE `courseCategories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `categoryId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `courseContents`
--

CREATE TABLE `courseContents` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` enum('file','video') NOT NULL,
  `link` varchar(255) NOT NULL,
  `place` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Courses`
--

CREATE TABLE `Courses` (
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `rating` bigint(20) NOT NULL,
  `coursePlan` varchar(255) NOT NULL,
  `introVideo` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `instructor` varchar(255) NOT NULL,
  `students` bigint(20) NOT NULL,
  `language` enum('Arabic','English') NOT NULL,
  `baseCourse` varchar(255) DEFAULT NULL,
  `allow` tinyint(1) DEFAULT NULL,
  `numberOfAssignments` tinyint(4) NOT NULL,
  `numberOfQuizess` tinyint(4) NOT NULL,
  `numberOfProjects` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Courses`
--

INSERT INTO `Courses` (`courseId`, `name`, `image`, `rating`, `coursePlan`, `introVideo`, `description`, `duration`, `instructor`, `students`, `language`, `baseCourse`, `allow`, `numberOfAssignments`, `numberOfQuizess`, `numberOfProjects`, `createdAt`) VALUES
('1673637c-3f57-11ed-b255-0045e21c18f1', 'React - Beginner to Advanced 2022 (+ Redux & Ecommerce App)', 'https://html.com/wp-content/uploads/html-hpg-featured-new.png', 50, 'gkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkvvvv', 'https://youtu.be/tkn78AkT1aI', 'https://youtu.be/tkn78AkT1aIhttps://youtu.be/tkn78AkT1aI', '1216', 'fahd hakem', 1, 'Arabic', NULL, 1, 1, 0, 1, '2022-09-28 19:56:37'),
('33345558-411d-11ed-b422-0045e21c18f1', 'React Tutorial and Projects Course (2022)', 'https://repository-images.githubusercontent.com/428080046/8073eeb4-3a1a-4066-ac50-4bf75259756c', 80, 'hello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from css', 'hello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from css', 'hello from csshello from css', '20', 'fahd hakem', 20, 'English', NULL, 0, 4, 6, 4, '2022-10-01 02:06:22'),
('4ecbb59f-4145-11ed-b8c1-0045e21c18f1', 'Flutter & Dart for Beginners: Complete Course [2022 Latest]', 'https://cdn.sanity.io/images/s7xbv9bz/production/1562d4dae8dc03456edca898e89c0f39ae086a8f-1600x1000.png?w=1200&h=750&auto=format&fm=webp', 44, 'Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.', 'Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.', 'Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.', '20', 'Mohamed Gamal', 2, 'Arabic', NULL, 0, 1, 1, 1, '2022-10-01 06:54:17'),
('d25cb012-4144-11ed-b8c1-0045e21c18f1', 'Next.js & React - The Complete Guide (incl. Two Paths!)', 'data:image/jpeg;base64,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', 100, 'Build Full Stack Application from Scratch with MongoDB, Express, React and NodeJS\r\n\r\nLearn how to implement JWT for authentication and authorization', 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello', 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello', '20', 'Amany Mohamed', 20, 'English', NULL, 0, 1, 1, 1, '2022-10-01 06:50:09');

-- --------------------------------------------------------

--
-- Table structure for table `Hackathons`
--

CREATE TABLE `Hackathons` (
  `hackthonId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` enum('flutter','frontend','backend','fullstack','machine learning','deep Learning','data Analysis','Cyper Security') NOT NULL,
  `date` datetime NOT NULL,
  `round` bigint(20) NOT NULL,
  `finished` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Hackathons`
--

INSERT INTO `Hackathons` (`hackthonId`, `name`, `type`, `date`, `round`, `finished`) VALUES
('7382460b-41f7-11ed-9f8a-0045e21c18f1', 'Frontend ', 'frontend', '2022-10-28 04:09:53', 1, 0),
('828d786f-41f7-11ed-9f8a-0045e21c18f1', 'Backend', 'backend', '2022-10-22 04:11:06', 1, 0),
('923177f1-41f7-11ed-9f8a-0045e21c18f1', 'Flutter', 'flutter', '2022-10-03 04:11:27', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `interests`
--

CREATE TABLE `interests` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `interests`
--

INSERT INTO `interests` (`id`, `name`) VALUES
('02486265-3d1c-11ed-a60c-0045e21c18f1', 'larvel'),
('05cf1152-3d1c-11ed-a60c-0045e21c18f1', 'mysql'),
('091e557f-3d1c-11ed-a60c-0045e21c18f1', 'python'),
('0b686702-3d1c-11ed-a60c-0045e21c18f1', 'c++'),
('0f7f66a4-3d1c-11ed-a60c-0045e21c18f1', 'javaScript'),
('11fb469e-3d1c-11ed-a60c-0045e21c18f1', 'java'),
('167484f1-3d1c-11ed-a60c-0045e21c18f1', 'Game development'),
('1b9e0da8-3d1c-11ed-a60c-0045e21c18f1', 'express'),
('1ea57b61-3d1c-11ed-a60c-0045e21c18f1', 'nestjs'),
('22519469-3d1c-11ed-a60c-0045e21c18f1', 'php'),
('288b7985-3d1c-11ed-a60c-0045e21c18f1', 'Angular'),
('31e74e4c-3d1c-11ed-a60c-0045e21c18f1', 'cyper security'),
('387635d3-3d1c-11ed-a60c-0045e21c18f1', 'Redhat'),
('ce8a3797-3d1b-11ed-a60c-0045e21c18f1', 'AI'),
('dacb5189-3d1b-11ed-a60c-0045e21c18f1', 'Machine learning\r\n'),
('e213740b-3d1b-11ed-a60c-0045e21c18f1', 'Data analysis'),
('e88c164a-4a27-11ed-a437-0045e21c18f1', 'hello'),
('ee803e65-4a27-11ed-a437-0045e21c18f1', 'hrello'),
('ef4ae19c-3d1b-11ed-a60c-0045e21c18f1', 'Data science'),
('f2f2a768-4a27-11ed-a437-0045e21c18f1', 'hjkhjkhkj'),
('f3a2002d-3d1b-11ed-a60c-0045e21c18f1', 'front end'),
('f6c6b54a-3d1b-11ed-a60c-0045e21c18f1', 'backend'),
('fa96be29-3d1b-11ed-a60c-0045e21c18f1', 'nodejs'),
('fe60660c-3d1b-11ed-a60c-0045e21c18f1', 'angular');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `postId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `commentId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `replyId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `like` bigint(20) NOT NULL DEFAULT 0,
  `love` bigint(20) NOT NULL DEFAULT 0,
  `sad` bigint(20) NOT NULL DEFAULT 0,
  `angry` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `senderId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `receiverId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `postComments`
--

CREATE TABLE `postComments` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `postId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `postFriends`
--

CREATE TABLE `postFriends` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `postId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `postReplies`
--

CREATE TABLE `postReplies` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `commentId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `reply` text DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `content` text NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Projects`
--

CREATE TABLE `Projects` (
  `projectId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `requirement` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Projects`
--

INSERT INTO `Projects` (`projectId`, `name`, `courseId`, `requirement`) VALUES
('a30babfe-4c49-11ed-a729-0045e21c18f1', 'Chat HomePage', '4ecbb59f-4145-11ed-b8c1-0045e21c18f1', 'make Messanger App,Data must be secure,Add Authentication with Face and Password');

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
('0648bd30-4d62-11ed-aad4-0045e21c18f1', '3bbe35cd-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'Putting It Inside <b> Tag', NULL),
('0648c7d2-4d62-11ed-aad4-0045e21c18f1', '3bbab3d4-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'Putting It Inside <strong> tag', NULL),
('0648d152-4d62-11ed-aad4-0045e21c18f1', '3bbab3d4-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'Customizing It With Font-Weight Property In CSS', NULL),
('0648da72-4d62-11ed-aad4-0045e21c18f1', '3bbab3d4-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'All Answers Is Right', NULL),
('14eb4a15-4d64-11ed-aad4-0045e21c18f1', '3bd80e80-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<div class=\'class-name\'>', NULL),
('14eb52ff-4d64-11ed-aad4-0045e21c18f1', '3bd80e80-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<div class=class-name>', NULL),
('14eb5add-4d64-11ed-aad4-0045e21c18f1', '3bd80e80-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<div class=\\\"class-name\\\">', NULL),
('14eb623b-4d64-11ed-aad4-0045e21c18f1', '3bd80e80-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'All Is Right', NULL),
('2fcd5f09-4d61-11ed-aad4-0045e21c18f1', '3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'Yes', NULL),
('2fcd67cc-4d61-11ed-aad4-0045e21c18f1', '3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'No Its For Anchor Tag <a>', NULL),
('389d1062-4d63-11ed-aad4-0045e21c18f1', '3bc1ad57-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<object>', NULL),
('389d1bbd-4d63-11ed-aad4-0045e21c18f1', '3bc51fa0-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<basefont>', NULL),
('389d21ca-4d63-11ed-aad4-0045e21c18f1', '3bc51fa0-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<abbr>', NULL),
('389d2774-4d63-11ed-aad4-0045e21c18f1', '3bc51fa0-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'All Tags Is Exists in HTML', NULL),
('68b5fc7f-4d64-11ed-aad4-0045e21c18f1', '3bd10620-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'To Make Text Bold', NULL),
('68b6062e-4d64-11ed-aad4-0045e21c18f1', '3bd10620-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'To Make Text Italic', NULL),
('68b60b80-4d64-11ed-aad4-0045e21c18f1', '3bd10620-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'To Add Breakline', NULL),
('68b6106d-4d64-11ed-aad4-0045e21c18f1', '3bd10620-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'To Create Horizontal Line', NULL),
('6d6a67d1-4d62-11ed-aad4-0045e21c18f1', '3bbe35cd-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>', NULL),
('6d6a6f44-4d62-11ed-aad4-0045e21c18f1', '3bbe35cd-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>', NULL),
('6d6a798b-4d62-11ed-aad4-0045e21c18f1', '3bbe35cd-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>', NULL),
('6d6a80f2-4d62-11ed-aad4-0045e21c18f1', '3bbe35cd-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'All Solutions Is Wrong', NULL),
('7d442b89-4d60-11ed-aad4-0045e21c18f1', '3baba61c-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'It helps businesses copy successful product ideas from competitors in their market segment.', NULL),
('7d4432ed-4d60-11ed-aad4-0045e21c18f1', '3baba61c-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'It helps businesses limit spending on pricey user research studies, by focusing on design first.', NULL),
('7d4438ab-4d60-11ed-aad4-0045e21c18f1', '3baba61c-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'It helps businesses make design decisions based on business plans, rather than user preferences.', NULL),
('80133e10-4d61-11ed-aad4-0045e21c18f1', '3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'All Elements Has This Attract', NULL),
('80134707-4d61-11ed-aad4-0045e21c18f1', '3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'Answer 1 And 3 Is Right', NULL),
('9067187d-4d64-11ed-aad4-0045e21c18f1', '7aca9bd9-4d5c-11ed-aad4-0045e21c18f1', 'Text', 'It helps businesses create products that are usable and accessible to a wider range of customers.', NULL),
('90672184-4d64-11ed-aad4-0045e21c18f1', '7aca9bd9-4d5c-11ed-aad4-0045e21c18f1', 'Text', 'It helps businesses copy successful product ideas from competitors in their market segment.', NULL),
('906728fb-4d64-11ed-aad4-0045e21c18f1', '7aca9bd9-4d5c-11ed-aad4-0045e21c18f1', 'Text', 'It helps businesses limit spending on pricey user research studies, by focusing on design first.', NULL),
('90672f8a-4d64-11ed-aad4-0045e21c18f1', '7aca9bd9-4d5c-11ed-aad4-0045e21c18f1', 'Text', 'It helps businesses make design decisions based on business plans, rather than user preferences.', NULL),
('a270aa39-4d63-11ed-aad4-0045e21c18f1', '3bc8772d-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<DOCTYPE html>', NULL),
('a270b117-4d63-11ed-aad4-0045e21c18f1', '3bc8772d-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<DOCTYPE html5>', NULL),
('a270b672-4d63-11ed-aad4-0045e21c18f1', '3bc8772d-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<!DOCTYPE html5>', NULL),
('a270bb7d-4d63-11ed-aad4-0045e21c18f1', '3bc8772d-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<!DOCTYPE html>', NULL),
('b50e3144-4d64-11ed-aad4-0045e21c18f1', '6423fd08-4d5c-11ed-aad4-0045e21c18f1', 'Text', 'Yes', NULL),
('b50e3b76-4d64-11ed-aad4-0045e21c18f1', '6423fd08-4d5c-11ed-aad4-0045e21c18f1', 'Text', 'No Its For Anchor Tag <a>', NULL),
('b50e4631-4d64-11ed-aad4-0045e21c18f1', '6423fd08-4d5c-11ed-aad4-0045e21c18f1', 'Text', 'All Elements Has This Attribute', NULL),
('b50e4c43-4d64-11ed-aad4-0045e21c18f1', '6423fd08-4d5c-11ed-aad4-0045e21c18f1', 'Text', 'Answer 1 And 3 Is Right', NULL),
('cd6e5ca4-4d62-11ed-aad4-0045e21c18f1', '3bc1ad57-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'By Using Include in HTML', NULL),
('cd6e6380-4d62-11ed-aad4-0045e21c18f1', '3bc1ad57-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'By Using Load In HTML', NULL),
('cd6e6a4e-4d62-11ed-aad4-0045e21c18f1', '3bc1ad57-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'By Using iFrame Tag', NULL),
('cd6e6fb9-4d62-11ed-aad4-0045e21c18f1', '3bc1ad57-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'All Solutions Is Wrong', NULL),
('d26d9cae-4d63-11ed-aad4-0045e21c18f1', '3bd4a37b-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<article>', NULL),
('d26da4f1-4d63-11ed-aad4-0045e21c18f1', '3bd4a37b-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<section>', NULL),
('d26daa3c-4d63-11ed-aad4-0045e21c18f1', '3bd4a37b-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<blockquote>', NULL),
('d26daf34-4d63-11ed-aad4-0045e21c18f1', '3bd4a37b-4d5f-11ed-aad4-0045e21c18f1', 'Text', '<aside>', NULL),
('f47b5cae-4d5f-11ed-aad4-0045e21c18f1', '3baba61c-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'It helps businesses create products that are usable and accessible to a wider range of customers.', NULL),
('fee86564-4d60-11ed-aad4-0045e21c18f1', '3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'To Make Text Bold', NULL),
('fee86ebc-4d60-11ed-aad4-0045e21c18f1', '3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'To Make Text Italic', NULL),
('fee876ff-4d60-11ed-aad4-0045e21c18f1', '3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'To Add Breakline', NULL),
('fee87ee5-4d60-11ed-aad4-0045e21c18f1', '3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'Text', 'To Create Horizontal Line', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `quizeContents`
--

CREATE TABLE `quizeContents` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quizeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `quistion1` varchar(255) DEFAULT NULL,
  `answerQuestion1` enum('a','b','c','d') NOT NULL,
  `quistion2` varchar(255) DEFAULT NULL,
  `answerQuestion2` enum('a','b','c','d') NOT NULL,
  `quistion3` varchar(255) DEFAULT NULL,
  `answerQuestion3` enum('a','b','c','d') NOT NULL,
  `quistion4` varchar(255) DEFAULT NULL,
  `answerQuestion4` enum('a','b','c','d') NOT NULL,
  `quistion5` varchar(255) DEFAULT NULL,
  `answerQuestion5` enum('a','b','c','d') NOT NULL,
  `quistion6` varchar(255) DEFAULT NULL,
  `answerQuestion6` enum('a','b','c','d') NOT NULL,
  `quistion7` varchar(255) DEFAULT NULL,
  `answerQuestion7` enum('a','b','c','d') NOT NULL,
  `quistion8` varchar(255) DEFAULT NULL,
  `answerQuestion8` enum('a','b','c','d') NOT NULL,
  `quistion9` varchar(255) DEFAULT NULL,
  `answerQuestion9` enum('a','b','c','d') NOT NULL,
  `quistion10` varchar(255) DEFAULT NULL,
  `answerQuestion10` enum('a','b','c','d') NOT NULL,
  `quistion11` varchar(255) DEFAULT NULL,
  `answerQuestion11` enum('a','b','c','d') NOT NULL,
  `quistion12` varchar(255) DEFAULT NULL,
  `answerQuestion12` enum('a','b','c','d') NOT NULL,
  `quistion13` varchar(255) DEFAULT NULL,
  `answerQuestion13` enum('a','b','c','d') NOT NULL,
  `quistion14` varchar(255) DEFAULT NULL,
  `answerQuestion14` enum('a','b','c','d') NOT NULL,
  `quistion15` varchar(255) DEFAULT NULL,
  `answerQuestion15` enum('a','b','c','d') NOT NULL,
  `quistion16` varchar(255) DEFAULT NULL,
  `answerQuestion16` enum('a','b','c','d') NOT NULL,
  `quistion17` varchar(255) DEFAULT NULL,
  `answerQuestion17` enum('a','b','c','d') NOT NULL,
  `quistion18` varchar(255) DEFAULT NULL,
  `answerQuestion18` enum('a','b','c','d') NOT NULL,
  `quistion19` varchar(255) DEFAULT NULL,
  `answerQuestion19` enum('a','b','c','d') NOT NULL,
  `quistion20` varchar(255) DEFAULT NULL,
  `answerQuestion20` enum('a','b','c','d') NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Quizesses`
--

CREATE TABLE `Quizesses` (
  `quizeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `details` varchar(255) NOT NULL,
  `numberOfQuesstions` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
('3baba61c-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'Why We Use <br> Element ', NULL, 1),
('3bb096ed-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'How does it benefit businesses to consider the user experience?', NULL, 1),
('3bbab3d4-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'Is <img> Element Has Attribute href', NULL, 1),
('3bbe35cd-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'How Can We Make Element Text Bold ', NULL, 1),
('3bc1ad57-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'What Is The Right Hierarchy For Creating Part Of Page', NULL, 1),
('3bc51fa0-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'How Can We Include External Page Inside Our HTML Page', NULL, 1),
('3bc8772d-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'What Is The Tag That Not Exists in HTML', NULL, 1),
('3bd10620-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'How We Specify Document Type Of HTML5 Page', NULL, 1),
('3bd4a37b-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'What Is The Element Thats Not Exists in HTML5 Semantics', NULL, 1),
('3bd80e80-4d5f-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'In HTML Can We Use This Way To Add Attributes ', NULL, 1),
('6423fd08-4d5c-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'Why we used pr ?', NULL, 1),
('7aca9bd9-4d5c-11ed-aad4-0045e21c18f1', 'fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Text', 'how we can make text bold', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `trackId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `Time` varchar(255) NOT NULL,
  `type` enum('Quiz','Exam') NOT NULL,
  `numberOfQuestions` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quizzes`
--

INSERT INTO `quizzes` (`id`, `name`, `courseId`, `trackId`, `Time`, `type`, `numberOfQuestions`) VALUES
('fbcba798-49af-11ed-8ca1-0045e21c18f1', 'Introduction To Web Designer', NULL, 'f04517eb-3f57-11ed-b255-0045e21c18f1', '125', 'Quiz', 20);

-- --------------------------------------------------------

--
-- Table structure for table `resetcodes`
--

CREATE TABLE `resetcodes` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `code` int(11) DEFAULT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trackCourses`
--

CREATE TABLE `trackCourses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `trackId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `show` varchar(255) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trackCourses`
--

INSERT INTO `trackCourses` (`id`, `trackId`, `courseId`, `show`) VALUES
('4d13b281-411d-11ed-b422-0045e21c18f1', 'f04517eb-3f57-11ed-b255-0045e21c18f1', '1673637c-3f57-11ed-b255-0045e21c18f1', '0'),
('64bf7416-4145-11ed-b8c1-0045e21c18f1', 'f04517eb-3f57-11ed-b255-0045e21c18f1', 'd25cb012-4144-11ed-b8c1-0045e21c18f1', '0\r\n'),
('d7a7c504-411c-11ed-b422-0045e21c18f1', 'f04517eb-3f57-11ed-b255-0045e21c18f1', '33345558-411d-11ed-b422-0045e21c18f1', '1'),
('f624000f-4144-11ed-b8c1-0045e21c18f1', 'f04517eb-3f57-11ed-b255-0045e21c18f1', '4ecbb59f-4145-11ed-b8c1-0045e21c18f1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `Tracks`
--

CREATE TABLE `Tracks` (
  `trackId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `introVideo` varchar(255) NOT NULL,
  `courseId` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `plan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Tracks`
--

INSERT INTO `Tracks` (`trackId`, `name`, `image`, `introVideo`, `courseId`, `description`, `plan`) VALUES
('f04517eb-3f57-11ed-b255-0045e21c18f1', 'Frontend Development', 'https://1.bp.blogspot.com/-H2TsSyKzdu4/X1ZNJBZryZI/AAAAAAAACtU/', 'https://1.bp.blogspot.com/-H2TsSyKzdu4/X1ZNJBZryZI/AAAAAAAACtU/gpkP6W7rU7oFzjc3idN0Ekf6vkzHE3hWQCNcBGAsYHQ/s673/h.jpg', '0', 'Now, we are looking for a sponsor to help our team participate in the upcoming Africa and Arab Collegiate Programming Championship (ACPC). Participating in the ACPC requires payment of expensive registration fees, which our team can\'t afford, so we need a sponsor to help us so that we can compete in the championship.', 'This year, our team (Katakeet) of Tanta University participated in the Egyptian Collegiate Programming Contest (ECPC), the biggest programming competition in Egypt. We managed to get 1st place across all Tanta University teams who participated. We also placed 20th across Egypt and we won a bronze medal for only the second time in the history of Tanta University.\r\n\r\nNow, we are looking for a sponsor to help our team participate in the upcoming Africa and Arab Collegiate Programming Championship (ACPC). Participating in the ACPC requires payment of expensive registration fees, which our team can\'t afford, so we need a sponsor to help us so that we can compete in the championship.');

-- --------------------------------------------------------

--
-- Table structure for table `userAssignments`
--

CREATE TABLE `userAssignments` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `assignmentId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `type` enum('Done','Pending','Rejected','New','Changes') DEFAULT NULL,
  `solution` varchar(255) DEFAULT NULL,
  `trackId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userCourses`
--

CREATE TABLE `userCourses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` enum('Pending','Done') DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userExperiences`
--

CREATE TABLE `userExperiences` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `type` enum('Volunteer','Work','Intership') NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userFriends`
--

CREATE TABLE `userFriends` (
  `id` int(11) NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `friendId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userHackthons`
--

CREATE TABLE `userHackthons` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hackthonId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userInterests`
--

CREATE TABLE `userInterests` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `interestId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userInterests`
--

INSERT INTO `userInterests` (`id`, `userId`, `interestId`) VALUES
('001297e5-4a28-11ed-a437-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'f2f2a768-4a27-11ed-a437-0045e21c18f1'),
('45773482-3f4b-42ab-805b-3fcdcf50812c', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'e88c164a-4a27-11ed-a437-0045e21c18f1'),
('9a36ad8b-6b1d-4ee9-b688-0e39beb5b37a', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'f2f2a768-4a27-11ed-a437-0045e21c18f1'),
('a4353623-df01-4f46-b787-57237193f5bf', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'ee803e65-4a27-11ed-a437-0045e21c18f1'),
('f826b0fd-4a27-11ed-a437-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'e88c164a-4a27-11ed-a437-0045e21c18f1'),
('fb94532d-4a27-11ed-a437-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'ee803e65-4a27-11ed-a437-0045e21c18f1');

-- --------------------------------------------------------

--
-- Table structure for table `userPosts`
--

CREATE TABLE `userPosts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `postId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `commentId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` enum('like','love','sad','angry') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userProjects`
--

CREATE TABLE `userProjects` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `projectId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `link` varchar(255) NOT NULL,
  `status` enum('Accepted','Pending','Rejected') DEFAULT NULL,
  `Comment` text DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userProjects`
--

INSERT INTO `userProjects` (`id`, `userId`, `projectId`, `name`, `description`, `link`, `status`, `Comment`, `updatedAt`) VALUES
('02b20b82-4c4a-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'a30babfe-4c49-11ed-a729-0045e21c18f1', 'Chating HomePage', 'make Messanger App,Data must be secure\r\n,Add Authentication with Face and Password', 'http://127.0.0.1/phpmyadmin/index.php?route=/table/change&db=lms&table=userProjects', 'Rejected', 'Not secure,Donot use Builtin Function', '2022-10-15 07:24:35'),
('3040f207-4c4a-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'a30babfe-4c49-11ed-a729-0045e21c18f1', 'Chating HomePage', 'make Messanger App,Data must be secure\r\n,Add Authentication with Face and Password', 'http://127.0.0.1/phpmyadmin/index.php?route=/table/change&db=lms&table=userProjects', 'Accepted', 'Exellent,', '2022-10-15 07:24:35');

-- --------------------------------------------------------

--
-- Table structure for table `userRates`
--

CREATE TABLE `userRates` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `courseId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `trackId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `rate` enum('Star1','Star2','Star3','Star4','Star5') NOT NULL,
  `title` varchar(255) NOT NULL,
  `details` text DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userRates`
--

INSERT INTO `userRates` (`id`, `courseId`, `trackId`, `userId`, `rate`, `title`, `details`, `createdAt`) VALUES
('69461803-5171-11ed-85c8-0045e21c18f1', NULL, 'f04517eb-3f57-11ed-b255-0045e21c18f1', '56f69e3e-9a4e-4d7e-92e4-a3fe30806c8e', 'Star1', 'Amazing Content, Very useful!', 'I really had an amazing and fun time with this course. I find comfort in the instructor’s way of teaching being light yet noteworthy. He really carefully guides students even with zero knowledge in anything. I would recommend this course to beginners who are interested in entering the world of Web Design.', '2022-10-21 20:51:18'),
('7d8590e5-5171-11ed-85c8-0045e21c18f1', NULL, 'f04517eb-3f57-11ed-b255-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'Star2', 'Amazing Content, Very useful!', 'I really had an amazing and fun time with this course. I find comfort in the instructor’s way of teaching being light yet noteworthy. He really carefully guides students even with zero knowledge in anything. I would recommend this course to beginners who are interested in entering the world of Web Design.', '2022-10-19 20:51:55'),
('8c07ecf9-5171-11ed-85c8-0045e21c18f1', NULL, 'f04517eb-3f57-11ed-b255-0045e21c18f1', 'b0cd7481-4c3c-11ed-a729-0045e21c18f1', 'Star3', 'Amazing Content, Very useful!', 'I really had an amazing and fun time with this course. I find comfort in the instructor’s way of teaching being light yet noteworthy. He really carefully guides students even with zero knowledge in anything. I would recommend this course to beginners who are interested in entering the world of Web Design.', '2022-10-21 18:52:25'),
('99a751b9-5171-11ed-85c8-0045e21c18f1', NULL, 'f04517eb-3f57-11ed-b255-0045e21c18f1', 'ced26f10-4c3c-11ed-a729-0045e21c18f1', 'Star4', 'Amazing Content, Very useful!', 'I really had an amazing and fun time with this course. I find comfort in the instructor’s way of teaching being light yet noteworthy. He really carefully guides students even with zero knowledge in anything. I would recommend this course to beginners who are interested in entering the world of Web Design.', '2022-10-08 20:52:46'),
('a559343a-5171-11ed-85c8-0045e21c18f1', NULL, 'f04517eb-3f57-11ed-b255-0045e21c18f1', 'd23e5fcb-af38-4f1a-a57e-200df7327489', 'Star5', 'Amazing Content, Very useful!', 'I really had an amazing and fun time with this course. I find comfort in the instructor’s way of teaching being light yet noteworthy. He really carefully guides students even with zero knowledge in anything. I would recommend this course to beginners who are interested in entering the world of Web Design.', '2022-10-21 20:53:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `emailVerified` tinyint(1) NOT NULL DEFAULT 0,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user','author','worker') NOT NULL DEFAULT 'user',
  `rating` int(11) NOT NULL DEFAULT 0,
  `bio` varchar(255) NOT NULL DEFAULT 'newbie',
  `about` text DEFAULT NULL,
  `image` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `email`, `emailVerified`, `password`, `role`, `rating`, `bio`, `about`, `image`, `createdAt`, `updatedAt`) VALUES
('56f69e3e-9a4e-4d7e-92e4-a3fe30806c8e', 'fahddsf', 'dasf', 'fhakdsfem75@gmail.com', 1, '$2b$10$U6WLxl/l7rCQqQWEUH2ZheYoc2A8G8mYthTXgB8YNVkfeNrt5my/i', 'user', 0, 'newbie', NULL, 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg', '2022-10-16 10:08:32', '2022-10-16 10:08:32'),
('79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'fahd', 'haekm', 'fhakem75@gmail.com', 1, '$2b$10$Mjyo.HgbDCDLudlEM/2D/udLAO4Ypnkn/gG5.x2x6nMsvw1afsjHq', 'user', 0, 'newbie', NULL, 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg', '2022-10-12 12:17:02', '2022-10-12 12:17:02'),
('b0cd7481-4c3c-11ed-a729-0045e21c18f1', 'Retag', 'halem', 'fahdhakem48@gmail.com', 1, 'jkhjkhjkhjkhj', 'user', 0, 'newbie', NULL, 'https://imgs.search.brave.com/X9sJBM7lAJxSLeMqncU7xp3DQhWauC5oQUu3R-WaV80/rs:fit:284:160:1/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53d3cubWFu/YWdlci1tYWdhemlu/LmRlL2ltYWdlcy8y/NWFmYmM3NS0wMDAx/LTAwMDQtMDAwMC0w/MDAwMDA5NTg4OTZf/dzI4NF9yMS43N19m/cHg0Ny41Nl9mcHk0/Ni45NS5qcGc', '2022-10-13 20:29:02', '2022-10-13 20:29:02'),
('c1bdb2a9-4c3c-11ed-a729-0045e21c18f1', 'mohamrd', 'halem', 'fahdhakem48@gmail.com', 1, 'jkhjkhjkhjkhj', 'user', 0, 'newbie', NULL, 'https://imgs.search.brave.com/X9sJBM7lAJxSLeMqncU7xp3DQhWauC5oQUu3R-WaV80/rs:fit:284:160:1/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53d3cubWFu/YWdlci1tYWdhemlu/LmRlL2ltYWdlcy8y/NWFmYmM3NS0wMDAx/LTAwMDQtMDAwMC0w/MDAwMDA5NTg4OTZf/dzI4NF9yMS43N19m/cHg0Ny41Nl9mcHk0/Ni45NS5qcGc', '2022-10-13 20:29:02', '2022-10-13 20:29:02'),
('ced26f10-4c3c-11ed-a729-0045e21c18f1', 'Ali', 'halem', 'fahdhakem48@gmail.com', 1, 'jkhjkhjkhjkhj', 'user', 0, 'newbie', NULL, 'https://imgs.search.brave.com/X9sJBM7lAJxSLeMqncU7xp3DQhWauC5oQUu3R-WaV80/rs:fit:284:160:1/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53d3cubWFu/YWdlci1tYWdhemlu/LmRlL2ltYWdlcy8y/NWFmYmM3NS0wMDAx/LTAwMDQtMDAwMC0w/MDAwMDA5NTg4OTZf/dzI4NF9yMS43N19m/cHg0Ny41Nl9mcHk0/Ni45NS5qcGc', '2022-10-13 20:29:02', '2022-10-13 20:29:02'),
('d23e5fcb-af38-4f1a-a57e-200df7327489', 'fahd', 'Hakem', 'fhakem745@gmail.com', 1, '$2b$10$q0loA3SPcMrXnUJ1XruS0OtY8s4YL4yP5OMkJ.oDNt/44QbJ1AdxC', 'user', 0, 'newbie', NULL, 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg', '2022-10-16 10:09:02', '2022-10-16 10:09:02');

-- --------------------------------------------------------

--
-- Table structure for table `userSkills`
--

CREATE TABLE `userSkills` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `categoryId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userSubmissions`
--

CREATE TABLE `userSubmissions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quizId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `grade` int(11) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userTracks`
--

CREATE TABLE `userTracks` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `trackId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` enum('Pending','Done') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allMessages`
--
ALTER TABLE `allMessages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usersId` (`usersId`);

--
-- Indexes for table `Assignments`
--
ALTER TABLE `Assignments`
  ADD PRIMARY KEY (`assignmentId`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Certificates`
--
ALTER TABLE `Certificates`
  ADD PRIMARY KEY (`certificateid`),
  ADD KEY `trackId` (`trackId`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `correctAnswers`
--
ALTER TABLE `correctAnswers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questionId` (`questionId`),
  ADD KEY `answerId` (`answerId`);

--
-- Indexes for table `courseCategories`
--
ALTER TABLE `courseCategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `courseContents`
--
ALTER TABLE `courseContents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `Courses`
--
ALTER TABLE `Courses`
  ADD PRIMARY KEY (`courseId`);

--
-- Indexes for table `Hackathons`
--
ALTER TABLE `Hackathons`
  ADD PRIMARY KEY (`hackthonId`);

--
-- Indexes for table `interests`
--
ALTER TABLE `interests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `commentId` (`commentId`),
  ADD KEY `replyId` (`replyId`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `senderId` (`senderId`),
  ADD KEY `receiverId` (`receiverId`);

--
-- Indexes for table `postComments`
--
ALTER TABLE `postComments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `postFriends`
--
ALTER TABLE `postFriends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `postReplies`
--
ALTER TABLE `postReplies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commentId` (`commentId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Projects`
--
ALTER TABLE `Projects`
  ADD PRIMARY KEY (`projectId`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `questionAnswers`
--
ALTER TABLE `questionAnswers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questionId` (`questionId`);

--
-- Indexes for table `quizeContents`
--
ALTER TABLE `quizeContents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quizeId` (`quizeId`);

--
-- Indexes for table `Quizesses`
--
ALTER TABLE `Quizesses`
  ADD PRIMARY KEY (`quizeId`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `quizQuestions`
--
ALTER TABLE `quizQuestions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quizId` (`quizId`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`),
  ADD KEY `trackId` (`trackId`);

--
-- Indexes for table `resetcodes`
--
ALTER TABLE `resetcodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `trackCourses`
--
ALTER TABLE `trackCourses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trackId` (`trackId`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `Tracks`
--
ALTER TABLE `Tracks`
  ADD PRIMARY KEY (`trackId`);

--
-- Indexes for table `userAssignments`
--
ALTER TABLE `userAssignments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assignmentId` (`assignmentId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `trackId` (`trackId`);

--
-- Indexes for table `userCourses`
--
ALTER TABLE `userCourses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `userExperiences`
--
ALTER TABLE `userExperiences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `userFriends`
--
ALTER TABLE `userFriends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `friendId` (`friendId`);

--
-- Indexes for table `userHackthons`
--
ALTER TABLE `userHackthons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `hackthonId` (`hackthonId`);

--
-- Indexes for table `userInterests`
--
ALTER TABLE `userInterests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `interestId` (`interestId`);

--
-- Indexes for table `userPosts`
--
ALTER TABLE `userPosts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `commentId` (`commentId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `userProjects`
--
ALTER TABLE `userProjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `userRates`
--
ALTER TABLE `userRates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`),
  ADD KEY `trackId` (`trackId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `userSkills`
--
ALTER TABLE `userSkills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `userSubmissions`
--
ALTER TABLE `userSubmissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `quizId` (`quizId`);

--
-- Indexes for table `userTracks`
--
ALTER TABLE `userTracks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `trackId` (`trackId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userFriends`
--
ALTER TABLE `userFriends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `allMessages`
--
ALTER TABLE `allMessages`
  ADD CONSTRAINT `allMessages_ibfk_1` FOREIGN KEY (`usersId`) REFERENCES `messages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Assignments`
--
ALTER TABLE `Assignments`
  ADD CONSTRAINT `Assignments_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Certificates`
--
ALTER TABLE `Certificates`
  ADD CONSTRAINT `Certificates_ibfk_1` FOREIGN KEY (`trackId`) REFERENCES `Tracks` (`trackId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Certificates_ibfk_2` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `correctAnswers`
--
ALTER TABLE `correctAnswers`
  ADD CONSTRAINT `correctAnswers_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `quizQuestions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `correctAnswers_ibfk_2` FOREIGN KEY (`answerId`) REFERENCES `questionAnswers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `courseCategories`
--
ALTER TABLE `courseCategories`
  ADD CONSTRAINT `courseCategories_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `courseCategories_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `courseContents`
--
ALTER TABLE `courseContents`
  ADD CONSTRAINT `courseContents_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`commentId`) REFERENCES `postComments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_ibfk_3` FOREIGN KEY (`replyId`) REFERENCES `postReplies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiverId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `postComments`
--
ALTER TABLE `postComments`
  ADD CONSTRAINT `postComments_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postComments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `postFriends`
--
ALTER TABLE `postFriends`
  ADD CONSTRAINT `postFriends_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postFriends_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `postReplies`
--
ALTER TABLE `postReplies`
  ADD CONSTRAINT `postReplies_ibfk_1` FOREIGN KEY (`commentId`) REFERENCES `postComments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postReplies_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Projects`
--
ALTER TABLE `Projects`
  ADD CONSTRAINT `Projects_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `questionAnswers`
--
ALTER TABLE `questionAnswers`
  ADD CONSTRAINT `questionAnswers_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `quizQuestions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quizeContents`
--
ALTER TABLE `quizeContents`
  ADD CONSTRAINT `quizeContents_ibfk_1` FOREIGN KEY (`quizeId`) REFERENCES `Quizesses` (`quizeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Quizesses`
--
ALTER TABLE `Quizesses`
  ADD CONSTRAINT `Quizesses_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quizQuestions`
--
ALTER TABLE `quizQuestions`
  ADD CONSTRAINT `quizQuestions_ibfk_1` FOREIGN KEY (`quizId`) REFERENCES `quizzes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD CONSTRAINT `quizzes_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quizzes_ibfk_2` FOREIGN KEY (`trackId`) REFERENCES `Tracks` (`trackId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `resetcodes`
--
ALTER TABLE `resetcodes`
  ADD CONSTRAINT `resetcodes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trackCourses`
--
ALTER TABLE `trackCourses`
  ADD CONSTRAINT `trackCourses_ibfk_1` FOREIGN KEY (`trackId`) REFERENCES `Tracks` (`trackId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trackCourses_ibfk_2` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userAssignments`
--
ALTER TABLE `userAssignments`
  ADD CONSTRAINT `userAssignments_ibfk_1` FOREIGN KEY (`assignmentId`) REFERENCES `Assignments` (`assignmentId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userAssignments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userAssignments_ibfk_3` FOREIGN KEY (`trackId`) REFERENCES `Tracks` (`trackId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userCourses`
--
ALTER TABLE `userCourses`
  ADD CONSTRAINT `userCourses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userCourses_ibfk_2` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userExperiences`
--
ALTER TABLE `userExperiences`
  ADD CONSTRAINT `userExperiences_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userFriends`
--
ALTER TABLE `userFriends`
  ADD CONSTRAINT `userFriends_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userFriends_ibfk_2` FOREIGN KEY (`friendId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userHackthons`
--
ALTER TABLE `userHackthons`
  ADD CONSTRAINT `userHackthons_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userHackthons_ibfk_2` FOREIGN KEY (`hackthonId`) REFERENCES `Hackathons` (`hackthonId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userInterests`
--
ALTER TABLE `userInterests`
  ADD CONSTRAINT `userInterests_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userInterests_ibfk_2` FOREIGN KEY (`interestId`) REFERENCES `interests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userPosts`
--
ALTER TABLE `userPosts`
  ADD CONSTRAINT `userPosts_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userPosts_ibfk_2` FOREIGN KEY (`commentId`) REFERENCES `postComments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userPosts_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userProjects`
--
ALTER TABLE `userProjects`
  ADD CONSTRAINT `userProjects_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userProjects_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `Projects` (`projectId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userRates`
--
ALTER TABLE `userRates`
  ADD CONSTRAINT `userRates_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userRates_ibfk_2` FOREIGN KEY (`trackId`) REFERENCES `Tracks` (`trackId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userRates_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userSkills`
--
ALTER TABLE `userSkills`
  ADD CONSTRAINT `userSkills_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userSubmissions`
--
ALTER TABLE `userSubmissions`
  ADD CONSTRAINT `userSubmissions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userSubmissions_ibfk_2` FOREIGN KEY (`quizId`) REFERENCES `quizzes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userTracks`
--
ALTER TABLE `userTracks`
  ADD CONSTRAINT `userTracks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userTracks_ibfk_2` FOREIGN KEY (`trackId`) REFERENCES `Tracks` (`trackId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
