sdsu = document.querySelector('#sdsu')

sdsu.addEventListener('click', () => {
  sdsu.innerHTML = "San Diego State University"
  sdsu.classList.add("expanded")
});

bands = document.querySelector('#bands')

bands.addEventListener('click', () => {
  bands.innerHTML = "<i>The Chardoors</i>, <i>The Half Wits</i>, <i>Lime Devil</i>, and <i>The Hot Socks</i>"
  bands.classList.add("expanded")
});

song = document.querySelector('#song')

song.addEventListener('click', () => {
  song.innerHTML = "<i>Demented</i> and <i>Kazoo</i>"
  song.classList.add("expanded")
});

age = document.querySelector('#age')

age.addEventListener('click', () => {
  age.setAttribute("info", "full");
  age.classList.add("expanded")
});



function updateAge() {

  const age = document.querySelector('#age');

  if (age.getAttribute("info") != "full") {
    return
  }


  const pastDate = new Date(2003, 5, 10, 8, 0, 0); 
  const currentDate = new Date(); 

  ms = (currentDate - pastDate)
  s = ms / 1000
  m = s / 60
  h = m / 60
  d = h / 24
  y = d / 365

  age.textContent = (y.toFixed(8))

}

setInterval(updateAge, 100);


images = document.querySelectorAll(".thumbnail") 

seed = 0

for (image of images)  {

  seed = seed * 13 + 13
  seed %= 20
  image.style.transform = `rotate(${seed - 10}deg)`
}


marks = document.querySelectorAll(".mark") 

for (mark of marks)  {

  mark.addEventListener("click", function() {
    for (mark of marks) mark.classList.remove("selected_mark");

    this.classList.add("selected_mark");
  });

  mark.addEventListener("click", function() {
    swap_content(this.getAttribute('destination'));
  });

}


sections = document.querySelectorAll(".section")

for (section of sections)  {
  if (section.id != 'introduction') {section.style.display = 'none'}
}


function swap_content(new_section) {

  sections = document.querySelectorAll(".section")

  console.log(sections)

  for (section of sections)  {
    if (section.id != new_section) {section.style.display = 'none'}

    else section.style.display = 'block'
  }

}