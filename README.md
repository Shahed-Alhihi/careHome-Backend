# 🏠❤️careHome-Backend

This is the **backend** for the fullstack Care Home Management system using Nodes.js , Express.js, PostgreSQL


## 🏗️ Tech Stack

- Node.js + Express
- PostgreSQL (via `pg`)
- `dotenv`, `cors`, `morgan`


## 🚀 Getting Started

##🔗 Repository:
git@github.com:Shahed-Alhihi/careHome-Backend.git

```bash
# 1. Install dependencies
cd careHome-Backend
npm install

# 2. Create a PostgreSQL database (e.g., `careHome`)

# 3. Start PostgreSQL and create DB
psql -d careHome -f schema.sql

# 4. Start the server
npm start
```


## 🗂️ Project Structure
```
careHome-Backend/
├── routes/
 │ ├── auth.js # Login routes
 │ ├── patients.js # Patient management
 │ ├── medicines.js # Medicine CRUD operations
 │ ├── updates.js # Daily updates
 │ └── events.js #events management
    
├── db.js  #postgreSQL connection
├── .env  #enviroment variables
├── package.json
├── server.js #app entry point
└── README.md
```


## 📡 API Endpoints

The API will run on: http://localhost:5000

### 🔐 Auth Routes

**Base URL**: `/api/auth`

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| POST   | `/login`     | Authenticate user  |

#### 🔸 POST `/api/auth/login`

Logs in an existing user.
```json
{
  "username": "nurse1",
  "password": "nurse123"
}
```


### 🧓 Patient Routes

**Base URL**: `/api/patients`

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| GET    | `/`          | Get all patients   |
| POST   | `/`          | Add a new patient  |
| GET    | `/:id`       | Get patient  by ID |
| DELETE | `/:id`       | Delete patient     |


#### 🔸 POST /api/patients
```json
{ "patient_name": "Margaret Thompson",
 "age": 78,
  "room": "101",
   "condition": "Good", 
   "admission_date": "2026-06-16", 
   "emergency_contact": "Sarah Thompson"
}
```


### 💊 Medicine Routes

**Base URL**: `/api/medicines`

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| GET    | `/`          | Get all medicines  |
| GET    | `/:patientId`| Get medicines for patient|
| POST   | `/`          |Add medicine        |
| PUT    | `/:id`       |Update medicine     |
| DELETE | `/:id`       |Delete medicine     |



#### 🔸 POST /api/medicines
```json
{
 "patient_id": 1,
  "medicine_name": "Aspirin",
   "dosage": "100mg",
    "medicine_time": "08:00",
     "notes": "After breakfast"
}
```



### 📝 Daily Update Routes
**Base URL**: `/api/updates`

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| GET    | `/:patientId`| Get updates for patient|
| POST   | `/`          |Add daily update    |


#### 🔸 POST /api/updates
```json
{
"patient_id": 1,
 "nurse_id": 1,
  "update_date": "2026-06-16",
   "update_time": "09:00",
    "notes": "Patient condition is stable."
}
```





### 📅 Event Routes
**Base URL**: `/api/events`


| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| GET    | `/`          | Get all events     |
| GET    | `/:patientId`|Get patient's events|
| POST   | `/`          |Add event           |
| DELETE | `/:id`       |Delete event        |


#### 🔸 POST /api/events
```json
{
"patient_id": 1, 
"title": "Doctor Visit",
 "event_description": "Monthly check-up",
  "event_date": "2026-06-20",
   "event_time": "10:00", 
   "event_status": "upcoming"
}
```

💾 Database Tables
- users
- patients
- nurses
- medicines
- updates
- events


🔒 User Roles:
the system manages two roles:
- 👩‍⚕️ Nurse: full management access
- 👨‍👩‍👧 Family:raed only access for associated patient