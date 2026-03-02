-- 1. BOOKS TABLE
-- Stores both B.Ed and D.El.Ed inventory (Theory and Practical)
CREATE TABLE books (
    id TEXT PRIMARY KEY,            -- Using TEXT to support your frontend generated IDs (e.g., Math.random)
    title TEXT NOT NULL,
    category TEXT NOT NULL,         -- 'B.Ed' or 'D.El.Ed'
    type TEXT NOT NULL,             -- 'Theory' or 'Practical'
    price REAL NOT NULL,
    academic_period TEXT,           -- Maps to 'year' or 'semester' from your frontend
    image_url TEXT,                 -- URL for the book cover
    book_code TEXT,                 -- Optional book code for tracking
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. ORDERS TABLE
-- Stores checkout form data and overall order status
CREATE TABLE orders (
    id TEXT PRIMARY KEY,            -- e.g., 'ORD-170932...' generated from Date.now()
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_whatsapp TEXT,
    delivery_address TEXT NOT NULL,
    landmark TEXT,
    district TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT NOT NULL,
    payment_method TEXT NOT NULL,   -- 'upi', 'card', 'net', 'cod'
    subject_requirement TEXT,       -- Required for Lesson Plan/Micro Teaching books
    total_amount REAL NOT NULL,
    status TEXT DEFAULT 'Pending',  -- Admin can update to 'Processing', 'Shipped', etc.
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. ORDER ITEMS TABLE
-- Links multiple books to a single order (Cart contents)
CREATE TABLE order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id TEXT NOT NULL,
    book_id TEXT NOT NULL,
    price_at_time REAL NOT NULL,    -- Captures price at checkout in case book price changes later
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

-- 4. GOVERNING BODIES TABLE
-- Allows admin to add/remove members dynamically
CREATE TABLE governing_members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    bio TEXT,
    image_url TEXT,
    theme_color TEXT                -- e.g., 'from-pink-500 to-purple-500'
);

-- 5. ADMIN USERS TABLE (Optional but Recommended)
-- Securely store admin credentials rather than hardcoding them in App.tsx
CREATE TABLE admin_users (
    email TEXT PRIMARY KEY,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'admin'
);
-- Insert default governing members
INSERT INTO governing_members (name, role, bio, theme_color) VALUES 
('Dr. Brijesh Kumar Tiwari', 'Chief Editor', 'Expert in Educational Research & Academic Publications.', 'from-pink-500 to-purple-500'),
('Dr. Rajaram Beniwal', 'Director', 'Visionary leader driving institutional excellence.', 'from-pink-500 to-purple-500'),
('Dr. Ratnesh Kumar Tripathi', 'Director', 'Specialist in Teacher Training & Curriculum Development.', 'from-pink-500 to-purple-500');