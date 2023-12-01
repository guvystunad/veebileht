// See JavaScript on kokku pandud erinevatest allikatest
// Allikad:
// https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
// ChatGPT
// Kogu selle info pani kokku Anna-Liisa Jõgi

function checkAll() {
    var checkboxes = document.querySelectorAll(".myCheck");
    var kiri = document.getElementById("kiri");
    var allChecked = true;

    checkboxes.forEach(function (checkbox) {
        if (!checkbox.checked) {
            allChecked = false;
        }
        var textCell = checkbox.parentNode.previousElementSibling;
        textCell.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    kiri.style.display = allChecked ? "block" : "none";
}
