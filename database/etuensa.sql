-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 29, 2024 at 06:44 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `etuensa`
--

-- --------------------------------------------------------

--
-- Table structure for table `attestation_reussites`
--

CREATE TABLE `attestation_reussites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `demande_id` bigint(20) UNSIGNED NOT NULL,
  `annee` varchar(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attestation_reussites`
--

INSERT INTO `attestation_reussites` (`id`, `demande_id`, `annee`, `created_at`, `updated_at`) VALUES
(1, 34, '2023', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 41, '2017', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 33, '2018', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 25, '2023', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 38, '2012', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 7, '2010', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(7, 46, '2023', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(8, 47, '2022', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(9, 8, '2015', '2024-12-28 15:43:06', '2024-12-28 15:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `attestation_scolarites`
--

CREATE TABLE `attestation_scolarites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `demande_id` bigint(20) UNSIGNED NOT NULL,
  `annee` varchar(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attestation_scolarites`
--

INSERT INTO `attestation_scolarites` (`id`, `demande_id`, `annee`, `created_at`, `updated_at`) VALUES
(1, 11, '2013', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 35, '2011', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 27, '2019', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 24, '2016', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 21, '2016', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 31, '2021', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(7, 29, '2013', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(8, 13, '2021', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(9, 22, '2013', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(10, 18, '2016', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(11, 28, '2010', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(12, 6, '2019', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(13, 14, '2010', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(14, 5, '2016', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(15, 32, '2014', '2024-12-28 15:43:06', '2024-12-28 15:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `convention_stages`
--

CREATE TABLE `convention_stages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `demande_id` bigint(20) UNSIGNED NOT NULL,
  `Raison_social_de_entreprise` varchar(255) NOT NULL,
  `Secteur_entreprise` varchar(255) NOT NULL,
  `Telephone_entreprise` varchar(255) NOT NULL,
  `Email_entreprise` varchar(255) NOT NULL,
  `adresse_entreprise` varchar(255) NOT NULL,
  `ville_entreprise` varchar(255) NOT NULL,
  `representant_entreprise` varchar(255) NOT NULL,
  `fonction_representant` varchar(255) NOT NULL,
  `encadrant_entreprise` varchar(255) NOT NULL,
  `fonction_encadrant` varchar(255) NOT NULL,
  `telephone_encadrant` varchar(255) NOT NULL,
  `email_encadrant` varchar(255) NOT NULL,
  `encadrant_ensa` varchar(255) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `sujet` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `convention_stages`
--

INSERT INTO `convention_stages` (`id`, `demande_id`, `Raison_social_de_entreprise`, `Secteur_entreprise`, `Telephone_entreprise`, `Email_entreprise`, `adresse_entreprise`, `ville_entreprise`, `representant_entreprise`, `fonction_representant`, `encadrant_entreprise`, `fonction_encadrant`, `telephone_encadrant`, `email_encadrant`, `encadrant_ensa`, `date_debut`, `date_fin`, `sujet`, `created_at`, `updated_at`) VALUES
(1, 45, 'Murray Inc', 'quia', '+1 (231) 727-8769', 'lueilwitz.edwardo@howe.net', '61976 Hannah Greens Apt. 359\nPort Ludiemouth, TX 77157', 'West Roderick', 'Hope Simonis', 'et', 'Deshaun Hirthe MD', 'in', '320-214-0149', 'erik36@stokes.net', 'Leonor Yost', '2011-11-06', '1972-05-23', 'Maxime minima facere expedita adipisci libero dolorum. Hic quidem quod dolor est quod ipsa.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 40, 'Gulgowski-White', 'consequatur', '(765) 222-3337', 'torp.rodrigo@kuhic.com', '454 Funk Mission\nJaylonstad, NC 97771-8291', 'South Kristofferview', 'Dominique Harber', 'dolores', 'Henry Bergstrom', 'fugiat', '1-580-868-8624', 'claudine50@runolfsdottir.com', 'Constance Veum', '1973-01-22', '1989-11-10', 'Autem est corporis sit eum et. Quis nemo laborum id tempore rerum dolore. Natus molestias rerum voluptas totam beatae. Itaque voluptatibus ipsum aut non non debitis laborum.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 44, 'Daugherty-Pouros', 'amet', '931.662.5611', 'gunnar39@stokes.com', '418 Name Village\nSchimmelbury, MA 55524', 'Port Felicity', 'Jacynthe Gislason', 'tempore', 'Hobart Jaskolski', 'et', '+1 (580) 201-7756', 'ward.collins@hotmail.com', 'Alek Balistreri', '1993-11-19', '2014-07-19', 'Omnis impedit saepe perferendis quos ut repellat consequuntur. Voluptatem eum neque sapiente. Aliquam quia voluptatem ut hic ut. Sunt quos vel aperiam deleniti aperiam officia.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 9, 'Leuschke, Effertz and Lebsack', 'nihil', '+15414201114', 'rosalind12@thompson.biz', '64143 Isadore Tunnel\nLake Autumnshire, SD 75097-4427', 'Ornmouth', 'Prof. Shaniya Schmeler Jr.', 'sequi', 'Cheyanne Schultz', 'voluptas', '+1-319-639-1741', 'denesik.brown@hotmail.com', 'Prof. Noemy Orn', '2003-05-27', '2016-02-20', 'Hic voluptatum ut consequatur quidem ut mollitia. Voluptas incidunt illo aut nam laudantium perferendis. Veniam amet dicta ipsum aliquam.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 17, 'Cummings, Murazik and Schaden', 'molestias', '1-414-517-2414', 'satterfield.effie@block.com', '90514 Reinger Valley\nLake Chasity, AR 38084', 'Lake Generalside', 'Willow Roob', 'asperiores', 'Mr. Bennie Effertz', 'voluptatem', '479.433.9344', 'gjohnson@schuppe.com', 'Jamil Batz', '2005-12-14', '1987-05-22', 'Rerum quis qui est inventore. Et beatae maiores magni id incidunt. Cumque dolorem delectus repellat qui. Assumenda molestiae vel aliquid in libero.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 39, 'Kerluke, Carroll and Frami', 'a', '+12316356319', 'aditya.reynolds@ferry.com', '5061 Rene Groves Apt. 506\nHauckburgh, DC 16744', 'Howellhaven', 'Prof. Shannon Kuphal PhD', 'ab', 'Prof. Tomasa Hilpert', 'quasi', '+1-559-681-5739', 'kellen13@hotmail.com', 'Mrs. Lois Aufderhar', '1992-09-07', '2013-11-19', 'Aut sit fugit ratione sed ex eos quaerat. Qui aut tenetur sed laboriosam. Quia inventore ducimus sint quia qui inventore. Suscipit placeat est aliquam nam et reiciendis. Qui minus accusantium facere.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(7, 2, 'Williamson-Okuneva', 'quasi', '847-474-0283', 'rosanna47@monahan.com', '83996 Cole Squares\nNorth Cristinabury, ND 25829', 'Friesenborough', 'Christian Botsford I', 'voluptatibus', 'Lorenz Weber V', 'atque', '863-203-2146', 'crawford.hintz@cummings.com', 'Kiara Durgan', '2010-03-30', '2010-02-10', 'Similique qui enim eveniet repellendus. Incidunt porro vero at vero eius. Numquam pariatur non est dolores.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(8, 49, 'Emard, Carroll and Bernhard', 'reprehenderit', '404-723-2356', 'cronin.aaliyah@hickle.biz', '1494 Ross Spurs Suite 743\nJesseberg, NV 33315-0568', 'Sylvesterburgh', 'Arvel Lynch', 'occaecati', 'Prof. Terrill Doyle', 'qui', '347.978.3903', 'yundt.sven@yahoo.com', 'Freeda Cronin', '2002-03-30', '2003-09-01', 'Qui cupiditate iste perspiciatis voluptatem suscipit aut. In fuga inventore quia temporibus dolores quia velit. Modi beatae quo autem ut at.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(9, 50, 'Reichert and Sons', 'amet', '+1-813-416-5266', 'cole.belle@okuneva.com', '4086 Shyanne Station Apt. 860\nLangworthton, WY 94960-4019', 'South Sadie', 'Althea Dibbert', 'facere', 'Mrs. Susanna Stanton', 'saepe', '(678) 212-6328', 'micheal.howe@hudson.com', 'Tyrell Mitchell', '2004-11-02', '2009-02-14', 'Blanditiis ut modi voluptatem rerum accusamus laudantium. Fugit quisquam magnam dolores illo dolore et maiores. Atque nemo et voluptas molestiae velit.', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(10, 23, 'Feest-Goyette', 'nulla', '551.317.8073', 'casper.gennaro@predovic.net', '436 Christian Via Suite 538\nWest Loyalfurt, AK 53457-3097', 'Lucystad', 'Prof. Deon Johns V', 'eos', 'Mr. Chance Gutmann Sr.', 'officia', '(440) 743-9555', 'muller.miller@gmail.com', 'Hayden Volkman Jr.', '2013-02-04', '2011-07-17', 'Voluptate laudantium aut inventore nobis. Quis ut rerum porro porro ut nemo cum. Dolor distinctio voluptatem blanditiis explicabo.', '2024-12-28 15:43:06', '2024-12-28 15:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `demandes`
--

CREATE TABLE `demandes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `type_demande` enum('Convention de Stage','Attestation de Scolarité','Attestation de Réussite','Relevé des Notes') NOT NULL,
  `status` enum('Traitée','En cours','Non traitée') NOT NULL DEFAULT 'Non traitée',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `demandes`
--

INSERT INTO `demandes` (`id`, `student_id`, `type_demande`, `status`, `created_at`, `updated_at`) VALUES
(1, 24, 'Relevé des Notes', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 66, 'Convention de Stage', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 57, 'Relevé des Notes', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 39, 'Relevé des Notes', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 3, 'Attestation de Scolarité', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 4, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(7, 66, 'Attestation de Réussite', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(8, 15, 'Attestation de Réussite', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(9, 63, 'Convention de Stage', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(10, 67, 'Relevé des Notes', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(11, 23, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(12, 70, 'Relevé des Notes', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(13, 37, 'Attestation de Scolarité', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(14, 46, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(15, 54, 'Relevé des Notes', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(16, 8, 'Relevé des Notes', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(17, 44, 'Convention de Stage', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(18, 14, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(19, 42, 'Relevé des Notes', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(20, 4, 'Relevé des Notes', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(21, 58, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(22, 12, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(23, 49, 'Convention de Stage', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(24, 6, 'Attestation de Scolarité', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(25, 33, 'Attestation de Réussite', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(26, 40, 'Relevé des Notes', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(27, 3, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(28, 65, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(29, 7, 'Attestation de Scolarité', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(30, 59, 'Relevé des Notes', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(31, 59, 'Attestation de Scolarité', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(32, 67, 'Attestation de Scolarité', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(33, 6, 'Attestation de Réussite', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(34, 7, 'Attestation de Réussite', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(35, 60, 'Attestation de Scolarité', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(36, 23, 'Relevé des Notes', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(37, 59, 'Relevé des Notes', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(38, 46, 'Attestation de Réussite', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(39, 51, 'Convention de Stage', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(40, 3, 'Convention de Stage', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(41, 13, 'Attestation de Réussite', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(42, 37, 'Relevé des Notes', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(44, 36, 'Convention de Stage', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(45, 4, 'Convention de Stage', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(46, 38, 'Attestation de Réussite', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(47, 36, 'Attestation de Réussite', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(49, 19, 'Convention de Stage', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(50, 56, 'Convention de Stage', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `note` int(11) NOT NULL,
  `Module` varchar(255) NOT NULL,
  `annee` varchar(4) NOT NULL,
  `semestre` enum('Semestre 1','Semestre 2') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `student_id`, `note`, `Module`, `annee`, `semestre`, `created_at`, `updated_at`) VALUES
(1, 66, 18, 'Optimisation Mathématique', '2019', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 8, 12, 'Anglais Technique', '2012', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 51, 7, 'Physique 1', '2021', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 11, 8, 'Physique 1', '2016', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 30, 16, 'Optimisation Mathématique', '2013', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 23, 20, 'Physique 1', '2020', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(7, 28, 16, 'Programmation', '2021', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(8, 42, 0, 'Optimisation Mathématique', '2016', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(9, 41, 8, 'Physique 1', '2010', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(10, 13, 8, 'Analyse 1', '2023', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(11, 6, 17, 'Mécanique des Fluides', '2021', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(12, 45, 9, 'Mécanique des Fluides', '2024', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(13, 65, 12, 'Informatique 1', '2016', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(14, 40, 2, 'Programmation', '2022', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(15, 70, 7, 'Physique 1', '2010', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(16, 42, 17, 'Analyse 1', '2016', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(17, 34, 13, 'Résistance des Matériaux', '2015', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(18, 26, 9, 'Optimisation Mathématique', '2012', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(19, 48, 0, 'Programmation', '2021', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(20, 44, 10, 'Analyse 1', '2017', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(21, 26, 11, 'Mécanique des Fluides', '2020', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(22, 12, 2, 'Programmation', '2017', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(23, 41, 4, 'Physique 1', '2019', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(24, 42, 16, 'Analyse 1', '2010', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(25, 66, 15, 'Anglais Technique', '2016', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(26, 42, 1, 'Mécanique des Fluides', '2015', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(27, 52, 13, 'Anglais Technique', '2013', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(28, 47, 13, 'Algèbre 1', '2017', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(29, 48, 15, 'Informatique 1', '2013', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(30, 35, 6, 'Optimisation Mathématique', '2020', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(31, 2, 15, 'Résistance des Matériaux', '2022', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(32, 18, 6, 'Programmation', '2020', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(33, 60, 6, 'Mécanique des Fluides', '2012', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(34, 57, 2, 'Algèbre 1', '2018', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(35, 16, 19, 'Algèbre 1', '2013', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(36, 21, 6, 'Algèbre 1', '2015', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(37, 35, 3, 'Optimisation Mathématique', '2013', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(38, 2, 7, 'Algèbre 1', '2024', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(39, 12, 8, 'Informatique 1', '2012', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(40, 45, 6, 'Optimisation Mathématique', '2021', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(41, 70, 6, 'Résistance des Matériaux', '2019', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(42, 69, 10, 'Physique 1', '2021', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(43, 41, 7, 'Anglais Technique', '2017', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(44, 37, 12, 'Optimisation Mathématique', '2021', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(45, 18, 8, 'Algorithmique', '2020', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(46, 33, 12, 'Analyse 1', '2022', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(47, 42, 3, 'Algorithmique', '2014', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(48, 21, 10, 'Optimisation Mathématique', '2022', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(49, 51, 13, 'Analyse 1', '2013', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(50, 35, 14, 'Mécanique des Fluides', '2018', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(51, 46, 8, 'Analyse 1', '2020', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(52, 40, 9, 'Optimisation Mathématique', '2013', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(53, 32, 19, 'Programmation', '2020', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(54, 36, 5, 'Mécanique des Fluides', '2020', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(55, 38, 19, 'Informatique 1', '2015', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(56, 24, 18, 'Optimisation Mathématique', '2021', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(57, 26, 17, 'Optimisation Mathématique', '2023', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(58, 10, 12, 'Résistance des Matériaux', '2012', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(59, 66, 10, 'Résistance des Matériaux', '2018', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(60, 58, 2, 'Anglais Technique', '2020', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(61, 8, 7, 'Physique 1', '2024', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(62, 38, 14, 'Informatique 1', '2024', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(63, 24, 2, 'Optimisation Mathématique', '2018', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(64, 19, 10, 'Optimisation Mathématique', '2024', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(65, 30, 1, 'Programmation', '2024', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(66, 57, 6, 'Optimisation Mathématique', '2022', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(67, 25, 20, 'Informatique 1', '2021', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(68, 69, 15, 'Algorithmique', '2013', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(69, 8, 7, 'Algorithmique', '2018', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(70, 56, 17, 'Analyse 1', '2012', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(71, 23, 15, 'Programmation', '2015', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(72, 24, 1, 'Programmation', '2023', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(73, 29, 20, 'Algorithmique', '2015', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(74, 53, 17, 'Informatique 1', '2023', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(75, 17, 10, 'Physique 1', '2020', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(76, 6, 17, 'Physique 1', '2023', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(77, 23, 0, 'Mécanique des Fluides', '2020', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(78, 29, 16, 'Optimisation Mathématique', '2015', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(79, 67, 7, 'Optimisation Mathématique', '2011', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(80, 68, 6, 'Algèbre 1', '2022', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reclamations`
--

CREATE TABLE `reclamations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('Problème Technique','Problème de Service à l´école','Autre Problème') NOT NULL,
  `contenu` text NOT NULL,
  `sujet` varchar(255) NOT NULL,
  `status` enum('Traitée','En cours','Non traitée') NOT NULL DEFAULT 'Non traitée',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reclamations`
--

INSERT INTO `reclamations` (`id`, `student_id`, `type`, `contenu`, `sujet`, `status`, `created_at`, `updated_at`) VALUES
(1, 20, 'Autre Problème', 'Laboriosam similique et quidem rem a est. Harum rerum natus vero nesciunt. Ut vel perspiciatis quia non commodi. Quas repudiandae dolores dolorem tempore qui accusantium aliquam.', 'Quas nemo tempore beatae reiciendis sit.', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 9, 'Problème de Service à l´école', 'Placeat praesentium quidem voluptatem dolor et in. Voluptatem quam suscipit culpa quasi ea architecto. Maiores veritatis ducimus accusamus ut dolorem id numquam. Rerum sunt quasi illum similique magni nulla voluptas.', 'Quia accusantium nobis aut delectus cumque quo.', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 25, 'Problème Technique', 'Voluptas totam voluptatem repellat sed iure neque velit unde. Quaerat et quasi quis earum consequatur sit vel. Quibusdam quam dolorem voluptate omnis et vel nemo sapiente.', 'Tenetur consequatur ut illo consequatur.', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 39, 'Problème Technique', 'Dolorem excepturi et commodi velit. Quia placeat molestiae laborum voluptatem ea odit impedit aliquam. Et accusantium nam at sint dolorem blanditiis id.', 'Provident cupiditate libero enim quo fuga explicabo.', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 1, 'Autre Problème', 'Porro eveniet rem esse quas. Fugiat dicta officia voluptas est ad eum. Molestiae sit et exercitationem delectus.', 'Est quisquam tempore sit corporis eum incidunt.', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 54, 'Problème Technique', 'Quod tempora quia voluptatum quia et quia. Ut quia distinctio odio qui accusamus id a. Et quo in cumque perferendis dolorum. Nesciunt dignissimos rerum provident perspiciatis praesentium. Non ullam occaecati occaecati repellat numquam id.', 'Iste doloribus commodi cumque modi.', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(7, 26, 'Problème Technique', 'Voluptatem odio accusamus et eos omnis sed eos id. Ut cumque sit provident laborum. Qui deleniti repellat repellat aut tempora. Id corporis velit et.', 'Nobis consequatur et aut sit et reprehenderit.', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(8, 64, 'Problème de Service à l´école', 'Dolore odit eum qui delectus nisi sit ipsam. Placeat eveniet ducimus quidem. Aut quia nihil et est repellat et quia. In et quas in vel esse.', 'Assumenda et quas magni maxime est repellendus eligendi.', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(9, 69, 'Problème de Service à l´école', 'Similique eos ullam consequatur exercitationem ut similique. Nihil eveniet eos quaerat recusandae architecto ipsum. Velit eius repellendus molestiae at distinctio sequi. Perferendis delectus tempora nostrum tempora architecto et.', 'Veniam aut eligendi nulla corrupti laboriosam ad.', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(10, 54, 'Problème de Service à l´école', 'Blanditiis natus non quod molestiae magni. Vero ad sequi sit ut vitae. Commodi doloremque quidem quia dicta corrupti nemo temporibus.', 'Consequatur aut aut consequuntur in suscipit suscipit et.', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(11, 54, 'Problème de Service à l´école', 'Et natus quisquam quis velit labore praesentium voluptas ipsam. Consequatur dolores perspiciatis ex et sit quaerat aut ut. Qui accusantium velit facilis ipsam et. Sunt cum est velit natus sit.', 'Nam quas aut autem officiis maxime.', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(12, 7, 'Problème de Service à l´école', 'Vero dolore porro sint maiores. Dolor quos vitae dicta in aspernatur rerum aliquid.', 'Omnis enim reiciendis modi ea id rerum et sint.', 'En cours', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(13, 40, 'Problème Technique', 'Perspiciatis enim facere illum et quos eius. Maiores perspiciatis maiores nisi laboriosam est. Consectetur enim sapiente quos repudiandae voluptatem minima voluptates. Blanditiis praesentium cum vero modi.', 'Distinctio vel sunt qui et.', 'Non traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(14, 43, 'Autre Problème', 'Consectetur magnam veritatis pariatur laudantium. Voluptate quo sint ut sed. Odio tempora delectus quas aut consequuntur et sapiente. Et illum aut eius tempora omnis. Qui magni sunt enim qui tempore et dicta.', 'Eum sequi incidunt ratione reiciendis et.', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(15, 61, 'Autre Problème', 'Ut est provident vel voluptas voluptatem est. Est quod necessitatibus nihil. Itaque veritatis adipisci totam est. Autem amet et at cumque maxime.', 'Qui occaecati et cupiditate repellat.', 'Traitée', '2024-12-28 15:43:06', '2024-12-28 15:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `releve_notes`
--

CREATE TABLE `releve_notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `demande_id` bigint(20) UNSIGNED NOT NULL,
  `annee` varchar(4) NOT NULL,
  `semestre` enum('Semestre 1','Semestre 2') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `releve_notes`
--

INSERT INTO `releve_notes` (`id`, `demande_id`, `annee`, `semestre`, `created_at`, `updated_at`) VALUES
(1, 30, '2020', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 37, '2018', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 36, '2020', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 12, '2021', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 16, '2012', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 19, '2010', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(7, 15, '2011', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(8, 20, '2014', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(9, 3, '2012', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(10, 42, '2013', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(11, 1, '2015', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(12, 26, '2014', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(14, 10, '2012', 'Semestre 1', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(15, 4, '2013', 'Semestre 2', '2024-12-28 15:43:06', '2024-12-28 15:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('oNNs0IU10KE3YPDWM6RgBwL2bKNTMCIAEO33KzZn', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVEtTdlBMWWR2ZTFXNGpQY2pHZlo4cGllb25OVmtwWXJnaHIwelZGRyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1735451054);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `N_Apogee` int(11) NOT NULL,
  `CNE` varchar(255) NOT NULL,
  `filiere` varchar(255) NOT NULL,
  `annee_inscription` varchar(4) NOT NULL,
  `niveau` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `email`, `N_Apogee`, `CNE`, `filiere`, `annee_inscription`, `niveau`, `created_at`, `updated_at`) VALUES
(1, 'Dally Noah', 'dally.noah@example.com', 12001200, 'D100900060', 'Génie Civil', '2017', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 'Aryanna Reilly', 'erdman.dayana@example.org', 87430147, 'G277102995', 'Cyber Security', '2021', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 'Ned Bogisich', 'bailey.angela@example.com', 27173435, 'K893289829', 'Big Data & AI', '2016', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 'Aisha Wilkinson III', 'hrutherford@example.net', 75146339, 'K881739114', 'Supply Chain Management', '2015', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 'Prof. Aurore Parisian V', 'medhurst.javonte@example.com', 98303515, 'E862290239', 'Big Data & AI', '2023', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 'Georgianna Kuhlman', 'parker.betty@example.com', 53017865, 'L898439246', 'Supply Chain Management', '2018', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(7, 'Samson Skiles', 'windler.therese@example.com', 92089894, 'G748003925', 'Génie Mécatronique', '2020', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(8, 'Dr. Astrid Ryan DDS', 'bogisich.tremayne@example.org', 56355302, 'E245041532', 'Big Data & AI', '2020', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(9, 'Leila Lynch PhD', 'lambert55@example.com', 34113769, 'K802502631', 'Supply Chain Management', '2011', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(10, 'Raheem Bayer Sr.', 'predovic.kian@example.org', 17504260, 'V155681872', 'GSTR', '2015', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(11, 'Constantin Hills', 'schoen.kasandra@example.com', 73867745, 'G485620956', 'GSTR', '2014', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(12, 'Angelica Pagac', 'edyth23@example.com', 67222691, 'Z335778130', 'Génie Civil', '2012', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(13, 'Mr. Jerad Mueller IV', 'rempel.stephanie@example.com', 29678206, 'C139498933', 'Cyber Security', '2015', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(14, 'Keyon Collins', 'tillman.demarcus@example.org', 87692390, 'B834095763', 'Big Data & AI', '2020', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(15, 'Verlie O\'Reilly', 'shields.oren@example.com', 47045402, 'H579577903', 'Supply Chain Management', '2015', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(16, 'Laurine Armstrong', 'bridget.bins@example.com', 49982524, 'V663675565', 'Génie Informatique', '2017', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(17, 'Mohamed El Hauari', 'elhauari.imohamed@etu.uae.ac.ma', 10101010, 'X101010101', 'Génie Informatique', '2021', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(18, 'Annamae Kling', 'vmante@example.org', 98579352, 'Q400456356', 'GSTR', '2011', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(19, 'Deangelo Kunde', 'nikita18@example.net', 81109769, 'R600957524', 'Génie Civil', '2021', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(20, 'Jason Zboncak', 'destini.strosin@example.org', 94723139, 'C220471006', 'Big Data & AI', '2020', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(21, 'Dr. Leann Abbott', 'zblanda@example.net', 51589289, 'H591579018', 'Supply Chain Management', '2012', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(22, 'Isac Fisher', 'little.kassandra@example.com', 22102426, 'S396327710', 'Génie Civil', '2018', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(23, 'Ilias Maroun', 'maroun.ilias@etu.uae.ac.ma', 20202020, 'Y202020202', 'Génie Informatique', '2017', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(24, 'Prof. Jazmin Tromp Sr.', 'rboyle@example.net', 48335919, 'W485438921', 'Génie Civil', '2019', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(25, 'Garth Smitham', 'emery.keebler@example.com', 91338086, 'J912252456', 'Génie Civil', '2020', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(26, 'Lelah Zboncak', 'mose95@example.com', 29599910, 'E930842957', 'Génie Informatique', '2020', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(27, 'Anahi Bernhard', 'vraynor@example.net', 94308114, 'N092536574', 'Génie Informatique', '2024', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(28, 'Reagan Aufderhar Jr.', 'bednar.brandy@example.org', 91962812, 'B258473188', 'Supply Chain Management', '2015', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(29, 'Paolo Rodriguez', 'berta57@example.net', 25987199, 'G578805563', 'Génie Civil', '2013', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(30, 'Eino Turner', 'bruen.karlie@example.org', 87921370, 'X714317247', 'Génie Civil', '2015', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(31, 'Dr. Ayden Leuschke IV', 'bell.zulauf@example.org', 97871052, 'C992595426', 'Supply Chain Management', '2020', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(32, 'Maida Zemlak', 'lmonahan@example.net', 86653600, 'M843523988', 'Cyber Security', '2017', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(33, 'Verdie Armstrong Jr.', 'rath.sydnie@example.net', 25197262, 'K345424299', 'Big Data & AI', '2024', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(34, 'Irwin Carroll', 'roslyn24@example.com', 71737332, 'Z039415216', 'Génie Civil', '2019', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(35, 'April Kautzer II', 'paucek.filiberto@example.org', 73278623, 'P473586504', 'Big Data & AI', '2018', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(36, 'Eddie Dietrich', 'vernon44@example.net', 40545237, 'J233307714', 'Cyber Security', '2022', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(37, 'Uriah Schneider', 'nathanial05@example.com', 32905368, 'V146114993', 'Cyber Security', '2024', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(38, 'Adelbert Murazik', 'doyle.derrick@example.net', 96421699, 'K227082148', 'Cyber Security', '2024', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(39, 'Mr. Dewayne Hirthe', 'miracle48@example.net', 45324191, 'C064373367', 'Génie Mécatronique', '2016', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(40, 'Rosemary Gutkowski', 'ruthie87@example.net', 60046758, 'S157833284', 'Big Data & AI', '2021', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(41, 'Garnet Abbott', 'chance84@example.org', 53313163, 'Y432894491', 'Supply Chain Management', '2012', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(42, 'Vada Williamson', 'rutherford.maritza@example.org', 55645330, 'W688930425', 'Big Data & AI', '2013', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(43, 'Rajae El-abida', 'elabida.rajae@etu.uae.ac.ma', 30303030, 'Z303030303', 'Génie Informatique', '2015', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(44, 'America Borer', 'clara45@example.com', 76683944, 'I507487723', 'Supply Chain Management', '2016', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(45, 'Javon Vandervort', 'stracke.rosie@example.com', 39258435, 'S950042624', 'Génie Civil', '2013', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(46, 'Miss Corene Predovic', 'thomas80@example.com', 12353244, 'C797286851', 'Génie Civil', '2011', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(47, 'Prof. Odell Jacobs MD', 'xschaefer@example.net', 40783202, 'I172411596', 'Supply Chain Management', '2024', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(48, 'Niko Mitchell', 'maggio.orval@example.com', 12457620, 'P925285667', 'Génie Mécatronique', '2020', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(49, 'Zelma Rempel', 'coty11@example.net', 46358298, 'K173844098', 'Big Data & AI', '2022', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(50, 'Ms. Liliana Pfannerstill', 'rlakin@example.com', 72093205, 'N388194026', 'Supply Chain Management', '2015', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(51, 'Cloyd Lehner Jr.', 'ocollier@example.org', 67555082, 'A805213977', 'Génie Mécatronique', '2020', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(52, 'Zula Funk IV', 'shana55@example.net', 65001211, 'U957346071', 'Génie Informatique', '2012', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(53, 'Kane Kshlerin', 'gschmitt@example.org', 29012557, 'M869629220', 'Génie Mécatronique', '2015', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(54, 'Aniya Heidenreich', 'senger.helene@example.com', 55862494, 'S636878747', 'Génie Mécatronique', '2012', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(55, 'Mrs. Fanny Reilly', 'uprohaska@example.org', 47366854, 'V223005692', 'Génie Mécatronique', '2021', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(56, 'Mabelle Russel', 'glabadie@example.net', 43059807, 'D264421288', 'Génie Mécatronique', '2020', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(57, 'Mr. Percival Mohr', 'omertz@example.org', 70620358, 'N128212636', 'Supply Chain Management', '2020', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(58, 'Roma Daniel', 'deon80@example.net', 79129821, 'C796124082', 'Génie Civil', '2010', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(59, 'Miss Coralie Hermiston', 'uoconner@example.org', 23347760, 'X035977932', 'Génie Mécatronique', '2019', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(60, 'Abbie Nitzsche', 'selena28@example.org', 52743129, 'L557262918', 'Génie Informatique', '2019', '3ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(61, 'Jasmin Parisian', 'dane.oreilly@example.net', 57450163, 'A814110853', 'Génie Civil', '2018', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(62, 'Norval Walker', 'mvon@example.net', 45626191, 'M636328915', 'Génie Informatique', '2018', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(63, 'Haylee Wiegand V', 'hane.frederique@example.com', 40165194, 'D655449254', 'Génie Civil', '2017', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(64, 'Lisette Moore', 'berniece.gibson@example.org', 28389620, 'A192214500', 'Cyber Security', '2019', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(65, 'Jodie Bosco', 'ldare@example.org', 10295095, 'O561302352', 'Cyber Security', '2010', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(66, 'Savanah Jones', 'lydia06@example.net', 83142974, 'G719563398', 'Big Data & AI', '2020', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(67, 'Mohamed El Attaoui', 'mohamed.elattaoui@etu.uae.ac.ma', 40404040, 'A404040404', 'Génie Informatique', '2017', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(68, 'Granville Reynolds', 'allan.block@example.com', 59382403, 'I270271954', 'Cyber Security', '2016', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(69, 'Ms. Nichole Jacobson', 'alyson48@example.com', 93615793, 'S332213251', 'Génie Civil', '2010', '1ère année', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(70, 'Mohamed Sadki', 'mohamed.sadki3@etu.uae.ac.ma', 50505050, 'B505050505', 'Génie Informatique', '2021', '2ème année', '2024-12-28 15:43:06', '2024-12-28 15:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Annetta Runolfsdottir', 'alicia.stark@example.org', '2024-12-28 15:43:05', '$2y$12$iGN0EOwC53/vr59a29U1.On1E/s5fsRUkg.6szSg2Ny4sHcR9rsN6', 'shjKuSGiss', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(2, 'Sherman Feil', 'schuppe.nannie@example.net', '2024-12-28 15:43:06', '$2y$12$iGN0EOwC53/vr59a29U1.On1E/s5fsRUkg.6szSg2Ny4sHcR9rsN6', 'DjDVxUY0iS', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(3, 'Ms. Mariah Frami Sr.', 'hayes.sydni@example.net', '2024-12-28 15:43:06', '$2y$12$iGN0EOwC53/vr59a29U1.On1E/s5fsRUkg.6szSg2Ny4sHcR9rsN6', 'wepeMyCaz4', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(4, 'Orie Feest', 'wkutch@example.net', '2024-12-28 15:43:06', '$2y$12$iGN0EOwC53/vr59a29U1.On1E/s5fsRUkg.6szSg2Ny4sHcR9rsN6', 'hSwgTKU7pz', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(5, 'Ms. Nova Heaney PhD', 'wmueller@example.net', '2024-12-28 15:43:06', '$2y$12$iGN0EOwC53/vr59a29U1.On1E/s5fsRUkg.6szSg2Ny4sHcR9rsN6', 'SobNOw3qor', '2024-12-28 15:43:06', '2024-12-28 15:43:06'),
(6, 'test', 'test@test.com', NULL, '$2y$12$t5FqyKDPVEgz9pPpbuxwz.Mz1Rhcza5QWV6G.a8TtL2thFIAwqaPC', NULL, '2024-12-28 15:48:10', '2024-12-28 15:48:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attestation_reussites`
--
ALTER TABLE `attestation_reussites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attestation_reussites_demande_id_foreign` (`demande_id`);

--
-- Indexes for table `attestation_scolarites`
--
ALTER TABLE `attestation_scolarites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attestation_scolarites_demande_id_foreign` (`demande_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `convention_stages`
--
ALTER TABLE `convention_stages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `convention_stages_demande_id_foreign` (`demande_id`);

--
-- Indexes for table `demandes`
--
ALTER TABLE `demandes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `demandes_student_id_foreign` (`student_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notes_student_id_foreign` (`student_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `reclamations`
--
ALTER TABLE `reclamations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reclamations_student_id_foreign` (`student_id`);

--
-- Indexes for table `releve_notes`
--
ALTER TABLE `releve_notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `releve_notes_demande_id_foreign` (`demande_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `students_email_unique` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attestation_reussites`
--
ALTER TABLE `attestation_reussites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `attestation_scolarites`
--
ALTER TABLE `attestation_scolarites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `convention_stages`
--
ALTER TABLE `convention_stages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `demandes`
--
ALTER TABLE `demandes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `reclamations`
--
ALTER TABLE `reclamations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `releve_notes`
--
ALTER TABLE `releve_notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attestation_reussites`
--
ALTER TABLE `attestation_reussites`
  ADD CONSTRAINT `attestation_reussites_demande_id_foreign` FOREIGN KEY (`demande_id`) REFERENCES `demandes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `attestation_scolarites`
--
ALTER TABLE `attestation_scolarites`
  ADD CONSTRAINT `attestation_scolarites_demande_id_foreign` FOREIGN KEY (`demande_id`) REFERENCES `demandes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `convention_stages`
--
ALTER TABLE `convention_stages`
  ADD CONSTRAINT `convention_stages_demande_id_foreign` FOREIGN KEY (`demande_id`) REFERENCES `demandes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `demandes`
--
ALTER TABLE `demandes`
  ADD CONSTRAINT `demandes_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reclamations`
--
ALTER TABLE `reclamations`
  ADD CONSTRAINT `reclamations_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `releve_notes`
--
ALTER TABLE `releve_notes`
  ADD CONSTRAINT `releve_notes_demande_id_foreign` FOREIGN KEY (`demande_id`) REFERENCES `demandes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
