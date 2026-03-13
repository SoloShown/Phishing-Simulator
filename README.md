# Phishing Simulation Tool

Educational cybersecurity project that demonstrates how phishing attacks work in a controlled environment.

## Features

* phishing link tracking
* credential capture simulation
* logging system
* realistic login portal
* fake profile dashboard after login

## Tech Stack

* Node.js
* Express
* HTML / CSS / JavaScript

## Purpose

This tool is designed for **cybersecurity education and awareness training**.
It simulates a phishing login portal and demonstrates how attackers capture credentials.

⚠️ This project must only be used for **educational purposes or authorized security training**.

---

# How to Use

## 1. Install Requirements

Install the following:

* Node.js
* npm

Check installation:

```
node -v
npm -v
```

---

## 2. Clone the Repository

```
git clone https://github.com/soloshown/phishing-simulator.git
cd phishing-simulator
```

---

## 3. Install Dependencies

```
npm install
```

---

## 4. Start the Server

```
node server.js
```

You should see:

```
Server running on http://localhost:3000
```

---

## 5. Open the Login Simulation

Open your browser and go to:

```
http://localhost:3000
```

---

## 6. Test the Simulation

1. Enter any email and password
2. Click **Log In**
3. The credentials will be logged on the server
4. You will be redirected to a **fake profile page**

---

## 7. View Captured Credentials

Captured credentials are saved in:

```
/logs/captured.txt
```

Example:

```
Time: 2026-03-13
Email: test@email.com
Password: 123456
```

---

# Project Structure

```
phishing-simulator
│
├── server.js
│
├── logs
│   └── captured.txt
│
├── public
│   ├── login.html
│   ├── profile.html
│   │
│   ├── css
│   │   └── style.css
│   │
│   └── js
│       └── profile.js
```

---

# Disclaimer

This project is intended strictly for **educational cybersecurity demonstrations**.

Do not use this tool against users without **explicit permission**. Unauthorized phishing attacks may be illegal.

---

# Future Improvements

Possible upgrades:

* phishing campaign generator
* email sender (SMTP)
* admin dashboard
* analytics panel
* phishing success statistics

# License

This project is licensed under the MIT License.
