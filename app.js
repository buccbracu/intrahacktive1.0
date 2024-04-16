document.addEventListener("DOMContentLoaded", function() {
    const databaseWizardNavItem = document.getElementById("databaseWizardNavItem");
    const competitiveProgrammingNavItem = document.getElementById("competitiveProgrammingNavItem");
    const debuggersNavItem = document.getElementById("debuggersNavItem");
    const hackathonNavItem = document.getElementById("hackathonNavItem");
  
    const databaseWizardTabButton = document.getElementById("pills-database-wizards-tab");
    const competitiveProgrammingTabButton = document.getElementById("pills-cpc-tab");
    const debuggersTabButton = document.getElementById("pills-debuggers-tab");
    const hackathonTabButton = document.getElementById("pills-hackathon-tab");
  
    databaseWizardNavItem.addEventListener("click", function(event) {
      event.preventDefault(); 
      databaseWizardTabButton.click();
    });
  
    competitiveProgrammingNavItem.addEventListener("click", function(event) {
      event.preventDefault();
      competitiveProgrammingTabButton.click();
    });
  
    debuggersNavItem.addEventListener("click", function(event) {
      event.preventDefault(); 
      debuggersTabButton.click();
    });
  
    hackathonNavItem.addEventListener("click", function(event) {
      event.preventDefault();
      hackathonTabButton.click(); 
    });
  });
  