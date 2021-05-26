CREATE DATABASE pwt;
CREATE TABLE IF NOT EXISTS `results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `response` float NOT NULL,
  `accuracy` float NOT NULL,
  `userCode` TEXT NOT NULL,
  `resultsTrials` TEXT NOT NULL,
   PRIMARY KEY (`id`)
)

