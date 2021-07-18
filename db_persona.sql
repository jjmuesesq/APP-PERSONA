create database if not exists persona;

use persona;

create table tb_persona(
	id int(11) not null auto_increment primary key,
    nombre varchar(50),
    nacimiento date,
    identificacion int(11),
    pariente1 int(11),
    pariente2 int(11),
    adoptado bool
);

insert into tb_persona (nombre, nacimiento, identificacion, pariente1, pariente2, adoptado) values('Jhon Jairo', '1989-10-10', '1111', '2222', '3333', '0');