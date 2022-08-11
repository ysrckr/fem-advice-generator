import 'normalize.css'
import './style.css'
import axios from 'axios'

const getNewAdvice = axios.create({
	baseURL: 'https://api.adviceslip.com',
})

const getNewAdviceButton: HTMLButtonElement = document.querySelector('.btn')!
const adviceText: HTMLParagraphElement = document.querySelector('.quotes')!
const adviceTitle: HTMLHeadingElement = document.querySelector('.title')!
const divider: HTMLImageElement = document.querySelector('.divider')!

const displayNewAdvice = async () => {
	const res = await getNewAdvice.get('/advice')
	const advice = await res.data.slip.advice
	adviceText.innerHTML = '&ldquo;' + advice + '&rdquo;'
	adviceTitle.innerText = 'ADVICE #' + (await res.data.slip.id)
}

const checkScreenSize = () => {
	if (window.innerWidth < 768) {
		divider.src = '/images/pattern-divider-mobile.svg'
	} else {
		divider.src = '/images/pattern-divider-desktop.svg'
		divider.style.width = '100%'
	}
}

getNewAdviceButton.addEventListener('click', displayNewAdvice)

addEventListener('resize', () => {
	if (innerWidth < 576) {
		return
	}
	divider.src = '/images/pattern-divider-desktop.svg'
	divider.style.width = '100%'
})

displayNewAdvice()
checkScreenSize()
