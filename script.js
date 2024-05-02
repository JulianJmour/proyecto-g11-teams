function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.classList.remove('active');
    });
    
    var section = document.getElementById(sectionId);
    section.classList.add('active');
  }
  