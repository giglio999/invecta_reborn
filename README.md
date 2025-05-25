
# Invecta - Frontend (Angular 16)

This repository contains the frontend layer of the **Invecta** system, developed as part of the Capstone Project for the Computer Engineering course at Universidade de Sorocaba (UNISO). The application aims to provide a web solution for inventory control, sales, purchases, and management of customers, products, and users, specifically targeting small and medium-sized businesses.

## 👨‍💻 Frontend Developer

**Gabriel Ramalho Resende**  
Responsible for the entire Angular 16 frontend structure, including:
- Component-based architecture and layout reuse
- Login and registration pages
- Integration with simulated HTTP services
- Setup for backend integration (Spring Boot + JWT)
- Best practices in folder structure, responsiveness, and Angular directives usage

---

## 📦 Technologies Used

- [Angular 16](https://angular.io/)
- TypeScript
- HTML5 + SCSS
- Angular Router
- Angular HttpClient (prepared for API consumption)
- Template-driven Forms

---

## 🚀 Frontend Features

- [x] **Login** page
- [x] **Registration** page
- [x] Generic layout with `@Input()` and `@Output()` for reuse
- [x] Communication with `AuthService`
- [x] Structure ready to receive and send user data
- [x] Prepared for **JWT** authentication
- [x] Page navigation using Angular `Router`
- [x] Ready for API consumption via `HttpClient`

> ⚠️ **The frontend was prepared for backend integration, but I did not implement a database or a functional API.** Integration will be handled by another team member responsible for the Java (Spring Boot) backend.

---

## 📂 Folder Structure

```bash
src/
├── app/
│   ├── components/
│   │   └── default-login-layout/   # Base layout for Login and Registration
│   ├── pages/
│   │   ├── login/                  # Login page
│   │   └── register/               # Registration page
│   ├── services/
│   │   ├── auth.service.ts         # Authentication service
│   │   └── user.model.ts           # User interface
│   └── app.routes.ts               # Route definitions
```

---

## 🛠️ How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/invecta-frontend.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   ng serve
   ```

4. Open in your browser:
   ```
   http://localhost:4200
   ```

---

## 🔌 Simulated API (for future integration)

The login and registration methods are ready to connect with the following API:

| Endpoint             | Method | Description          |
|----------------------|--------|----------------------|
| `/api/auth/login`    | POST   | User authentication  |
| `/api/auth/register` | POST   | User registration    |

---

## 📌 Notes

- Input data is controlled via `@Input()` and `@Output()` using `[(ngModel)]`, allowing modularity between layout and page components.
- The system is **ready for JWT-based authentication**, which will be implemented on the backend side.

---

## 📫 Contact

Filipe Giglio 🐲   
LinkedIn: [linkedin.com/in/giglio999](https://www.linkedin.com/in/giglio999/)
