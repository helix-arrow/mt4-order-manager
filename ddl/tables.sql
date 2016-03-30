$ mysql-ctl start
$ mysql-ctl cli
create database mt4_order_manager;
grant all on mt4_order_manager.* to mt4_user@localhost;
set password for mt4_user@localhost=password('password');

$ mysql -u mt4_user -p mt4_order_manager
create table order_status (
        user_id         varchar(64)     not null
    ,   symbol          varchar(6)      not null
    ,   period          numeric(5,0)    not null
    ,   magic_no        numeric(20,0)   not null
    ,   decition_time   datetime        not null
    ,   takeprofit      numeric(8,5)    default 0
    ,   stoploss        numeric(8,5)    default 0
    ,   status_cd       varchar(3)
);
