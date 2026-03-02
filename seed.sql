-- Insert B.Ed Theory Books
INSERT INTO books (id, title, category, type, price, academic_period) VALUES 
('bed-t-1', 'बाल्यावस्था और बढ़ना', 'B.Ed', 'Theory', 180, 'प्रथम वर्ष - प्रथम सेमेस्टर'),
('bed-t-2', 'समकालीन भारत और शिक्षा', 'B.Ed', 'Theory', 185, 'प्रथम वर्ष - प्रथम सेमेस्टर'),
('bed-t-3', 'अनुशासन और विषय की समझ', 'B.Ed', 'Theory', 175, 'प्रथम वर्ष - प्रथम सेमेस्टर'),
('bed-t-11', 'सीखना और शिक्षण', 'B.Ed', 'Theory', 190, 'प्रथम वर्ष - द्वितीय सेमेस्टर'),
('bed-t-33', 'ज्ञान और पाठ्यक्रम', 'B.Ed', 'Theory', 180, 'द्वितीय वर्ष - तृतीय सेमेस्टर'),
('bed-t-41', 'समावेशी स्कूल का निर्माण', 'B.Ed', 'Theory', 175, 'द्वितीय वर्ष - चतुर्थ सेमेस्टर');

-- Insert B.Ed Practical Books
INSERT INTO books (id, title, category, type, price, academic_period) VALUES 
('bed-p-1', 'Lesson Plan -1 (25 lesson plans)', 'B.Ed', 'Practical', 499, 'Any'),
('bed-p-2', 'Lesson Plan -2 (25 lesson plans)', 'B.Ed', 'Practical', 499, 'Any'),
('bed-p-3', 'Action Research', 'B.Ed', 'Practical', 180, 'Any'),
('bed-p-4', 'Micro-Teaching', 'B.Ed', 'Practical', 180, 'Any');

-- Insert D.El.Ed Theory Books
INSERT INTO books (id, title, category, type, price, academic_period) VALUES 
('del-t-1', 'समाज, शिक्षा और पाठ्यक्रम की समझ', 'D.El.Ed', 'Theory', 170, 'प्रथम वर्ष'),
('del-t-2', 'बचपन और बाल विकास', 'D.El.Ed', 'Theory', 180, 'प्रथम वर्ष'),
('del-t-14', 'समकालीन भारतीय समाज में शिक्षा', 'D.El.Ed', 'Theory', 185, 'द्वितीय वर्ष'),
('del-t-15', 'संज्ञान, सीखना और बाल विकास', 'D.El.Ed', 'Theory', 175, 'द्वितीय वर्ष');

-- Insert D.El.Ed Practical Books
INSERT INTO books (id, title, category, type, price, academic_period) VALUES 
('del-p-1', 'Lesson Plan -1 (25 lesson plans)', 'D.El.Ed', 'Practical', 499, 'Any'),
('del-p-2', 'School Diarary', 'D.El.Ed', 'Practical', 180, 'Any');