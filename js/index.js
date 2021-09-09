const paragraphs = document.querySelector('.paragraphs') //query selector retorna apenas um elemento, ou seja, o primeiro que ele encontrar referente ao .paragraphs, vai selecionar apenas o primeiro <p>

//pegando todos os <p>:

const ps = paragraphs.querySelectorAll('p') //ISSO É UMA NODELIST

//pegando estilo do body

const stylesBody = getComputedStyle(document.body) //aqui tem todo o css do body
const backgroundColorBody = stylesBody.backgroundColor

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody
  p.style.color = 'hsl(37, 59%, 19%)'
  p.style.padding = '0.5rem'
  p.style.borderRadius = '0.25rem'
  p.style.boxShadow = '0px 0px 5px hsla(0, 0%, 0%, 0.1)'
}
