        //D-Pharmacy Textbooks

                //Social Pharmacy
function downloadPDF1(filename){
// Replace the URL with the actual location of your PDF files
const pdfURL='https://drive.google.com/file/d/1hKe9JEZzLZ6Y6yUkLPmIfDfbhjynZ9oJ/view?usp=drivesdk'+filename;
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


                //Pharmacognosy
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

                //Pharmaceutics
function downloadPDF3(filename){
const pdfURL='https://drive.google.com/file/d/1hOXmHlQnguhJuV2jCVm2ZtoJOonIqx5g/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

                //Chemistry
function downloadPDF4(filename){
const pdfURL='https://drive.google.com/file/d/1hPtWDgLQsaNcpktFcfIGVVb8fJO0zxvi/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

                //HAP
function downloadPDF5(filename){
const pdfURL='https://drive.google.com/file/d/1h53hmjH43vhVUd3TsKgNoS5wNSYYlS8c/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
