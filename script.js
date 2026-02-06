document.addEventListener("DOMContentLoaded", function () {
    // Set today's date as default for the survey date field
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("surveyDate").value = today;

    // Form submission handler
    document.getElementById("surveyForm").addEventListener("submit", function (e) {
        e.preventDefault();

        var formData = new FormData(this);
        var data = {};

        formData.forEach(function (value, key) {
            // Handle multiple values for the same key (checkboxes)
            if (data[key]) {
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        });

        // Display success message with submitted data
        document.getElementById("surveyForm").hidden = true;
        document.getElementById("successMessage").hidden = false;
        document.getElementById("submittedData").textContent = JSON.stringify(data, null, 2);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

function resetForm() {
    document.getElementById("surveyForm").reset();
    document.getElementById("surveyForm").hidden = false;
    document.getElementById("successMessage").hidden = true;

    // Reset survey date to today
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("surveyDate").value = today;

    window.scrollTo({ top: 0, behavior: "smooth" });
}
