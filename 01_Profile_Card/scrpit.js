
const resumeclick = document.getElementById("resume");
resumeclick.addEventListener("click", ()=> {
    console.log("Resume Button Clicked")
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1fNiQCAZzyO-lSv-rEwuvd_E8hnDd-5BS';

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute with the PDF file URL
    link.href = pdfUrl;

    // Set the download attribute with the desired file name
    link.download = 'Sahil_Patil_Resume.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link element to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
});

const contactclick = document.getElementById("contact");
contactclick.addEventListener("click", ()=> {
    return console.log("Contact button Clicked")}
);


