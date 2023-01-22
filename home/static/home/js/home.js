$( document ).ready(function() {


    var app = new Vue({
        delimiters: ['[[', ']]'],
        el: '#home',
        data: {
            message: 'Hello Vue!',
        },
        methods: {
            greet() {
                if(this.message=='Hello Vue!'){
                    this.message = 'Hello zahur'
                }else{
                    this.message = 'Hello Vue!'
                }
                
            }
        }
    });
});