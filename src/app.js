import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        exchangeRates: [],
        selectedRate: null,
        amountToConvert: null
    },
    computed: {
        convertedAmount: function(){
            return (this.amountToConvert * this.selectedRate).toFixed(2);
        }

    },
    mounted(){
        this.fetchRates();
    },
    methods: {
        fetchRates: function(){
            fetch('https://api.exchangeratesapi.io/latest')
            .then( response => response.json())
            .then( data => this.exchangeRates = data.rates);
            // .catch(err => console.error(err));
          }
    }
  });
});
