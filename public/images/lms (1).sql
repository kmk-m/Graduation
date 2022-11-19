INSERT INTO `users` (`userId`, `firstName`, `lastName`, `email`, `emailVerified`, `password`, `role`, `rating`, `bio`, `about`, `image`, `createdAt`, `updatedAt`) VALUES
('79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'fahd', 'haekm', 'fhakem75@gmail.com', 1, '$2b$10$Mjyo.HgbDCDLudlEM/2D/udLAO4Ypnkn/gG5.x2x6nMsvw1afsjHq', 'user', 0, 'newbie', NULL, 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg', '2022-10-12 12:17:02', '2022-10-12 12:17:02'),
('b0cd7481-4c3c-11ed-a729-0045e21c18f1', 'Retag', 'halem', 'fahdhakem48@gmail.com', 1, 'jkhjkhjkhjkhj', 'user', 0, 'newbie', NULL, 'https://imgs.search.brave.com/X9sJBM7lAJxSLeMqncU7xp3DQhWauC5oQUu3R-WaV80/rs:fit:284:160:1/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53d3cubWFu/YWdlci1tYWdhemlu/LmRlL2ltYWdlcy8y/NWFmYmM3NS0wMDAx/LTAwMDQtMDAwMC0w/MDAwMDA5NTg4OTZf/dzI4NF9yMS43N19m/cHg0Ny41Nl9mcHk0/Ni45NS5qcGc', '2022-10-13 20:29:02', '2022-10-13 20:29:02'),
('c1bdb2a9-4c3c-11ed-a729-0045e21c18f1', 'mohamrd', 'halem', 'fahdhakem48@gmail.com', 1, 'jkhjkhjkhjkhj', 'user', 0, 'newbie', NULL, 'https://imgs.search.brave.com/X9sJBM7lAJxSLeMqncU7xp3DQhWauC5oQUu3R-WaV80/rs:fit:284:160:1/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53d3cubWFu/YWdlci1tYWdhemlu/LmRlL2ltYWdlcy8y/NWFmYmM3NS0wMDAx/LTAwMDQtMDAwMC0w/MDAwMDA5NTg4OTZf/dzI4NF9yMS43N19m/cHg0Ny41Nl9mcHk0/Ni45NS5qcGc', '2022-10-13 20:29:02', '2022-10-13 20:29:02'),
('ced26f10-4c3c-11ed-a729-0045e21c18f1', 'Ali', 'halem', 'fahdhakem48@gmail.com', 1, 'jkhjkhjkhjkhj', 'user', 0, 'newbie', NULL, 'https://imgs.search.brave.com/X9sJBM7lAJxSLeMqncU7xp3DQhWauC5oQUu3R-WaV80/rs:fit:284:160:1/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53d3cubWFu/YWdlci1tYWdhemlu/LmRlL2ltYWdlcy8y/NWFmYmM3NS0wMDAx/LTAwMDQtMDAwMC0w/MDAwMDA5NTg4OTZf/dzI4NF9yMS43N19m/cHg0Ny41Nl9mcHk0/Ni45NS5qcGc', '2022-10-13 20:29:02', '2022-10-13 20:29:02'),
('fd9714f2-4b24-11ed-b8b5-0045e21c18f1', 'talal', 'halem', 'fahdhakem48@gmail.com', 1, 'jkhjkhjkhjkhj', 'user', 0, 'newbie', NULL, 'https://imgs.search.brave.com/X9sJBM7lAJxSLeMqncU7xp3DQhWauC5oQUu3R-WaV80/rs:fit:284:160:1/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53d3cubWFu/YWdlci1tYWdhemlu/LmRlL2ltYWdlcy8y/NWFmYmM3NS0wMDAx/LTAwMDQtMDAwMC0w/MDAwMDA5NTg4OTZf/dzI4NF9yMS43N19m/cHg0Ny41Nl9mcHk0/Ni45NS5qcGc', '2022-10-13 20:29:02', '2022-10-13 20:29:02');


INSERT INTO `Tracks` (`trackId`, `name`, `image`, `introVideo`, `courseId`, `description`, `plan`) VALUES
('f04517eb-3f57-11ed-b255-0045e21c18f1', 'Frontend Development', 'https://1.bp.blogspot.com/-H2TsSyKzdu4/X1ZNJBZryZI/AAAAAAAACtU/', 'https://1.bp.blogspot.com/-H2TsSyKzdu4/X1ZNJBZryZI/AAAAAAAACtU/gpkP6W7rU7oFzjc3idN0Ekf6vkzHE3hWQCNcBGAsYHQ/s673/h.jpg', '0', 'Now, we are looking for a sponsor to help our team participate in the upcoming Africa and Arab Collegiate Programming Championship (ACPC). Participating in the ACPC requires payment of expensive registration fees, which our team can\'t afford, so we need a sponsor to help us so that we can compete in the championship.', 'This year, our team (Katakeet) of Tanta University participated in the Egyptian Collegiate Programming Contest (ECPC), the biggest programming competition in Egypt. We managed to get 1st place across all Tanta University teams who participated. We also placed 20th across Egypt and we won a bronze medal for only the second time in the history of Tanta University.\r\n\r\nNow, we are looking for a sponsor to help our team participate in the upcoming Africa and Arab Collegiate Programming Championship (ACPC). Participating in the ACPC requires payment of expensive registration fees, which our team can\'t afford, so we need a sponsor to help us so that we can compete in the championship.');




INSERT INTO `Courses` (`courseId`, `name`, `image`, `rating`, `coursePlan`, `introVideo`, `description`, `duration`, `instructor`, `students`, `language`, `baseCourse`, `allow`, `numberOfAssignments`, `numberOfQuizess`, `numberOfProjects`, `createdAt`) VALUES
('1673637c-3f57-11ed-b255-0045e21c18f1', 'React - Beginner to Advanced 2022 (+ Redux & Ecommerce App)', 'https://html.com/wp-content/uploads/html-hpg-featured-new.png', 50, 'gkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkvvvv', 'https://youtu.be/tkn78AkT1aI', 'https://youtu.be/tkn78AkT1aIhttps://youtu.be/tkn78AkT1aI', '1216', 'fahd hakem', 1, 'Arabic', NULL, 1, 1, 0, 1, '2022-09-28 19:56:37'),
('33345558-411d-11ed-b422-0045e21c18f1', 'React Tutorial and Projects Course (2022)', 'https://repository-images.githubusercontent.com/428080046/8073eeb4-3a1a-4066-ac50-4bf75259756c', 80, 'hello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from css', 'hello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from csshello from css', 'hello from csshello from css', '20', 'fahd hakem', 20, 'English', NULL, 0, 4, 6, 4, '2022-10-01 02:06:22'),
('4ecbb59f-4145-11ed-b8c1-0045e21c18f1', 'Flutter & Dart for Beginners: Complete Course [2022 Latest]', 'https://cdn.sanity.io/images/s7xbv9bz/production/1562d4dae8dc03456edca898e89c0f39ae086a8f-1600x1000.png?w=1200&h=750&auto=format&fm=webp', 44, 'Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.', 'Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.', 'Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.', '20', 'Mohamed Gamal', 2, 'Arabic', NULL, 0, 1, 1, 1, '2022-10-01 06:54:17'),
('d25cb012-4144-11ed-b8c1-0045e21c18f1', 'Next.js & React - The Complete Guide (incl. Two Paths!)', 'data:image/jpeg;base64,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', 100, 'Build Full Stack Application from Scratch with MongoDB, Express, React and NodeJS\r\n\r\nLearn how to implement JWT for authentication and authorization', 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello', 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello', '20', 'Amany Mohamed', 20, 'English', NULL, 0, 1, 1, 1, '2022-10-01 06:50:09');

INSERT INTO `Assignments` (`assignmentId`, `name`, `courseId`, `details`, `createdAt`) VALUES
('0f2fd64e-3f7d-11ed-b255-0045e21c18f1', 'Add url', '1673637c-3f57-11ed-b255-0045e21c18f1', '* make file html,\r\n* make file css,\r\n* make h1 type in it hello world,\r\n* style it with color red', '2022-09-28 19:58:06'),
('3a246c2b-3f57-11ed-b255-0045e21c18f1', 'Hello world', '1673637c-3f57-11ed-b255-0045e21c18f1', '* make file html,\r\n* make file css,\r\n* make h1 type in it hello world,\r\n* style it with color red,', '2022-09-28 19:58:06'),
('b07ae669-3fd7-11ed-a5b7-0045e21c18f1', 'Add image', '1673637c-3f57-11ed-b255-0045e21c18f1', '* make file html,\r\n* make file css,\r\n* make h1 type in it hello world,\r\n* style it with color red,', '2022-09-28 03:58:06');

INSERT INTO `Hackathons` (`hackthonId`, `name`, `type`, `date`, `round`, `duoDate`, `users`, `link`) VALUES
('2beeefbc-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:12:06', 1, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('7493befd-57dd-11ed-a35d-0045e21c18f1', 'Frontend', 'photo', '2022-11-10 00:48:46', 2, '2022-11-23 00:48:46', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('a18ed4e9-57dc-11ed-a35d-0045e21c18f1', 'Frontend', 'photo', '2022-10-30 00:48:46', 1, '2022-11-23 00:48:46', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b2402072-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:12:06', 2, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b251dc08-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:13:06', 3, '2022-10-24 01:13:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b2557e7a-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:14:06', 4, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b2598429-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:15:06', 5, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b25ec0b2-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:16:06', 6, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b263f263-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:17:06', 7, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b2690ee3-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:18:06', 8, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b26e2783-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:19:06', 9, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b2731a89-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:20:06', 10, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b282a671-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:21:06', 11, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b287d755-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:22:06', 12, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('b28ce4e1-57df-11ed-a35d-0045e21c18f1', 'Backend', 'photo', '2022-10-19 01:23:06', 13, '2022-10-24 01:12:06', 1, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');

INSERT INTO `hackathonQuestions` (`id`, `userId`, `hackthonId`, `question`, `answer`) VALUES
('453500df-57dd-11ed-a35d-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'a18ed4e9-57dc-11ed-a35d-0045e21c18f1', 'Where is Egypt?', 'Egypt'),
('bf29fba7-57e2-11ed-a35d-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'b28ce4e1-57df-11ed-a35d-0045e21c18f1', 'what is Egypt?', 'بطاطس محمره');


INSERT INTO `hackathonRequirments` (`id`, `hackthonId`, `content`) VALUES
('2208ac2d-57dd-11ed-a35d-0045e21c18f1', 'a18ed4e9-57dc-11ed-a35d-0045e21c18f1', 'make Messanger App'),
('2874679c-57dd-11ed-a35d-0045e21c18f1', 'a18ed4e9-57dc-11ed-a35d-0045e21c18f1', 'Data must be secure'),
('2f46e196-57dd-11ed-a35d-0045e21c18f1', 'a18ed4e9-57dc-11ed-a35d-0045e21c18f1', 'Add Authentication with Face and Password'),
('5fa4d276-57e2-11ed-a35d-0045e21c18f1', '2beeefbc-57df-11ed-a35d-0045e21c18f1', 'make Messanger App'),
('671e4237-57e2-11ed-a35d-0045e21c18f1', 'b25ec0b2-57df-11ed-a35d-0045e21c18f1', 'make Messanger App'),
('6ff69fa5-57e2-11ed-a35d-0045e21c18f1', 'b26e2783-57df-11ed-a35d-0045e21c18f1', 'make Messanger App'),
('79d2da26-57e2-11ed-a35d-0045e21c18f1', 'b28ce4e1-57df-11ed-a35d-0045e21c18f1', 'make Messanger App'),
('8477e419-57e2-11ed-a35d-0045e21c18f1', 'b251dc08-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('89269808-57e2-11ed-a35d-0045e21c18f1', 'b263f263-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('8e8156f8-57e2-11ed-a35d-0045e21c18f1', 'b282a671-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('9564e9fc-57e2-11ed-a35d-0045e21c18f1', 'b287d755-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('9dad243c-57e2-11ed-a35d-0045e21c18f1', 'b2557e7a-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('a0bb2ea4-57e2-11ed-a35d-0045e21c18f1', 'b2598429-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('a31d8afd-57e2-11ed-a35d-0045e21c18f1', 'b2402072-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('a593ee1b-57e2-11ed-a35d-0045e21c18f1', 'b2731a89-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('a892c48e-57e2-11ed-a35d-0045e21c18f1', 'b2690ee3-57df-11ed-a35d-0045e21c18f1', 'Hello world'),
('c987089b-57dd-11ed-a35d-0045e21c18f1', '7493befd-57dd-11ed-a35d-0045e21c18f1', 'make Messanger App'),
('d4f1a9cc-57dd-11ed-a35d-0045e21c18f1', '7493befd-57dd-11ed-a35d-0045e21c18f1', 'Add Authentication with Face and Password');





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


INSERT INTO `messages` (`id`, `senderId`, `receiverId`, `message`, `read`, `createdAt`) VALUES
('4670ddd9-55af-11ed-aaf6-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'b0cd7481-4c3c-11ed-a729-0045e21c18f1', 'ds', 0, '2022-10-27 06:24:31'),
('8ef57f4a-55a7-11ed-aaf6-0045e21c18f1', 'b0cd7481-4c3c-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'yes', 0, '2022-10-27 05:29:11');

INSERT INTO `posts` (`id`, `content`, `link`, `upVote`, `downVote`) VALUES
('6b51e5d4-4c0b-11ed-a729-0045e21c18f1', 'Unofficial design For Sab7o-Korah (YouTube thumbnail)\r\nBy Using Manipulation techniques (Photoshop)', '/images/cat-04.jpg', 0, 0),
('a6e3662c-4c0b-11ed-a729-0045e21c18f1', 'Motivational factors in the company environment.\r\n\r\n', '/images/cat-01.jpg', 0, 0);


INSERT INTO `postComments` (`id`, `postId`, `userId`, `comment`, `image`, `upVote`, `updatedAt`) VALUES
('065974b8-254e-4aef-8652-37cfb2a9db9e', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'yes', NULL, 0, '2022-11-01 23:48:50'),
('11508b50-17ff-4fc4-827e-1eb472e52255', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '12', NULL, 0, '2022-11-01 23:47:53'),
('1619ff31-50d6-4e0e-95e8-0ef712cf2f3f', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'yes', NULL, 0, '2022-11-04 04:32:43'),
('2c2ba3aa-79c6-4964-b84d-2d43b626d46c', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'yes1', NULL, 0, '2022-11-04 04:03:11'),
('34267cc5-b538-4088-9762-36eb5b5379ec', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '10', NULL, 0, '2022-11-04 04:42:23'),
('4fa73042-e1e1-43d7-ada8-9258d4f381ff', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '10', NULL, 0, '2022-11-04 04:38:19'),
('76fdb44d-534a-42e9-a51c-d06626e68fcd', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'hello', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-04T05:00:55.922Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0323-41-54.png', 0, '2022-11-04 05:00:55'),
('786c8b42-04a1-4d4c-b907-4751b9f90bc1', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'var', NULL, 0, '2022-11-01 23:47:31'),
('7a2b8696-e18d-4f92-906e-d9eb83946df6', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '12', NULL, 0, '2022-11-04 04:35:31'),
('878a2eb0-5bf8-4c7c-8279-3214fedd82c8', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '10', NULL, 0, '2022-11-04 04:40:46'),
('98b91590-ae4c-40ba-ac29-4020cc1070c0', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '1', NULL, 0, '2022-11-04 04:51:31'),
('a08d3386-f956-4ca2-9606-0cc3426c8488', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'hello3', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-04T03:46:13.557Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0323-55-32.png', 0, '2022-11-04 04:02:29'),
('adbfd661-ec73-43d7-a490-c29373884a20', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'okey1', NULL, 0, '2022-11-04 04:04:43'),
('b2ce3d6f-c4e0-4b73-baff-371b019565ef', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '1', NULL, 0, '2022-11-04 04:43:51'),
('c3619493-f51d-43eb-bbb0-495b1674cb68', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '1', NULL, 0, '2022-11-04 04:56:12'),
('c5f1a0ff-4002-494c-afed-47f10b5d92de', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'hi', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-01T23:45:08.875Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-10-2702-09-21.png', 0, '2022-11-01 23:45:08'),
('d792d54a-e36a-4d34-bcd2-6b1e0999e6c4', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'bom', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-01T23:47:25.107Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-10-2702-09-21.png', 0, '2022-11-01 23:47:25'),
('e5e05d13-8dfb-4e28-9819-da20a9b278d7', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '10', NULL, 0, '2022-11-04 04:39:26'),
('e92bce30-55e5-43a3-8d3f-8666d398003a', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'ui2', NULL, 0, '2022-11-04 04:05:21'),
('eb1afd1a-0a5f-4853-ba0e-87cc8c571ab8', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'hello', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-01T23:29:02.046Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-10-2816-04-48.png', 0, '2022-11-01 23:29:02'),
('ef7588ae-3d79-4159-a323-35ea44b35a0b', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '1', NULL, 0, '2022-11-04 04:53:31'),
('ef9df5f4-37be-430f-83d2-569bb253ffb0', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'hello', NULL, 0, '2022-11-02 11:07:29'),
('f1180b9e-7b11-46b3-99a6-3910abe8a1da', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'hi', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-02T11:07:39.086Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0202-48-04.png', 0, '2022-11-02 11:07:39'),
('f1e10639-3d39-477f-8f75-981955c25d23', 'a6e3662c-4c0b-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '1', NULL, 0, '2022-11-04 04:49:26'),
('f63f7ba6-e121-406e-bca8-225f59ef7273', '6b51e5d4-4c0b-11ed-a729-0045e21c18f1', 

INSERT INTO `postReplies` (`id`, `commentId`, `userId`, `image`, `reply`, `upVote`, `updatedAt`) VALUES
('08329264-afe3-41f7-af6c-cbad1cc03ad7', '34267cc5-b538-4088-9762-36eb5b5379ec', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 11', 0, '2022-11-04 04:42:26'),
('1010f884-0080-4df6-8c92-3657ce42a72c', 'a08d3386-f956-4ca2-9606-0cc3426c8488', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm hello3', 0, '2022-11-04 00:02:59'),
('11754e02-8b1e-444d-80ff-9cc197292c14', '1619ff31-50d6-4e0e-95e8-0ef712cf2f3f', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 23', 0, '2022-11-04 04:32:49'),
('16d889f7-f3f8-43a5-aa93-0aa35a80c00f', 'f63f7ba6-e121-406e-bca8-225f59ef7273', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm hai', 0, '2022-11-04 04:07:19'),
('23de83f4-5883-47f2-947c-dd31b2c0ce4e', 'f63f7ba6-e121-406e-bca8-225f59ef7273', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-04T03:17:36.056Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0323-55-32.png', 'fahd haekm yes', 0, '2022-11-04 03:17:36'),
('2c4a67d1-6cb8-4d28-af0f-540f051f0bcf', '76fdb44d-534a-42e9-a51c-d06626e68fcd', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-04T03:07:51.332Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0323-55-32.png', 'fahd haekm yes', 0, '2022-11-04 03:07:51'),
('3b5af33c-bdd2-4687-ba9e-cd4288967343', 'f1e10639-3d39-477f-8f75-981955c25d23', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 3', 0, '2022-11-04 04:49:40'),
('3dc6f6c9-a14d-4148-a8a1-a1ba53422174', 'f63f7ba6-e121-406e-bca8-225f59ef7273', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-02T07:50:47.701Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0209-15-44.png', 'يلا ', 0, '2022-11-02 07:50:47'),
('3fe2b72d-aba6-4fde-a6d2-2c5ca691bb52', 'e92bce30-55e5-43a3-8d3f-8666d398003a', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm ui1', 0, '2022-11-04 04:06:32'),
('47932196-cb6d-4157-ba5e-0d338639d969', '98b91590-ae4c-40ba-ac29-4020cc1070c0', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 2', 0, '2022-11-04 04:51:35'),
('4b0cd8f3-d987-4042-9a57-4ba543c39edf', 'adbfd661-ec73-43d7-a490-c29373884a20', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-04T00:36:57.127Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0323-55-32.png', 'fahd haekm okey1', 0, '2022-11-04 00:36:57'),
('4b84d5e7-a34e-4c69-866f-bb0dd40f1e43', 'adbfd661-ec73-43d7-a490-c29373884a20', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm okry2', 0, '2022-11-04 00:07:26'),
('4f2dcb71-e4d1-4ab2-8ea9-fe9ed8316007', 'b2ce3d6f-c4e0-4b73-baff-371b019565ef', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 2', 0, '2022-11-04 04:43:55'),
('52683369-544c-4830-93bf-84c893ad23b5', 'e92bce30-55e5-43a3-8d3f-8666d398003a', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-03T20:00:46.793Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-10-2703-00-55.png', 'fahd haekm ui2', 0, '2022-11-03 20:00:46'),
('530ca4a5-821d-483a-86fa-e89a6af061c5', '878a2eb0-5bf8-4c7c-8279-3214fedd82c8', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 12', 0, '2022-11-04 04:40:53'),
('54cf0fbd-4d41-4a21-9bd3-dd0995de997b', '76fdb44d-534a-42e9-a51c-d06626e68fcd', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm jiz', 0, '2022-11-04 04:35:10'),
('5c3c9a5d-30a1-4ca4-976c-2c716fcc3e3e', 'ef7588ae-3d79-4159-a323-35ea44b35a0b', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 2', 0, '2022-11-04 04:53:40'),
('5fdaa82f-d545-4c65-b3f0-bb27fbc680aa', 'f63f7ba6-e121-406e-bca8-225f59ef7273', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-02T07:49:37.666Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0202-48-04.png', 'جامد تاني ', 0, '2022-11-02 07:49:37'),
('649ae021-780a-4b6f-a752-996a1545708a', '76fdb44d-534a-42e9-a51c-d06626e68fcd', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-04T03:01:41.730Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0323-55-32.png', 'fahd haekm yalla', 0, '2022-11-04 03:01:41'),
('6786b6f3-2809-4b7b-9864-bf61a56e9816', '4fa73042-e1e1-43d7-ada8-9258d4f381ff', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 11', 0, '2022-11-04 04:38:24'),
('69bc29bc-51e7-4711-944d-e55675c1851f', '7a2b8696-e18d-4f92-906e-d9eb83946df6', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 13', 0, '2022-11-04 04:35:36'),
('7691bd4a-b746-40c7-bcca-aac248646023', '76fdb44d-534a-42e9-a51c-d06626e68fcd', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm lock', 0, '2022-11-04 04:35:26'),
('775827fb-2105-4e3b-81e1-61dd15688502', 'a08d3386-f956-4ca2-9606-0cc3426c8488', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm hello4', 0, '2022-11-04 00:03:38'),
('7e1899fa-473a-4b0f-b8da-79a1f0582f04', 'e5e05d13-8dfb-4e28-9819-da20a9b278d7', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 12', 0, '2022-11-04 04:39:36'),
('7f9a5225-c563-45b0-b513-68b606ff3fc5', 'f63f7ba6-e121-406e-bca8-225f59ef7273', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '/home/fa_hd/Desktop/Graduation/public/uploads/comments/2022-11-04T02:58:26.195Z-79a69d3d-5eff-47ed-ad23-14555afb7fbc-Screenshotfrom2022-11-0323-55-32.png', 'fahd haekm lol', 0, '2022-11-04 02:58:26'),
('7fc416db-df93-41db-8e47-6a4d09c78b79', 'c3619493-f51d-43eb-bbb0-495b1674cb68', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 2', 0, '2022-11-04 04:56:16'),
('8204fb64-4f35-490c-8cf9-be814004de03', '1619ff31-50d6-4e0e-95e8-0ef712cf2f3f', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 24', 0, '2022-11-04 04:32:55'),
('863777b6-0e8b-4905-bcd4-962715631c0a', 'f1180b9e-7b11-46b3-99a6-3910abe8a1da', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm fg', 0, '2022-11-02 11:07:44'),
('8c34ad58-3989-4e6c-8487-8a6414d3fc7e', 'f63f7ba6-e121-406e-bca8-225f59ef7273', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm jk', 0, '2022-11-02 11:21:15'),
('936343ab-b64c-428c-ae9b-bbdf711dbc11', '4fa73042-e1e1-43d7-ada8-9258d4f381ff', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 12', 0, '2022-11-04 04:38:27'),
('9849320a-baf4-47f3-a674-c1c97bd3a1f3', '7a2b8696-e18d-4f92-906e-d9eb83946df6', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 14', 0, '2022-11-04 04:35:40'),
('9e34fb9c-f8de-411c-9093-12ff7bc116c9', '98b91590-ae4c-40ba-ac29-4020cc1070c0', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 3', 0, '2022-11-04 04:51:39'),
('c3a8d739-852c-476e-92e7-365a975b2c43', '76fdb44d-534a-42e9-a51c-d06626e68fcd', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm ytt', 0, '2022-11-04 04:10:56'),
('c3f6dd60-6a8a-4571-a6cc-d2b11beff323', '878a2eb0-5bf8-4c7c-8279-3214fedd82c8', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 11', 0, '2022-11-04 04:40:49'),
('cae9bf4c-8a30-48af-a7ee-6178f1099319', '4fa73042-e1e1-43d7-ada8-9258d4f381ff', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 13', 0, '2022-11-04 04:38:33'),
('ceac21d6-91dd-4891-aecf-741f2f7bc476', 'b2ce3d6f-c4e0-4b73-baff-371b019565ef', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 3', 0, '2022-11-04 04:44:01'),
('db068e0d-8b7f-4d09-9650-82d39ca6dfb7', '76fdb44d-534a-42e9-a51c-d06626e68fcd', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm bol', 0, '2022-11-03 21:14:10'),
('dd1e8d22-2977-4cf3-97ce-72cb29159bb9', '34267cc5-b538-4088-9762-36eb5b5379ec', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 12', 0, '2022-11-04 04:42:31'),
('ea1ca73a-8e2c-41e2-9cfe-5079845b5bf9', 'f63f7ba6-e121-406e-bca8-225f59ef7273', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm جامد', 0, '2022-11-02 07:49:25'),
('ebd40b8f-af00-442d-ac82-df2d4d7f6866', 'c3619493-f51d-43eb-bbb0-495b1674cb68', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 3', 0, '2022-11-04 04:56:20'),
('f34c013e-481e-45f1-b39f-626573c353dc', 'e5e05d13-8dfb-4e28-9819-da20a9b278d7', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 11', 0, '2022-11-04 04:39:32'),
('f642c8e8-32ee-4d4d-8d2f-9fe612e5268a', 'f1e10639-3d39-477f-8f75-981955c25d23', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm 2', 0, '2022-11-04 04:49:32'),
('f6ca5cbc-285f-4538-af42-01c58ac81c6a', '2c2ba3aa-79c6-4964-b84d-2d43b626d46c', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm yes1', 0, '2022-11-04 00:04:41'),
('fd09ed09-6de1-47c9-b6f1-7d3eefc3aa44', 'f63f7ba6-e121-406e-bca8-225f59ef7273', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm rt', 0, '2022-11-02 07:21:36'),
('fd7b91cf-d9bb-4454-8f64-115f1b68c90a', '76fdb44d-534a-42e9-a51c-d06626e68fcd', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', NULL, 'fahd haekm yes2', 0, '2022-11-03 19:53:39');






INSERT INTO `Projects` (`projectId`, `name`, `courseId`, `requirement`) VALUES
('a30babfe-4c49-11ed-a729-0045e21c18f1', 'Chat HomePage', '4ecbb59f-4145-11ed-b8c1-0045e21c18f1', 'make Messanger App,Data must be secure,Add Authentication with Face and Password');

INSERT INTO `quizzes` (`id`, `name`, `courseId`, `trackId`, `Time`, `type`, `numberOfQuestions`) VALUES
('e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Introduction To Web Designer', NULL, 'f04517eb-3f57-11ed-b255-0045e21c18f1', '20', 'Quiz', 20);




INSERT INTO `quizQuestions` (`id`, `quizId`, `questionType`, `questionText`, `questionImage`, `questionGrade`) VALUES
('4065da4a-5ab5-11ed-9ff2-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'Where is Egypt ?', NULL, 1),
('712e3260-5ab5-11ed-9ff2-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'Where is Egypt ?', NULL, 1),
('71474ee9-5ab5-11ed-9ff2-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'Where is Opera ?', NULL, 1),
('714adcc6-5ab5-11ed-9ff2-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'Where is Mansora ?', NULL, 1),
('715a2448-5ab5-11ed-9ff2-0045e21c18f1', 'e9ea2a08-52dc-11ed-ac01-0045e21c18f1', 'Text', 'Where is Egypt2 ?', NULL, 1);





INSERT INTO `questionAnswers` (`id`, `questionId`, `answerType`, `answerText`, `answerImage`) VALUES
('1f925c77-5ab7-11ed-9ff2-0045e21c18f1', '714adcc6-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'egypt', NULL),
('3481bbcd-5ab7-11ed-9ff2-0045e21c18f1', '714adcc6-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'lbnan', NULL),
('3493ccf6-5ab7-11ed-9ff2-0045e21c18f1', '714adcc6-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'edsds', NULL),
('349df3b0-5ab7-11ed-9ff2-0045e21c18f1', '714adcc6-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'asaass', NULL),
('3d1ab24b-5ab7-11ed-9ff2-0045e21c18f1', '715a2448-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'yes', NULL),
('4c568938-5ab7-11ed-9ff2-0045e21c18f1', '715a2448-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'yes1', NULL),
('4c5f8c68-5ab7-11ed-9ff2-0045e21c18f1', '715a2448-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'yes2', NULL),
('4c6ea8ae-5ab7-11ed-9ff2-0045e21c18f1', '715a2448-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'yes3', NULL),
('5696b76d-5ab7-11ed-9ff2-0045e21c18f1', '4065da4a-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'Fol', NULL),
('67804768-5ab7-11ed-9ff2-0045e21c18f1', '4065da4a-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'Fol2', NULL),
('6796407b-5ab7-11ed-9ff2-0045e21c18f1', '4065da4a-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'Fol3', NULL),
('679e8af8-5ab7-11ed-9ff2-0045e21c18f1', '4065da4a-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'Fol4', NULL),
('6f476696-5ab7-11ed-9ff2-0045e21c18f1', '71474ee9-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'no', NULL),
('7d93e9dc-5ab7-11ed-9ff2-0045e21c18f1', '71474ee9-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'no2', NULL),
('7da469a8-5ab7-11ed-9ff2-0045e21c18f1', '71474ee9-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'no3', NULL),
('7da7d2d8-5ab7-11ed-9ff2-0045e21c18f1', '71474ee9-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'no4', NULL),
('834677b6-5ab5-11ed-9ff2-0045e21c18f1', '712e3260-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'Egypt', NULL),
('ae0e03ed-5ab5-11ed-9ff2-0045e21c18f1', '712e3260-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'giza', NULL),
('ae2aa751-5ab5-11ed-9ff2-0045e21c18f1', '712e3260-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'mansora', NULL),
('ae39e473-5ab5-11ed-9ff2-0045e21c18f1', '712e3260-5ab5-11ed-9ff2-0045e21c18f1', 'Text', 'jira', NULL);





INSERT INTO `trackCourses` (`id`, `trackId`, `courseId`, `show`) VALUES
('4d13b281-411d-11ed-b422-0045e21c18f1', 'f04517eb-3f57-11ed-b255-0045e21c18f1', '1673637c-3f57-11ed-b255-0045e21c18f1', '0'),
('64bf7416-4145-11ed-b8c1-0045e21c18f1', 'f04517eb-3f57-11ed-b255-0045e21c18f1', 'd25cb012-4144-11ed-b8c1-0045e21c18f1', '0\r\n'),
('d7a7c504-411c-11ed-b422-0045e21c18f1', 'f04517eb-3f57-11ed-b255-0045e21c18f1', '33345558-411d-11ed-b422-0045e21c18f1', '1'),
('f624000f-4144-11ed-b8c1-0045e21c18f1', 'f04517eb-3f57-11ed-b255-0045e21c18f1', '4ecbb59f-4145-11ed-b8c1-0045e21c18f1', '1');





INSERT INTO `userFriends` (`id`, `userId`, `friendId`) VALUES
('0f85f2a5-57be-11ed-a35d-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'ced26f10-4c3c-11ed-a729-0045e21c18f1'),
('2c679b8b-57bb-11ed-a35d-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'b0cd7481-4c3c-11ed-a729-0045e21c18f1'),
('308b9ac5-57bb-11ed-a35d-0045e21c18f1', 'b0cd7481-4c3c-11ed-a729-0045e21c18f1', 'fd9714f2-4b24-11ed-b8b5-0045e21c18f1');



INSERT INTO `userHackthons` (`id`, `userId`, `hackthonId`, `standing`, `points`, `time`, `solution`, `status`) VALUES
('093cb769-57e0-11ed-a35d-0045e21c18f1', 'ced26f10-4c3c-11ed-a729-0045e21c18f1', 'b251dc08-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('195aad4a-57e0-11ed-a35d-0045e21c18f1', 'ced26f10-4c3c-11ed-a729-0045e21c18f1', 'b263f263-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('25e90fe6-57e0-11ed-a35d-0045e21c18f1', 'ced26f10-4c3c-11ed-a729-0045e21c18f1', 'b282a671-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('2fc8bb5a-57e0-11ed-a35d-0045e21c18f1', 'fd9714f2-4b24-11ed-b8b5-0045e21c18f1', 'b287d755-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('389f2317-57e0-11ed-a35d-0045e21c18f1', 'c1bdb2a9-4c3c-11ed-a729-0045e21c18f1', 'b2557e7a-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('40173fb3-57e0-11ed-a35d-0045e21c18f1', 'c1bdb2a9-4c3c-11ed-a729-0045e21c18f1', 'b2690ee3-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('4b4316f1-57e0-11ed-a35d-0045e21c18f1', 'ced26f10-4c3c-11ed-a729-0045e21c18f1', 'b2731a89-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('4f6f51ab-57dd-11ed-a35d-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'a18ed4e9-57dc-11ed-a35d-0045e21c18f1', 0, 0, 0, NULL, 'NOTSUBMIT'),
('526007ed-57e0-11ed-a35d-0045e21c18f1', 'b0cd7481-4c3c-11ed-a729-0045e21c18f1', 'b2402072-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('59e7e8c4-57e0-11ed-a35d-0045e21c18f1', 'c1bdb2a9-4c3c-11ed-a729-0045e21c18f1', 'b2598429-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('810ed171-57dd-11ed-a35d-0045e21c18f1', 'fd9714f2-4b24-11ed-b8b5-0045e21c18f1', '7493befd-57dd-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('85daa842-57dd-11ed-a35d-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', '7493befd-57dd-11ed-a35d-0045e21c18f1', 0, 0, 0, NULL, 'NOTSUBMIT'),
('93d52129-57e0-11ed-a35d-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'b28ce4e1-57df-11ed-a35d-0045e21c18f1', 1, 20, 20000, 'https://github.com/', 'SUBMITED'),
('c5a36c8b-57df-11ed-a35d-0045e21c18f1', 'b0cd7481-4c3c-11ed-a729-0045e21c18f1', '2beeefbc-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('cec9dc2b-57df-11ed-a35d-0045e21c18f1', 'c1bdb2a9-4c3c-11ed-a729-0045e21c18f1', 'b25ec0b2-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('d1cfd8dd-57dc-11ed-a35d-0045e21c18f1', 'b0cd7481-4c3c-11ed-a729-0045e21c18f1', 'a18ed4e9-57dc-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('eb6471d8-57df-11ed-a35d-0045e21c18f1', 'fd9714f2-4b24-11ed-b8b5-0045e21c18f1', 'b26e2783-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT'),
('f5d3fe07-57df-11ed-a35d-0045e21c18f1', 'ced26f10-4c3c-11ed-a729-0045e21c18f1', 'b28ce4e1-57df-11ed-a35d-0045e21c18f1', -1, 0, 0, NULL, 'NOTSUBMIT');


INSERT INTO `userInterests` (`id`, `userId`, `interestId`) VALUES
('001297e5-4a28-11ed-a437-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'f2f2a768-4a27-11ed-a437-0045e21c18f1'),
('45773482-3f4b-42ab-805b-3fcdcf50812c', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'e88c164a-4a27-11ed-a437-0045e21c18f1'),
('9a36ad8b-6b1d-4ee9-b688-0e39beb5b37a', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'f2f2a768-4a27-11ed-a437-0045e21c18f1'),
('a4353623-df01-4f46-b787-57237193f5bf', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'ee803e65-4a27-11ed-a437-0045e21c18f1'),
('f826b0fd-4a27-11ed-a437-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'e88c164a-4a27-11ed-a437-0045e21c18f1'),
('fb94532d-4a27-11ed-a437-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'ee803e65-4a27-11ed-a437-0045e21c18f1');




INSERT INTO `userProjects` (`id`, `userId`, `projectId`, `name`, `description`, `link`, `status`, `Comment`, `updatedAt`) VALUES
('02b20b82-4c4a-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'a30babfe-4c49-11ed-a729-0045e21c18f1', 'Chating HomePage', 'make Messanger App,Data must be secure\r\n,Add Authentication with Face and Password', 'http://127.0.0.1/phpmyadmin/index.php?route=/table/change&db=lms&table=userProjects', 'Rejected', 'Not secure,Donot use Builtin Function', '2022-10-15 07:24:35'),
('3040f207-4c4a-11ed-a729-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'a30babfe-4c49-11ed-a729-0045e21c18f1', 'Chating HomePage', 'make Messanger App,Data must be secure\r\n,Add Authentication with Face and Password', 'http://127.0.0.1/phpmyadmin/index.php?route=/table/change&db=lms&table=userProjects', 'Accepted', 'Exellent,', '2022-10-15 07:24:35');


INSERT INTO `userRates` (`id`, `courseId`, `trackId`, `userId`, `rate`, `title`, `details`, `createdAt`) VALUES
('edfd04c8-55bd-11ed-aaf6-0045e21c18f1', NULL, 'f04517eb-3f57-11ed-b255-0045e21c18f1', '79a69d3d-5eff-47ed-ad23-14555afb7fbc', 'Star1', 'Amazing', 'AmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingv', '2022-10-27 08:09:07');




