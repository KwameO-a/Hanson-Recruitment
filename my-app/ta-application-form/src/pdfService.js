const PDFDocument = require('pdfkit');
const jsPDF = require('jspdf');
// const getStream = require('get-stream');

function createPDF(formData) {
  return new Promise((resolve, reject) => {
    /*
    const doc = new PDFDocument();
    let buffers = [];
    
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      let pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });
    
    // Add content to the PDF
    doc.text(`First Name: ${formData.firstName}`, 10, 10);
    // Continue with other form data
    doc.end();
    //*/
    let docs = new jsPDF('p', 'mm', 'a4');
    // let dataobject=formData;
    let dataobject=testuserData;
    docs.fromHTML(generateUserTable(dataobject), 15, 15, {
        'width': 170,
    });
    let o=docs.output('datauristring');
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {var buffer = xhr.response;resolve(buffer);};
    xhr.onerror = function(error) {reject(error);};
    xhr.open('GET', o);
    xhr.responseType = 'arraybuffer';
    xhr.send();
    // docs.save('form_info.pdf');

  });
}

function createPDFOld(formData) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    let buffers = [];
    
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      let pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });
    
    // Add content to the PDF
    doc.text(`First Name: ${formData.firstName}`, 10, 10);
    // Continue with other form data
    doc.end();
  });
}

function generateUserTable(userData) {
  // Initialize HTML string
  var html = "<!DOCTYPE html>\n<html lang='en'>\n<head>\n<meta charset='UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n<title>User Information</title>\n"
      
      +"<style>\n"
      +"    body {font-family: Arial, sans-serif;margin: 0;padding: 0;}\n"
      +"    table {width: 100%;border-collapse: collapse;margin-top: 20px;}\n"
      +"    th, td {border: 1px solid #dddddd;text-align: left;padding: 8px;}\n"
      +"    th {background-color: #f2f2f2;}\n"
          //Include additional styles
      +"</style>"

      +"\n</head>\n"
      +"<body>\n\n"
          //Include addition html elements before the table {logo/title}
      +"    <table>\n"
      +"        <tr>\n"
      +"        <th>Title</th>\n"
      +"        <th>Value</th>\n"
      +"        </tr>\n"+
      +"";

  for (var key in userData) { // Append each property as a table row
      console.log(userData[key]);
      //check for image fields and include <img tag>
      if(key==='signature'){
          html+="<tr>"
              +"    <td>" + key + "</td>\n"
              +"    <td style='max-width:500px;word-wrap:break-word'>"
              +"        <img src='data:image/png;base64," + userData[key] + "' alt='"+key+"'>\n"
              +"    </td>\n"
              +"</tr>";
      }else{
          html+="<tr>"
              +"    <td>" + key + "</td>\n"
              +"    <td style='max-width:500px;word-wrap:break-word'>"
              +"        "+ userData[key]
              +"    </td>\n"
              +"</tr>";
      }
  }

  // Close the HTML string
  html += "\n</table>\n\n</body>\n</html>";

  // Return the generated HTML string
  return html;
}

// Test the function
const testuserData = {
  "user title": "Mr",
  "firstName": "John",
  "middleName": "Doe",
  "lastName": "Smith",
  "knownAs": "Johnny",
  "previousNames": "None",
  "address": "123 Main St",
  "postCode": "ABC123",
  "phoneNumber": "555-123-4567",
  "email": "john@example.com",
  "dob": "01/01/1990",
  "townofBirth": "London",
  "nationality": "British",
  "nationalInsuaranceNumber": "AB123456C",
  "gender": "Male",
  "nextofkinName": "Jane Doe",
  "relationship": "Spouse",
  "nextofkinaddress": "456 Elm St",
  "nextofkincontact": "555-987-6543",
  "qualification": "Bachelor's Degree",
  "position": "Software Engineer",
  "tel": "555-111-2222",
  "ReferenceTitle": "Manager",
  "datesOfemployment": "01/01/2015 - 12/31/2019",
  "datesOfemploymentEnd": "12/31/2019",
  "ReferenceEmail": "manager@example.com",
  "criminalRecordDetails": "None",
  "criminalDetails": "None",
  "ConsentToCriminalRecords": "Yes",
  "healthInfo": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADME lEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95B fqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0 CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CM K0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CM K0CMK0CMK0CMK0CMK0CMK0CMK0CMK0C K0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CM 2Anhf4QtqobAAAAAElFTkSuQmCC",
  "HealthDeclarationDate": "02/01/2024",
  "dbs": "123456789",
  "country": "United Kingdom",
  "signature": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC"
  ,"name":"kofjiles"
};



module.exports = createPDF;
