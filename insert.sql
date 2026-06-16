-- Patients
INSERT INTO patients
(patient_name, age, room, condition, admission_date, emergency_contact)
VALUES
('Margaret Thompson', 78, '101', 'Stable', '2025-01-10', 'Sara Thompson - 079876543'),

('Robert Wilson', 82, '102', 'Needs Monitoring', '2025-02-10', 'James Wilson - 079878765'),

('Elizabeth Brown', 75, '103', 'Good', '2025-05-15', 'Emma Brown - 079345678');


-- Nurses
INSERT INTO nurses
(nurse_name, phone)
VALUES
('Nurse Leyla', '0791111111'),
('Nurse Sara', '0792222222');


-- Users
INSERT INTO users
(username, user_password, user_role, patient_id, nurse_id)
VALUES
('nurse1', 'nurse123', 'nurse', NULL, 1),
('nurse2', 'nurse123', 'nurse', NULL, 2),
('family1', 'family123', 'family', 1, NULL);


-- Medicines
INSERT INTO medicines
(patient_id, medicine_name, dosage, medicine_time, notes)
VALUES
(1, 'Aspirin', '100 mg', '08:00 AM', 'Take with water'),

(1, 'Vitamin D', '1 tablet', '11:00 AM', 'Take after breakfast'),

(2, 'Blood Pressure Tablet', '1 tablet', '08:00 AM', 'Take after meal'),

(3, 'Calcium', '500 mg', '06:00 PM', 'Take with food');


-- Daily Updates
INSERT INTO updates
(patient_id, nurse_id, update_date, update_time, notes)
VALUES
(1, 1, '2026-06-13', '09:00 AM',
'Patient condition is stable and had breakfast normally'),

(1, 2, '2026-06-14', '10:00 AM',
'Blood pressure and SPO2 were checked and recorded'),

(2, 1, '2026-06-14', '11:00 AM',
'Patient needs continuous monitoring');


-- Events
INSERT INTO events
(patient_id, title, event_description, event_date, event_time, event_status)
VALUES
(1,
'Physical Therapy',
'Lower back strengthening exercises',
'2026-06-20',
'02:00 PM',
'Scheduled'),

(1,
'Cardiology Checkup',
'Annual heart examination with Dr. Smith',
'2026-06-25',
'10:00 AM',
'Scheduled'),

(2,
'Family Visit',
'Family members will visit the patient tomorrow',
'2026-06-16',
'12:00 PM',
'Scheduled');