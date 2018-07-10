
-- create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email varchar(255),
  password_hash varchar(255)
);

-- create users table
CREATE TABLE IF NOT EXISTS medication (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  dosage varchar(255),
  instruction varchar(255),
  type varchar(255),


  Monday boolean,
  Tuesday boolean,
  Wednesday boolean,
  Thursday boolean,
  Friday boolean,
  Saturday boolean,
  Sunday boolean,
  
  Morning boolean,
  Noon boolean,
  Mid_Afternoon boolean,
  Evening boolean,
  Bedtime boolean,

  users_id integer
);
