function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    let activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block";
    }
}