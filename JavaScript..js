document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("pdfModal");
    const viewer = document.getElementById("pdfViewer");
    const closeBtn = document.querySelector(".close-btn");

    // فتح PDF داخل الموقع
    function openPDF(pdfPath) {
        modal.style.display = "flex";
        viewer.src = pdfPath;
    }

    // نخليها global باش onclick يخدم
    window.openPDF = openPDF;

    // إغلاق بالزر
    closeBtn.addEventListener("click", function () {
        closeModal();
    });

    // إغلاق ملي كيتكلكي برا
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // function ديال الإغلاق
    function closeModal() {
        modal.style.display = "none";
        viewer.src = "";
    }

});