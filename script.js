 function() {
  const list = document.getElementById("band-list"); 
  const items = [...list.children];

  items.sort((a, b) => a.textContent.localeCompare(b.textContent)); 

  // Append sorted items back to the <ul>
  items.forEach(item => list.appendChild(item));
};