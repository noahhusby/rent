INSERT INTO public.employee(
    id, name, address, email, phone)
	VALUES 
	    ("c5a60db4-bd45-4140-a589-f21688d4ba02","Barry Barnes","777 Village St","BBarnes@RentalStore.com","(925)-411-7386"),
	    ("108e6fc1-144c-423e-9978-f4d554e2778a","Vincent Capallyon","703 Kirk Ln","VMan703@gmail.com","(314)-773-9633"),
	    ("75616d79-3878-498f-a44b-bd15aa459fda","Garry Smith","4127 Stonesheep Ln","GarrySmithison@hotmail.com","(808)-734-1231");

INSERT INTO public.location(
    id, address, manager_id)
	VALUES 
	    ("8dbb517e-5e69-4de6-aee0-fd13e81dfdd5","2117 Richardson St","c5a60db4-bd45-4140-a589-f21688d4ba02")
	    ("69434726-1cf8-43db-baa1-f9a53722d214"	"1234 S St"	"75616d79-3878-498f-a44b-bd15aa459fda");

INSERT INTO public.product(
    id, title, publisher, release_date)
	VALUES 
	    ("fccb1a09-edfa-4f02-8458-4db66bbee09d","Cars II","Pixar","2011-06-24 00:00:00")
	    ("2729c4d8-33be-4bb6-863b-2ebd996bc189","Cars","Pixar","2006-05-26 00:00:00"),
	    ("78d54eec-541e-41da-8e0a-da0cca355d8d","Monster's INC.","Pixar","2001-11-02 00:00:00"),
	    ("d847e900-1642-4c42-a169-c2ba64b56757","John Wick","Pixar","2014-10-24 00:00:00");

INSERT INTO public.rental(
    id, rental_date, due_date, return_date, cost, customer_id, product_id)
	VALUES 
	    ("dd3b1a09-edfa-5f02-3458-2db33aaff09d","2023-12-09","2023-12-16", 100,"db363e56-862f-4a9a-b729-aa9bc0b9066a","2729c4d8-33be-4bb6-863b-2ebd996bc189");

INSERT INTO public.employee_location(
    id, employee_id, location_id, hourly_wage)
	VALUES 
	    ("83d0143e-af14-4969-a2fb-5549c2d908ca","108e6fc1-144c-423e-9978-f4d554e2778a","69434726-1cf8-43db-baa1-f9a53722d214", 16.80);

INSERT INTO public.employee_timesheet(
    id, employee_id, location_id, clocked_in, clocked_out)
	VALUES 
	    ("5e81d807-28ec-4ac4-8187-b698828232be","108e6fc1-144c-423e-9978-f4d554e2778a","69434726-1cf8-43db-baa1-f9a53722d214", "2023-12-9T00:09:38Z", "2023-12-10T00:09:38Z");

INSERT INTO public.supplier(
    id, address, contact_name, contact_email, contact_phone)
	VALUES 
	    ("01fe32c5-520d-49b8-bf36-e215d7617600","1234. Supplier Ave. Chicago, IL","Joe Supplier", "joe@supplier.com", "(555) 555-5555");

INSERT INTO public.inventory(
    id, quantity, location_id, product_id)
	VALUES 
	    ("810175d4-f245-4b50-b723-47b730ec8991",5,"69434726-1cf8-43db-baa1-f9a53722d214","2729c4d8-33be-4bb6-863b-2ebd996bc189");

INSERT INTO public.inventory_order(
    id, total, placed_by)
	VALUES 
	    ("710c3857-dc71-4db3-a766-3409dd0059a5",361.33,"c5a60db4-bd45-4140-a589-f21688d4ba02");

INSERT INTO public.order_detail(
    id, quantity, order_id, product_id)
	VALUES 
	    ("cff55151-5639-4e7e-a2a0-d49dd9a62c56", 13, "710c3857-dc71-4db3-a766-3409dd0059a5", "d847e900-1642-4c42-a169-c2ba64b56757");

INSERT INTO public.request(
    id, customer_id, product_id, location_id)
	VALUES 
	    ("42e8509b-f1b7-41e8-bc30-23cbeace913d", "d847e900-1642-4c42-a169-c2ba64b56757", "69434726-1cf8-43db-baa1-f9a53722d214");
