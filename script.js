const branches = {
  cse: {
    "Data Structures": { notes: "cse-ds-notes.pdf", youtube: "https://www.youtube.com/embed/playlistId1" },
    "Algorithms": { notes: "cse-algo-notes.pdf", youtube: "https://www.youtube.com/embed/playlistId2" }
  },
  ece: {
    "Digital Circuits": { notes: "ece-dc-notes.pdf", youtube: "https://www.youtube.com/embed/playlistId3" },
    "Signals": { notes: "ece-signals-notes.pdf", youtube: "https://www.youtube.com/embed/playlistId4" }
  },
  mech: {
    "Thermodynamics": { notes: "mech-thermo-notes.pdf", youtube: "https://www.youtube.com/embed/playlistId5" },
    "Fluid Mechanics": { notes: "mech-fluid-notes.pdf", youtube: "https://www.youtube.com/embed/playlistId6" }
  }
};

const branchSelect = document.getElementById("branchSelect");
const subjectSelect = document.getElementById("subjectSelect");
const contentSection = document.getElementById("contentSection");
const notesLink = document.getElementById("notesLink");
const youtubeEmbed = document.getElementById("youtubeEmbed");

branchSelect.addEventListener("change", () => {
  const branch = branchSelect.value;
  subjectSelect.innerHTML = `<option value="">--Select Subject--</option>`;
  if (branch) {
    Object.keys(branches[branch]).forEach(subject => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      subjectSelect.appendChild(option);
    });
    subjectSelect.disabled = false;
  } else {
    subjectSelect.disabled = true;
    contentSection.style.display = "none";
  }
});

subjectSelect.addEventListener("change", () => {
  const branch = branchSelect.value;
  const subject = subjectSelect.value;
  if (subject) {
    const { notes, youtube } = branches[branch][subject];
    notesLink.href = notes;
    youtubeEmbed.src = youtube;
    contentSection.style.display = "block";
  } else {
    contentSection.style.display = "none";
  }
});