        //D-Pharmacy Textbooks

//1JavaScript function to download PDF
function downloadPDF1(filename){
// Replace the URL with the actual location of your PDF files
const pdfURL='https://drive.google.com/file/d/19tcrjNsvvnvkpLlQ486xFEFxuFJaIShh/view?usp=drivesdk'+filename;
// Create a temporary anchor element to trigger the download
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank'; // Open in a new tab
link.download=filename;
// Append the anchor to the body and click it to initiate the download
document.body.appendChild(link);
link.click();
// Clean up by removing the anchor element
document.body.removeChild(link);
}


//2JavaScript function to download PDF
function downloadPDF2(filename){
const pdfURL='https://drive.google.com/file/d/19pbXIS_knt2ZTr39PtXwXiA8rUorRVgE/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

//3JavaScript function to download PDF
function downloadPDF3(filename){
const pdfURL='https://drive.google.com/file/d/19n_5SMs4ANUZSOOEsjdT6DXSQ_wJu0rG/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

//4JavaScript function to download PDF
function downloadPDF4(filename){
const pdfURL='https://drive.google.com/file/d/19nZfnx_co8F-e9Nx_kJiVu7iHBLWN3CI/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

//5JavaScript function to download PDF
function downloadPDF5(filename){
const pdfURL='https://drive.google.com/file/d/1WYKZOYvcF3ZMZoGc4ct0aTh8LqMvI3G6/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
