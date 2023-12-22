<div align="center"><h1> ✨ Prueba Técnica Lidz ✨ </h1></div>

A continuación se describe la API realizada con Typescript, express, sequelize y una base de datos en postgres.

# Plataforma 💻

**Medagenda** se compone de tres elementos: 

* La carpeta Backend la cual es una aplicación en Node.js usando express.
* La carpeta medagenda con un proyecto en Vue3.js usando tailwind.
* Una base de datos en postgres.

# Instalación ⚙️

Primero se debe crear un .env con la siguiente informacion:
```.env
API_PORT=****
DB_HOST=****
DB_PORT=****
DB_NAME=****
DB_USER=****
DB_PASSWORD=****
```

Luego, se debe crear la base de datos en particular y situarse en la carpeta `data/` para ejecutar los siguientes comandos:

```
psql -U DB_USER -d DB_NAME -a -f create-clients.sql
psql -U DB_USER -d DB_NAME -a -f create-messages.sql  
psql -U DB_USER -d DB_NAME -a -f create-debts.sql  
```

El tercer paso es ejecutar:
```
npm install
```

Y por ultimo
```
npm run dev
```

# Aspectos implementados ⚡️

Lamentablemente, por temas de tiempo no se pudo lograr lo más importante que era el cálculo del score. Mi plan era aplicar 3 filtros. Uno según la cantidad de mensajes: (20%), luego una relación relacionada al salario y las deudas (50%) y por ultiplo la relación con el salario (30%).

El primer criterio que vale un 20% es justamente tomar la cantidad de mensajes que envia un usuario, y tomar el promedio de mensajes enviados por un cliente promedio. Si es mayor al promedio, tendrá un score entre 10 a 20, si es menor, entonces será menor a 10. Esto puede ser de forma lineal o exponencial. Lo importante es favorecer a los clientes con mayor cantidad de mensajes.

El segundo criterio vale un 50%. La idea era calcular:

$$ max(0, (1 - deuda\_total/salario) * 50)$$

Es decir, que parte de mi salario corresponde a la deuda. Con eso es posible filtrar mejor a los clientes que efectivamente tienen capacidad de pagar una deuda en base a un salario, pero sino, se castiga bastante.

Y por último, el 30% restante es buscar la relación entre los ahorros que uno tiene y las deudas. En ese sentido, si uno tiene un salario bajo, con alta deuda pero a la vez alto ahorro, no se ve tan penalizado en comparación si tuviera unos ahorros bajos.