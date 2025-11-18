// Array of writings
const writings = [
  {
    date: "2025-11-19",
    title: "First Story / Vlog",
    description: "Short description of your story or vlog.",
    link: "#"
  },
  {
    date: "2025-11-20",
    title: "Second Story / Vlog",
    description: "Another interesting post.",
    link: "#"
  },
  // Add new writings here
];

// Load writings dynamically
const container = document.getElementById('writing-list');

writings.forEach(w => {
  const card = document.createElement('div');
  card.className = 'card fade-in';
  card.innerHTML = `
    <h3>${w.title}</h3>
    <p><strong>${w.date}</strong> — ${w.description}</p>
    <a href="${w.link}">Read More</a>
  `;
  container.appendChild(card);
});
