CREATE SEQUENCE debts_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."debts" (
    "id" integer DEFAULT nextval('debts_id_seq') NOT NULL,
    "clientId" integer NOT NULL,
    "institution" character varying(255) NOT NULL,
    "amount" integer NOT NULL,
    "dueDate" date NOT NULL
) WITH (oids = false);

ALTER TABLE "public"."debts" ADD CONSTRAINT "debts_clientId_fkey"
    FOREIGN KEY ("clientId") REFERENCES "public"."clients"("id")
    ON DELETE CASCADE
    ON UPDATE CASCADE;

INSERT INTO "debts" ("clientId", "institution", "amount", "dueDate") VALUES
(2, 'Banco Falabella', 1000, '2023-02-01'),
(3, 'Hites', 5000000, '2023-03-15'),
(4, 'Banco Estado', 1000000, '2023-04-10'),
(4, 'Banco de Chile', 150000, '2023-05-20'),
(4, 'Lider', 200000, '2023-06-05');
