CREATE DATABASE bday_greeting;

CREATE TABLE `bday_greeting`.`people` ( `ID` INT NOT NULL AUTO_INCREMENT ,  `First_Name` VARCHAR(255) NOT NULL ,  `Last_Name` VARCHAR(255) NOT NULL ,  `Gender` ENUM('Male','Female') NOT NULL ,  `Date_of_Birth` DATE NOT NULL ,  `Email` VARCHAR(255) NOT NULL ,    PRIMARY KEY  (`ID`)) ENGINE = InnoDB;

INSERT INTO `bday_greeting`.`people` (`ID`, `First_Name`, `Last_Name`, `Gender`, `Date_of_Birth`, `Email`) VALUES  (NULL, 'Robert', 'Yen', 'Male', '1985/8/8', 'robert.yen@corp.com'), (NULL, 'Cid', 'Change', 'Male', '1990/10/10', 'cid.change@corp.com'), (NULL, 'Miki', 'Lai', 'Female', '1993/4/5', 'miki.lai@corp.com'), (NULL, 'Sherry', 'Chen', 'Female', '1993/8/8', 'sherry.chen@corp.com'), (NULL, 'Peter', 'Wang', 'Male', '1950/12/22', 'peter.wang@corp.com');