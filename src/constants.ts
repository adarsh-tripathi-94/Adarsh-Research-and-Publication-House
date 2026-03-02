export interface Book {
  id: string;
  code?: string;
  title: string;
  category: 'B.Ed' | 'D.El.Ed';
  type: 'Theory' | 'Practical';
  year?: string;
  semester?: string;
  image?: string;
  price: number;
}

const getRandomPrice = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getPriceForTitle = (title: string) => {
  if (title === 'Lesson Plan -1' || title === 'Lesson Plan -2') return 499;
  return getRandomPrice(170, 190);
};

export const BED_THEORY_BOOKS: Book[] = [
  // First Year - First Semester
  { id: '1', code: 'ERBD1101', title: 'बाल्यावस्था और बढ़ना', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '2', code: 'ERBD1102', title: 'समकालीन भारत और शिक्षा', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '3', code: 'ERBD1105', title: 'अनुशासन और विषय की समझ', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '4', code: 'ERBD1106', title: 'लिंग, स्कूल और समाज', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '5', code: 'ERBD1125', title: 'मूलय और शांति शिक्षा', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '6', code: 'ERBD1128', title: 'शैक्षिक प्रौद्योगिकी', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '7', code: 'ERBD1129', title: 'मानवाधिकार शिक्षा', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '8', code: 'ERBD1126', title: 'पर्यावरण विज्ञान', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '9', code: 'ERPC1122', title: 'पाठों का पढ़ना और चिंतन', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '10', code: 'ERPC1123', title: 'नाटक और कला शिक्षा में', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'प्रथम सेमेस्टर', price: getRandomPrice(170, 190) },
  
  // First Year - Second Semester
  { id: '11', code: 'ERBD1103', title: 'सीखना और शिक्षण', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '12', code: 'ERBD1104', title: 'पाठ्यक्रम में भाषा', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '13', code: 'ERPC1124', title: 'स्कूल इंटर्नशिप कार्यक्रम-1 (4 सप्ताह)', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '14', code: 'ERBD1130', title: 'जनसंख्या शिक्षा', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '15', code: 'ERBD1131', title: 'नेतृत्व और नीति अध्ययन', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '16', code: 'ERBD1132', title: 'सतत विकास के लिए शिक्षा', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '17', code: 'ERBD1107', title: 'हिंदी की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '18', code: 'ERBD1108', title: 'अंग्रेजी की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '19', code: 'ERBD1109', title: 'उर्दू की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '20', code: 'ERBD1110', title: 'संस्कृत की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '21', code: 'ERBD1111', title: 'गणित की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '22', code: 'ERBD1112', title: 'भौतिक विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '23', code: 'ERBD1113', title: 'जैविक विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '24', code: 'ERBD1114', title: 'इतिहास की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '25', code: 'ERBD1115', title: 'नागरिक शास्त्र की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '26', code: 'ERBD1116', title: 'भूगोल की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '27', code: 'ERBD1117', title: 'अर्थशास्त्र की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '28', code: 'ERBD1118', title: 'सामाजिक विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '29', code: 'ERBD1119', title: 'कंप्यूटर विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '30', code: 'ERBD1120', title: 'गृह विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '31', code: 'ERBD1121', title: 'वाणिज्य की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '32', code: 'ERBD1127', title: 'हिंदी संचार', category: 'B.Ed', type: 'Theory', year: 'प्रथम वर्ष', semester: 'द्वितीय सेमेस्टर', price: getRandomPrice(170, 190) },

  // Second Year - Third Semester
  { id: '33', code: 'ERBD1201', title: 'ज्ञान और पाठ्यक्रम', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'तृतीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '34', code: 'ERBD1202', title: 'सीखने के लिए मूल्यांकन', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'तृतीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '35', code: 'ERBD1205', title: 'मार्गदर्शन और परामर्श', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'तृतीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '36', code: 'ERBD1225', title: 'शिक्षक शिक्षा', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'तृतीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '37', code: 'ERBD1228', title: 'शिक्षा में सांस्कृतिक योग्यता', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'तृतीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '38', code: 'ERBD1226', title: 'भावनात्मक बुद्धिमत्ता', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'तृतीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '39', code: 'ERPC1222', title: 'आईसीटी की आलोचनात्मक समझ', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'तृतीय सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '40', code: 'ERPC1223', title: 'स्वयं की समझ', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'तृतीय सेमेस्टर', price: getRandomPrice(170, 190) },

  // Second Year - Fourth Semester
  { id: '41', code: 'ERBD1203', title: 'समावेशी स्कूल का निर्माण', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '42', code: 'ERPC1224', title: 'स्कूल इंटर्नशिप कार्यक्रम-2 (16 सप्ताह)', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '43', code: 'ERBD1204', title: 'स्वास्थ्य, योग और शारीरिक शिक्षा', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '44', code: 'ERBD1206', title: 'स्कूल प्रबंधन और नेतृत्व की समझ', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '45', code: 'ERBD1229', title: 'भाषा संस्कृति और शिक्षा', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '46', code: 'ERBD1207', title: 'हिंदी की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '47', code: 'ERBD1208', title: 'अंग्रेजी की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '48', code: 'ERBD1209', title: 'उर्दू की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '49', code: 'ERBD1210', title: 'संस्कृत की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '50', code: 'ERBD1211', title: 'गणित की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '51', code: 'ERBD1212', title: 'भौतिक विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '52', code: 'ERBD1213', title: 'जैविक विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '53', code: 'ERBD1214', title: 'इतिहास की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '54', code: 'ERBD1215', title: 'नागरिक शास्त्र की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '55', code: 'ERBD1216', title: 'भूगोल की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '56', code: 'ERBD1217', title: 'अर्थशास्त्र की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '57', code: 'ERBD1218', title: 'सामाजिक विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '58', code: 'ERBD1219', title: 'कंप्यूटर विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '59', code: 'ERBD1220', title: 'गृह विज्ञान की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '60', code: 'ERBD1221', title: 'वाणिज्य की शिक्षण विधि', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
  { id: '61', code: 'ERBD1227', title: 'अंग्रेजी संचार', category: 'B.Ed', type: 'Theory', year: 'द्वितीय वर्ष', semester: 'चतुर्थ सेमेस्टर', price: getRandomPrice(170, 190) },
];

export const BED_PRACTICAL_BOOKS: Book[] = [
  'Lesson Plan -1 (25 lesson plans)', 'Lesson Plan -2 (25 lesson plans)', 'Reading and Reflecting', 'Drama and Art in Education',
  'Action Research', 'Micro-Teaching', 'Psychological Test', 'Achievment Test',
  'School Diarary', 'Peer Observation', 'Case – Study', 'Understanding Self',
  'Information and Communication Techonology(ICT)'
].map((title, index) => ({ 
  id: `bp-${index}`, 
  title, 
  category: 'B.Ed', 
  type: 'Practical',
  price: getPriceForTitle(title.includes('Lesson Plan') ? title.split(' (')[0] : title)
}));

export const DELED_THEORY_BOOKS: Book[] = [
  // First Year
  { id: 'd1', code: '06020101', title: 'समाज, शिक्षा और पाठ्यक्रम की समझ', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd2', code: '06020102', title: 'बचपन और बाल विकास', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd3', code: '06020103', title: 'प्रारंभिक बाल्यावस्था देखभाल और शिक्षा', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd4', code: '06020104', title: 'विद्यालय संस्कृति, परिवर्तन और शिक्षक विकास', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd5', code: '06020105', title: 'भाषा की समझ तथा आरंभिक भाषा विकास', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd6', code: '06020106', title: 'शिक्षा में जेंडर और समावेशी परिप्रेक्ष्य', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd7', code: '06020107', title: 'गणित का शिक्षणशास्त्र-1 (प्राथमिक स्तर)', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd8', code: '06020108', title: 'हिंदी का शिक्षणशास्त्र-1 (प्राथमिक स्तर)', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd9', code: '06020109', title: 'अंग्रेजी में प्रवीणता', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd10', code: '06020110', title: 'पर्यावरण अध्ययन का शिक्षणशास्त्र', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd11', code: '06020111', title: 'कला समेकित शिक्षा', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd12', code: '06020112', title: 'शिक्षा में सूचना और संचार प्रौद्योगिकी', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd13', code: '06020113', title: 'विद्यालय अनुभव कार्यक्रम-1 (04 सप्ताह)', category: 'D.El.Ed', type: 'Theory', year: 'प्रथम वर्ष', price: getRandomPrice(170, 190) },
  
  // Second Year
  { id: 'd14', code: '06020201', title: 'समकालीन भारतीय समाज में शिक्षा', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd15', code: '06020202', title: 'संज्ञान, सीखना और बाल विकास', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd16', code: '06020203', title: 'कार्य और शिक्षा', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd17', code: '06020204', title: 'स्वयं की समझ', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd18', code: '06020205', title: 'विद्यालय में स्वास्थ्य, योग और शारीरिक शिक्षा', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd19', code: '06020206', title: 'अंग्रेजी का शिक्षणशास्त्र (प्राथमिक स्तर)', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd20', code: '06020207', title: 'गणित का शिक्षणशास्त्र-2 (प्राथमिक स्तर)', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd21', code: '06020208', title: 'हिंदी का शिक्षणशास्त्र-2 (प्राथमिक स्तर)', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd22', code: '06020209', title: 'उच्च-प्राथमिक स्तर (कक्षा 6–8) किसी एक विषय का शिक्षणशास्त्र', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
  { id: 'd23', code: '06020210', title: 'विद्यालय अनुभव कार्यक्रम-2 (16 सप्ताह)', category: 'D.El.Ed', type: 'Theory', year: 'द्वितीय वर्ष', price: getRandomPrice(170, 190) },
];

export const DELED_PRACTICAL_BOOKS: Book[] = [
  'Lesson Plan -1 (25 lesson plans)', 'Lesson Plan -2 (25 lesson plans)', 'Reading and Reflecting', 'Drama and Art in Education',
  'Action Research', 'Micro-Teaching', 'Psychological Test', 'Achievment Test',
  'School Diarary', 'Peer Observation', 'Case – Study', 'Understanding Self',
  'Information and Communication Techonology(ICT)', 'Community Work', 'Art Intreagreted Education', 'Task and Education'
].map((title, index) => ({ 
  id: `dp-${index}`, 
  title, 
  category: 'D.El.Ed', 
  type: 'Practical',
  price: getPriceForTitle(title.includes('Lesson Plan') ? title.split(' (')[0] : title)
}));
