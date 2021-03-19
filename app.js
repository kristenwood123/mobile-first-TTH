let btn = document.querySelector('.darkmode');

btn.addEventListener('click', () => {
  if(btn.innerHTML === `<i class="fas fa-moon"></i>`) {
    btn.innerHTML = `<i class="fas fa-sun"></i>`
    document.body.classList.add('darkmode')
  } else {
    btn.innerHTML = `<i class="fas fa-moon"></i>`
    document.body.classList.remove('darkmode')
  }
})
