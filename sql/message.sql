/*
Navicat MySQL Data Transfer

Source Server         : link
Source Server Version : 50553
Source Host           : 127.0.0.1:3306
Source Database       : z_test

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-06-17 05:30:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `created` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('1', '绿色', '今天是个好日子！', '2019-06-17 01:05:57', '涛涛');
INSERT INTO `message` VALUES ('2', '呵呵', '下雨收衣服了', '2019-06-17 01:06:02', '鹏鹏');
