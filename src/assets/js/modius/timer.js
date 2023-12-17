
function timer() {

    const dedline = new Date(2023, 31, 11);

    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTime() {
        const diff = dedline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }

        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;

        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;

        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;

        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    const $days = document.querySelector('.timer-days');
    const $hours = document.querySelector('.timer-hours');
    const $minutes = document.querySelector('.timer-minutes');
    const $seconds = document.querySelector('.timer-seconds');

    countdownTime();

    timerId = setInterval(countdownTime, 1000)
}
export default timer
