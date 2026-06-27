const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
const tbody = document.getElementById("submissionBody");
const noDataMsg = document.getElementById("noDataMsg");

if (submissions.length === 0) {
  noDataMsg.style.display = "block";
} else {
  submissions.forEach(sub => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${sub.name}</td><td>${sub.email}</td><td>${sub.message}</td>`;
    tbody.appendChild(row);
  });
}