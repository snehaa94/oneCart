# 🛒 oneCart - MERN Stack E-Commerce Application

**oneCart** is a full-stack E-Commerce application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It includes user authentication, cart functionality, payment integration with Razorpay, and an admin dashboard to manage products and orders.

---

## 🚀 Features

### 👤 User Features
- User registration and login with JWT
- Browse product listings
- Add or remove items from cart
- Secure checkout using Razorpay
- View order history

### 🛠️ Admin Features
- Admin login
- Add, update, and delete products
- Manage user list
- View and manage orders

---

## 🧑‍💻 Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT & Cookies
- **Payment Gateway:** Razorpay

---

## 📁 Folder Structure

```
oneCart/
├── admin/         # Admin dashboard (React + Vite)
├── frontend/      # User-facing site (React + Vite)
├── backend/       # Express.js API server
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/snehaa94/oneCart.git
cd oneCart
```

### 2. Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

### 3. Create `.env` files

#### backend/.env

```env
PORT=5000
MONGO_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### frontend/.env

```env
VITE_API_URL=http://localhost:5000
RAZORPAY_KEY=your_razorpay_key
```

✅ *Note: Do not share your `.env` files. They are added to `.gitignore` for security.*

---

## 💻 Run the Application

### Run Backend

```bash
cd backend
npm run dev
```

### Run Frontend

```bash
cd ../frontend
npm run dev
```

### Run Admin Panel

```bash
cd ../admin
npm run dev
```

---

## 📸 Screenshots

![oneCartAuth](https://github.com/user-attachments/assets/37dccde9-7fcc-455e-887d-aa258af3092a)

![oneCartHome](https://github.com/user-attachments/assets/d1962b3d-382a-4f33-8ee9-2e9a2889a5a6)

![oneCartAboutus](https://github.com/user-attachments/assets/6c6fa66f-f236-42f9-953d-b1f983d78c31)

![oneCartCollection](https://github.com/user-attachments/assets/2a1ba819-2aa7-4892-b303-5106aa6f63b9)

![oneCartCollectionDetails](https://github.com/user-attachments/assets/aa92705a-00b9-40a5-b4d3-c0220677cdaf)

![oneCartAboutus](https://github.com/user-attachments/assets/ed871be2-0622-4914-b5cf-390309b7ec75)

![oneCartOrder](https://github.com/user-attachments/assets/af272872-0e90-4838-b33c-aabf2d962253)

![oneCartPay](https://github.com/user-attachments/assets/8fe49fc8-f0ac-498a-99f8-a6abfba77e2b)

![oneCartPlacedOrder](https://github.com/user-attachments/assets/0df90398-d1e0-45db-8019-b4b5690f18b8)

![oneCaretAdminDashboard](https://github.com/user-attachments/assets/f3208b18-2b7d-4e91-9923-726352a62730)

---

## 👩‍💻 Author

**Sneha Kashyap**  
📧 snehakashyap6109@gmail.com  
🔗 [GitHub](https://github.com/snehaa94)  
🔗 [LinkedIn](https://www.linkedin.com/in/sneha-kashyap)

---

## 📄 License

This project is open for learning and portfolio purposes.
