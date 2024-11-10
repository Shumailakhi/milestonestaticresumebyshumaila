"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var html2canvas_1 = require("html2canvas");
var jspdf_1 = require("jspdf");
(_a = document.getElementById("download")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var resume = document.getElementById("resume");
    if (resume) {
        (0, html2canvas_1.default)(resume).then(function (canvas) {
            var pdf = new jspdf_1.default("p", "pt", "a4");
            var imgData = canvas.toDataURL("image/png");
            pdf.addImage(imgData, "PNG", 15, 15, 580, 0);
            pdf.save("Shumaila_Resume.pdf");
        });
    }
});
