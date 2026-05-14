
st form = document.getElementById("leadForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Thank you! Your request has been submitted.");
    form.reset();
  });
}
