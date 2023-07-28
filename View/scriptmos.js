document.addEventListener("DOMContentLoaded", () => {
    const donationForm = document.getElementById("donationForm");
  
    donationForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = new FormData(donationForm);
      const payload = {};
      formData.forEach((value, key) => {
        payload[key] = value;
      });
  
      // Convert the payload to JSON before sending it to the API
      const jsonData = JSON.stringify(payload);
  
      // Send the payload to the API using fetch or any other method you prefer
      fetch("http://localhost:3000/Donation/DonateNow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((response) => {
          // Handle the response from the API if needed
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  