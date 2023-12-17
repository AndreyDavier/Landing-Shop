import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function slider() {

    const allSliders = document.querySelectorAll("[data-slider]")

    allSliders.forEach((slider) => {
        const nextBtn = document.querySelector(`#${slider.id}-next`),
            prevBtn = document.querySelector(`#${slider.id}-prev`);

        return new Swiper(`#${slider.id}`, {

            modules: [Navigation, Pagination],
            pagination: { el: ".swiper-pagination" },
            spaceBetween: 30,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },

            slidesPerView: +slider.dataset.slider,
        });


    })
}
export default slider