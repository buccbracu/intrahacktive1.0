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
                          <input type="text" id="teamName" name="teamName" placeholder="return None" required class="w-full border rounded-md px-4 py-2">
                      </div>
          `;

          if (category === "Hackathon") {
              teamInfo.innerHTML += `
              <div>
              <label for="projectName" class="block mb-1">Project Name:</label>
              <input type="text" id="projectName" name="projectName" placeholder="Club Management System" required class="w-full border rounded-md px-4 py-2 mb-4">
          </div>
          <div>
              <label for="projectPlan" class="block mb-1">Project Plan (Drive Link):</label>
              <input type="text" id="projectPlan" name="projectPlan" placeholder="https://drive.google.com/drive/folders/tDimDbI9AVBm3tx_1Hj9JyLuI4LWeCun" required class="w-full border rounded-md px-4 py-2 mb-4">
          </div>
          
              `;
          }
      }
  }

  function addMemberFields(numFields) {
      for (let i = 1; i <= numFields; i++) {
          memberInfo.innerHTML += `
  <h2 class="text-xl font-bold mb-2">Member ${i} Information</h2>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
  <div class="">
    <label for="member${i}Name" class="block mb-2">Name:</label>
    <input
      type="text"
      id="member${i}Name"
      name="member${i}Name"
      class="block w-full rounded-md border rounded-md px-4 py-2"
      placeholder="John Doe"
      required
    />
  </div>

  <div>
    <label for="member${i}GSuite" class="block mb-2">G-Suite:</label>
    <input
      type="text"
      id="member${i}GSuite"
      name="member${i}GSuite"
      class="block w-full rounded-md border rounded-md px-4 py-2"
      placeholder="jhon.doe@g.bracu.ac.bd"
      required
    />
  </div>

  <div>
    <label for="member${i}Phone" class="block mb-2">Phone No:</label>
    <input
      type="tel"
      id="member${i}Phone"
      name="member${i}Phone"
      class="block w-full rounded-md border rounded-md px-4 py-2"
      placeholder="+8801XXXXXXXXX"
      required
    />
  </div>

  <div>
    <label for="member${i}BracuID" class="block mb-2">Student ID:</label>
    <input
      type="text"
      id="member${i}BracuID"
      name="member${i}BracuID"
      class="block w-full rounded-md border rounded-md px-4 py-2"
      placeholder="20200000"
      required
    />
  </div>

  <div>
    <label for="member${i}Level" class="block mb-2">Level:</label>
    <select
      id="member${i}Level"
      name="member${i}Level"
      class="block w-full rounded-md border rounded-md px-4 py-2"
      placeholder="John"
      required
    >
      <option value="">Select Level</option>
      <option value="Senior">Senior (Done with CSE370)</option>
      <option value="Junior">Junior (Upto CSE220)</option>
    </select>
  </div>`;
      }
  }

});


const scriptURL = "https://script.google.com/macros/s/AKfycbyHnjOn9gwnXZJLjxCGBbINHB3gvkrfq7kEV2475td3matUJWLY4Dxy_NjX5U-g-lzWtw/exec";
const form = document.forms["submit-to-google-sheet"];
const submitButton = form.querySelector('button[type="submit"]');
const registrationSuccessMessage = document.getElementById("registrationSuccessMessage");

form.addEventListener("submit", (e) => {
e.preventDefault();
submitButton.textContent = "Submitting...";

fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    if (response.ok) {
      console.log("Success!", response);
      registrationSuccessMessage.classList.remove("hidden");

      document.getElementById('registrationFormContainer').classList.add('hidden');

      form.reset();
    } else {
      console.error("Error!", response.statusText);
    }
  })
  .catch((error) => console.error("Error!", error.message))
  .finally(() => {
    submitButton.textContent = "Submit";
  });
});


// Registration On Off
const registrationClosed = false;

const registrationFormContainer = document.getElementById('registrationFormContainer');
const registrationClosedMessage = document.getElementById('registrationClosedMessage');

if (registrationClosed) {
registrationFormContainer.classList.add('hidden');
registrationClosedMessage.classList.remove('hidden');
} else {
registrationFormContainer.classList.remove('hidden');
registrationClosedMessage.classList.add('hidden');
}