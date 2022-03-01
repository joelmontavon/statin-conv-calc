var App = {
    data () {
      return {
        drugOptions: drugOptions,
        drugSelected: drugOptions[5].value,
        strengthOptions: drugs[drugOptions[5].value].howSupp,
        strengthSelected: drugs[drugOptions[5].value].howSupp[0],
        results: []
      }
    },
    methods: {
      drugChanged(val) {
        this.strengthOptions = drugs[val].howSupp;
        this.strengthSelected = drugs[val].howSupp[0];
        this.strengthChanged(this.strengthSelected);
      },
      strengthChanged(val) {
        var self = this;
        var results = [];
        var minVal = val/drugs[this.drugSelected].convFact[1];
        var maxVal = val/drugs[this.drugSelected].convFact[0];

        Object.keys(drugs).forEach(function(key) {
          var drug = drugs[key];
          var min = minVal * drug.convFact[0];
          min = (drug.howSupp[0] <= min && min <= drug.howSupp[drug.howSupp.length - 1]) ? min : 'N/A';
          var max = maxVal * drug.convFact[1];
          max = (drug.howSupp[0] <= max && max <= drug.howSupp[drug.howSupp.length - 1]) ? max : 'N/A';

          if (min == max) {
            var strength = min;
          } else if (min == 'N/A') {
            var strength = max;
          } else if (max == 'N/A') {
            var strength = min;
          } else {
            var strength = String(min) + '-' + String(max);
          }

          if (key == self.drugSelected) {
            strength = val;
          }

          if (strength != 'N/A') {
            strength += ' mg'
          }

          results.push({
            drug: key,
            brand: drug.brand,
            img: drug.img,
            max: max,
            min: min,
            strength: strength
          });
        });

        this.results = results;
      }
    },
    mounted() {
      this.strengthChanged(this.strengthSelected);
    }
}

var app = Vue.createApp(App);
app.use(ElementPlus);
app.mount('#app')
