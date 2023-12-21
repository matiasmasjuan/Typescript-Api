CREATE SEQUENCE clients_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."clients" (
    "id" integer DEFAULT nextval('clients_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "rut" character varying(20) NOT NULL,
    "salary" integer NOT NULL,
    "savings" integer NOT NULL
) WITH (oids = false);

INSERT INTO "clients" ("name", "rut", "salary", "savings") VALUES
('Juan Perez', '11.111.111-1', 50000, 10000),
('Pedro Soto', '21.111.111-1', 60000, 15000),
('Alicia Martinez', '15.555.555-5', 75000, 20000),
('Carla Lopez', '18.888.888-8', 45000, 8000),
('Emilio Fuenzalida', '19.999.999-9', 55000, 12000),
('Daniela Gonzalez', '20.000.000-2', 70000, 18000);
