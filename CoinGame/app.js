function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');
window.addEventListener('keyup', function(e){
	if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
		e.key === 'ArrowDown' ? moveVertical(avatar, 50):moveVertical(avatar, -50)
	}
	if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
		e.key === 'ArrowRight' ? moveHorizontal(avatar, 50):moveHorizontal(avatar, -50)
		e.key === 'ArrowRight' ? avatar.style.transform = `scale(1,1)`:avatar.style.transform = `scale(-1,1)`
	}
	if (isTouching(avatar, coin)){
		console.log("Touching!")
		moveCoin();
	}
});

const moveVertical = (element, amount) => {
	const intPos = extractPos(element.style.top)
	element.style.top =  `${intPos+amount}px`
}

const moveHorizontal = (element, amount) => {
	const intPos = extractPos(element.style.left)
	element.style.left =  `${intPos+amount}px`
}

const moveCoin = () => {
	const coinLeft = Math.floor(Math.random() * window.innerWidth)
	const coinTop  = Math.floor(Math.random() * window.innerHeight)
	coin.style.left = `${coinLeft}px`
	coin.style.top  = `${coinTop}px`
}
moveCoin();

const extractPos = (pos) => {
	if(!pos) return 100;	
	return parseInt(pos.slice(0,-2));
}