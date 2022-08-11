import 'normalize.css'
import './style.css'
import axios from 'axios'

const getNewAdvice = axios.create({
	baseURL: 'https://api.adviceslip.com',
})

const getNewAdviceButton: HTMLButtonElement = document.querySelector('.btn')!
const adviceText: HTMLParagraphElement = document.querySelector('.quotes')!
const adviceTitle: HTMLHeadingElement = document.querySelector('.title')!

const displayNewAdvice = async () => {
	const res = await getNewAdvice.get('/advice')
	const advice = await res.data.slip.advice
	adviceText.innerHTML = '&ldquo;' + advice + '&rdquo;'
	adviceTitle.innerText = 'ADVICE #' + (await res.data.slip.id)
}

displayNewAdvice()

getNewAdviceButton.addEventListener('click', displayNewAdvice)
