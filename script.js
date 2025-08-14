const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');

if (localStorage.mode === 'dark') document.body.classList.add('dark');

darkBtn.onclick = () => {
  document.body.classList.add('dark');
  localStorage.mode = 'dark';
};

lightBtn.onclick = () => {
  document.body.classList.remove('dark');
  localStorage.mode = 'light';
};
