<!--suppress HtmlDeprecatedAttribute -->
<div align="center">

# Rent

<p>
  <b>A rental store API for my database organization final project. </b>
  <br/>
  ⚠️ This is part of a <a href="https://github.com/noahhusby/university"><strong>larger collection of projects</strong></a> for university. ⚠️
  <br/><br/>
</p>

[![](https://github.com/noahhusby/rent/actions/workflows/build.yml/badge.svg)](https://github.com/noahhusby/rent/actions/workflows/build.yml)
[![](https://img.shields.io/github/license/noahhusby/rent)](https://github.com/noahhusby/rent/blob/main/LICENSE)
</div>

## For the professor / TA

This project is written using the Nest.Js framework. All of our SQL queries and connections are handled by the TypeORM library.
As such, the queries are automatically executed using the annotations in the entities found in [/src/(entities)](https://github.com/noahhusby/rent/tree/main/src/).

To satisfy the requirements of the assignment, I manually wrote all the SQL queries and placed them into [main.ts](https://github.com/noahhusby/rent/blob/main/src/main.ts).
The reason we took this approach is to try to match the exact frameworks and libraries used in the industry.
Nest.Js allows us to build a simple, but robust backend server for our project. We still had to write all the annotations
and consider all SQL design constraints so the goal of the project is still met. If there is any concern with this framework,
please reach out to me directly.

## SQL Scripts

Please find SQL scripts for sample data included here: 
#### customer
```sql
INSERT INTO public.customer(
    id, name, address, email)
	VALUES 
	    ("db363e56-862f-4a9a-b729-aa9bc0b9066a","John Henry", "1234 Adams", "JHenry@gmail.com"),
	    ("7c4c79d1-0c26-4f68-bf8c-9cc58ec0183b","Vanessa Gonzalez", "3301 S State Street", "VanessaGG@icloud.com");
```

#### employee
```sql
INSERT INTO public.employee(
    id, name, address, email, phone)
	VALUES 
	    ("c5a60db4-bd45-4140-a589-f21688d4ba02","Barry Barnes","777 Village St","BBarnes@RentalStore.com","(925)-411-7386"),
	    ("108e6fc1-144c-423e-9978-f4d554e2778a","Vincent Capallyon","703 Kirk Ln","VMan703@gmail.com","(314)-773-9633"),
	    ("75616d79-3878-498f-a44b-bd15aa459fda","Garry Smith","4127 Stonesheep Ln","GarrySmithison@hotmail.com","(808)-734-1231");
```

#### location
```sql
INSERT INTO public.location(
    id, address, manager_id)
	VALUES 
	    ("8dbb517e-5e69-4de6-aee0-fd13e81dfdd5","2117 Richardson St","c5a60db4-bd45-4140-a589-f21688d4ba02")
	    ("69434726-1cf8-43db-baa1-f9a53722d214"	"1234 S St"	"75616d79-3878-498f-a44b-bd15aa459fda");
```

#### product
```sql
INSERT INTO public.product(
    id, title, publisher, release_date)
	VALUES 
	    ("fccb1a09-edfa-4f02-8458-4db66bbee09d","Cars II","Pixar","2011-06-24 00:00:00")
	    ("2729c4d8-33be-4bb6-863b-2ebd996bc189","Cars","Pixar","2006-05-26 00:00:00"),
	    ("78d54eec-541e-41da-8e0a-da0cca355d8d","Monster's INC.","Pixar","2001-11-02 00:00:00"),
	    ("d847e900-1642-4c42-a169-c2ba64b56757","John Wick","Pixar","2014-10-24 00:00:00");
```

#### rental
```sql
INSERT INTO public.rental(
    id, rental_date, due_date, return_date, cost, customer_id, product_id)
	VALUES 
	    ("dd3b1a09-edfa-5f02-3458-2db33aaff09d","2023-12-09","2023-12-16", 100,"db363e56-862f-4a9a-b729-aa9bc0b9066a","2729c4d8-33be-4bb6-863b-2ebd996bc189");
```

#### employee_location
```sql
INSERT INTO public.employee_location(
    id, employee_id, location_id, hourly_wage)
	VALUES 
	    ("83d0143e-af14-4969-a2fb-5549c2d908ca","108e6fc1-144c-423e-9978-f4d554e2778a","69434726-1cf8-43db-baa1-f9a53722d214", 16.80);
```

#### employee_timesheet
```sql
INSERT INTO public.employee_timesheet(
    id, employee_id, location_id, hourly_wage)
	VALUES 
	    ("83d0143e-af14-4969-a2fb-5549c2d908ca","108e6fc1-144c-423e-9978-f4d554e2778a","69434726-1cf8-43db-baa1-f9a53722d214", 16.80);
```
## License

Distributed under the GNU General Public License v3. See `LICENSE`