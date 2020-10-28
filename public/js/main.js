var app = new Vue({
    el: '#app',
    data: {
        placeholder: ['Your Message', 'name', 'E-mail', 'Subject'],
        active: false,

    },
    methods: {},
    computed: {
        sliderH() {
            var topH = document.querySelector('header').offsetHeight;
            var windowH = window.innerHeight;
            var H = windowH - topH
            return H
        }
    },
})