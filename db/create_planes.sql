create table airplanes (
    plane_id serial primary key,
    plane_type varchar(40) NOT NULL,
    passenger_count integer NOT NULL
)