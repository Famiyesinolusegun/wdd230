

//get date for the website
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`;



   // Hamburger menu toggle functionality
   const hamburger = document.getElementById('hamburger');
   const links = document.querySelector('.links');
   const mainContent = document.querySelector('.main-home');
   const heroSection = document.querySelector('.hero');
   const heroMsg = document.querySelector('#hero-msg');
   const footer = document.querySelector('footer');

   hamburger.addEventListener('click', function() {
       hamburger.classList.toggle('open');
       links.classList.toggle('open');

       if (links.classList.contains('open')) {
           const linksHeight = links.offsetHeight;

           heroSection.style.transform = `translateY(${linksHeight}px)`;
           heroMsg.style.transform = `translateY(${linksHeight}px)`;
           mainContent.style.transform = `translateY(${linksHeight}px)`;
           footer.style.transform = `translateY(${linksHeight}px)`;
           mainContent.style.transition = 'transform 0.3s ease';
       } else {
           heroSection.style.transform = 'translateY(0)';
           heroMsg.style.transform = 'translateY(0)';
           mainContent.style.transform = 'translateY(0)';
           footer.style.transform = 'translateY(0)';
       }
   });
    

 

 
  
 
document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.querySelector('.calendar');
    const calendarHeader = document.getElementById('calendar-header');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    function generateCalendar(year, month) {
        calendarContainer.innerHTML = '';
        calendarHeader.textContent = `${monthNames[month]} ${year}`;

        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'header');
            dayElement.textContent = day;
            calendarContainer.appendChild(dayElement);
        });

        const firstDay = new Date(year, month, 1).getDay();

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyElement = document.createElement('div');
            emptyElement.classList.add('day', 'empty');
            calendarContainer.appendChild(emptyElement);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            calendarContainer.appendChild(dayElement);
        }
    }

    generateCalendar(year, month);
}); 


// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const heroImg = document.querySelector('.hero-img');

darkModeToggle.addEventListener('click', () => {
    console.log('Dark mode toggle clicked');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        
    } else {
       
    }

    // Toggle dark mode icon text content
    if (darkModeToggle.textContent.includes("🔆")) {
        darkModeToggle.textContent = "🌚";
    } else {
        darkModeToggle.textContent = "🔆";
    }
});