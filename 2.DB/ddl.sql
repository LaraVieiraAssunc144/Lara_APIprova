create database vilaoDB;

use vilaoDB;

create table tb_vilao(
	id_vilao		int primary key auto_increment,
    nm_vilao		varchar(100),
    ds_maldades		varchar(200),
    bt_super_poder	boolean
);