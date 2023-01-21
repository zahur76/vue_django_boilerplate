$( document ).ready(function() {


    var app = new Vue({
        delimiters: ['[[', ']]'],
        el: '#home',
        data: {
            message: 'Hello Vue!',
        },
        methods: {
            greet() {
                this.message = 'Hello zahur'
            }
        }
    });

    console.log('zazazaewrw')

});