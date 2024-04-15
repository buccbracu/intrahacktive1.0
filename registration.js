document.addEventListener("DOMContentLoaded", function() {

    const categorySelect = document.getElementById("category");
    const memberInfo = document.getElementById("memberInfo");
    const form = document.getElementById("registrationForm");

    categorySelect.addEventListener("change", function() {
        const category = this.value;
        memberInfo.innerHTML = "";

        let numMembers;
        switch (category) {
            case "Hackathon":
                numMembers = 3;
                addExtraFields("Hackathon");
                break;
            case "Debuggers":
                numMembers = 1;
                addExtraFields("Debuggers");
                break;
            case "Database Wizards":
                numMembers = 2;
                addExtraFields("Database Wizards");
                break;
            case "CPC":
                numMembers = 3;
                addExtraFields("CPC");
                break;
            default:
                numMembers = 0;
                break;
        }

        if (numMembers > 0) {
            addMemberFields(numMembers);
        }
    });

    function addExtraFields(category) {
        const teamInfo = document.getElementById("teamInfo");
        teamInfo.innerHTML = "";

        if (category === "Hackathon" || category === "CPC" || category === "Database Wizards") {
            teamInfo.innerHTML += `
                <div class="w-full mb-4">
                    <div class="">
                        <div>
                            <label for="teamName" class="block mb-1">Team Name:</label>
                            <input type="text" id="teamName" name="teamName" required class="w-full border rounded-md px-4 py-2">
                        </div>
            `;

            if (category === "Hackathon") {
                teamInfo.innerHTML += `
                <div>
                <label for="projectName" class="block mb-1">Project Name:</label>
                <input type="text" id="projectName" name="projectName" required class="w-full border rounded-md px-4 py-2 mb-4">
            </div>
            <div>
                <label for="projectPlan" class="block mb-1">Project Plan (Drive Link):</label>
                <input type="text" id="projectPlan" name="projectPlan" required class="w-full border rounded-md px-4 py-2 mb-4">
            </div>
            
                `;
            }
        }
    }

    function addMemberFields(numFields) {
        for (let i = 1; i <= numFields; i++) {
            memberInfo.innerHTML += `
            <div class="w-full bg-white rounded-md shadow-md p-4 mb-4">
            <h2 class="text-xl font-bold mb-2">Member ${i} Information</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="md:col-span-2"> <!-- This div spans two columns on medium screens and takes full width -->
                    <label for="member${i}Name" class="block mb-1">Name:</label>
                    <input type="text" id="member${i}Name" name="member${i}Name" required class="w-full border rounded-md px-4 py-2">
                </div>
                <div>
                    <label for="member${i}GSuite" class="block mb-1">G-Suite:</label>
                    <input type="text" id="member${i}GSuite" name="member${i}GSuite" required class="w-full border rounded-md px-4 py-2">
                </div>
                <div>
                    <label for="member${i}Phone" class="block mb-1">Phone No:</label>
                    <input type="tel" id="member${i}Phone" name="member${i}Phone" required class="w-full border rounded-md px-4 py-2">
                </div>
                <div>
                    <label for="member${i}BracuID" class="block mb-1">BRACU ID:</label>
                    <input type="text" id="member${i}BracuID" name="member${i}BracuID" required class="w-full border rounded-md px-4 py-2">
                </div>
                <div>
                    <label for="member${i}Level" class="block mb-1">Level:</label>
                    <select id="member${i}Level" name="member${i}Level" required class="w-full border rounded-md px-4 py-2">
                        <option value="">Select Level</option>
                        <option value="Senior">Senior (Done with CSE370)</option>
                        <option value="Junior">Junior (Done with CSE220)</option>
                    </select>
                </div>
            </div>
        </div>
        
            `;
        }
    }

});


const scriptURL = "https://script.google.com/macros/s/AKfycbyL3LX7ArAvFcyT_fT8SbCPHxJpPaV7leWhaZhOTYV7WiUtxALbWubCRlfV817akQP6/exec";
const form = document.forms["submit-to-google-sheet"];
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.textContent = "Submitting..."; // Change button text
  
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        console.log("Success!", response);
        // Redirect to registration-success.html
        window.location.href = "registration-success.html";
      } else {
        console.error("Error!", response.statusText);
      }
    })
    .catch((error) => console.error("Error!", error.message))
    .finally(() => {
      submitButton.textContent = "Submit"; // Revert button text
    });
});