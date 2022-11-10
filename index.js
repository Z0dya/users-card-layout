let open = document.querySelector('.table__description-block');
let hr = document.querySelector('.hr');
let arrows = document.querySelectorAll('.arrow');


for (const arrow of arrows) {
	arrow.addEventListener('click', () => {
		console.log('!!!');
		open.classList.toggle('open');
		hr.classList.toggle('hr-view');
		arrow.classList.toggle('arrowAnim');
	});
}
