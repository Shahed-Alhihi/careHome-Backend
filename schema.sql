CREATE TABLE patients(
      id SERIAL PRIMARY KEY, 
    patient_name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    room VARCHAR(20) NOT NULL,
    condition VARCHAR(50),
    admission_date DATE,
    emergency_contact VARCHAR (300),
    patient_image VARCHAR(255)
);


CREATE TABLE nurses(
    id SERIAL PRIMARY KEY,
    nurse_name VARCHAR (100) NOT NULL,
    phone VARCHAR(20)
);




CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    user_role VARCHAR(20) NOT NULL,
    patient_id INT REFERENCES patients(id) ON DELETE SET NULL,
    nurse_id INT REFERENCES nurses(id) ON DELETE SET NULL
);





CREATE TABLE medicines(
id SERIAL PRIMARY KEY, 
    patient_id INT REFERENCES patients(id) ON DELETE CASCADE,
    medicine_name VARCHAR(100) NOT NULL,
    dosage VARCHAR(100),
    medicine_time VARCHAR(100),
    notes TEXT
);


CREATE TABLE updates(
    id SERIAL PRIMARY KEY, 
    patient_id INT REFERENCES patients(id) ON DELETE CASCADE,
    nurse_id INT REFERENCES nurses(id) ON DELETE SET NULL,
    update_date DATE,
    update_time VARCHAR (20),
    notes TEXT
);


CREATE TABLE events(
        id SERIAL PRIMARY KEY, 
    patient_id INT REFERENCES patients(id) ON DELETE CASCADE,
    title VARCHAR(100),
    event_description TEXT,
    event_date DATE,
    event_time VARCHAR(20),
    event_status VARCHAR(50)
)