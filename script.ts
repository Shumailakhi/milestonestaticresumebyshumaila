import html2canvas from "html2canvas";
import jsPDF from "jspdf";

document.getElementById("download")?.addEventListener("click", () => {
  const resume = document.getElementById("resume");
  if (resume) {
    html2canvas(resume).then(canvas => {
      const pdf = new jsPDF("p", "pt", "a4");
      const imgData = canvas.toDataURL("image/jpg");
      pdf.addImage(imgData, "PNG", 15, 15, 580, 0);
      pdf.save("Shumaila_Resume.pdf");
    });
  }
});
