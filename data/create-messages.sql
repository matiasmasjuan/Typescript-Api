CREATE SEQUENCE messages_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."messages" (
    "id" integer DEFAULT nextval('messages_id_seq') NOT NULL,
    "clientId" integer NOT NULL,
    "text" character varying(255) NOT NULL,
    "role" character varying(20) NOT NULL,
    "sentAt" timestamp without time zone NOT NULL
) WITH (oids = false);

ALTER TABLE "public"."messages" ADD CONSTRAINT "messages_clientId_fkey"
    FOREIGN KEY ("clientId") REFERENCES "public"."clients"("id")
    ON DELETE CASCADE
    ON UPDATE CASCADE;

INSERT INTO "messages" ("clientId", "text", "role", "sentAt") VALUES
(1, 'Hola, quiero comprar un depto', 'client', '2023-01-01 12:00:00'),
(1, 'Perfecto, te puedo ayudar con eso', 'agent', '2023-01-02 14:30:00'),
(1, 'Quiero uno en la comuna de la florida', 'client', '2023-01-03 09:45:00'),
(1, 'Claro! tengo este por 3000 UF', 'agent', '2023-01-04 18:20:00'),
(2, 'Hola, hay alguna casa en Macul?', 'client', '2023-12-20 11:10:00'),
(2, 'Claro! Feliz de ayudar', 'agent', '2023-12-21 16:05:00');
