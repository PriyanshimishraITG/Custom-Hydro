// const container = document.querySelector('.slides');
// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.arrow.left');
// const nextBtn = document.querySelector('.arrow.right');
// let index = 1;
// let interval;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);
// container.appendChild(firstClone);
// container.insertBefore(lastClone, slides[0]);
// const allSlides = document.querySelectorAll('.slide');
// let slideWidth = allSlides[0].clientWidth;

// container.style.transform = `translateX(-${slideWidth * index}px)`;

// function updateSlide(newIndex, withTransition = true) {
//     if (withTransition) container.style.transition = 'transform 0.5s ease-in-out';
//     else container.style.transition = 'none';
//     container.style.transform = `translateX(-${slideWidth * newIndex}px)`;
//     index = newIndex;
// };
// function handleLoop() {
//     if (allSlides[index].isSameNode(firstClone)) updateSlide(1, false);
//     if (allSlides[index].isSameNode(lastClone)) updateSlide(allSlides.length - 2, false);
// };
// function nextSlide() {
//     if (index < allSlides.length - 1) updateSlide(index + 1);
// };
// function prevSlide() {
//     if (index > 0) updateSlide(index - 1);
// };
// function autoPlay() {
//     nextSlide();
// };
// function resetInterval() {
//     clearInterval(interval);
//     interval = setInterval(autoPlay, 4000);
// };
// // Event Listeners
// nextBtn.addEventListener('click', () => {
//     nextSlide();
//     resetInterval();
// });
// prevBtn.addEventListener('click', () => {
//     prevSlide();
//     resetInterval();
// });
// container.addEventListener('transitionend', handleLoop);
// window.addEventListener('resize', () => {
//     slideWidth = allSlides[0].clientWidth;
//     updateSlide(index, false);
// });
// interval = setInterval(autoPlay, 3000);