var BMIService = {
    
    getIndex: function(weight, height) {
        if ((typeof (weight) !== 'number') || (typeof (height) !== 'number'))
            return null;
        else
            return weight / (height * height);
    },
    
    getDescription: function (index) {
        if (index < 17) {
            var tr = document.querySelector('.abaixo17');
            tr.removeClass;
            tr.className = 'selected-row'; 
        }
        else if ((index >= 17) && (index <= 18.49)) {
            var tr = document.querySelector('.entre17_18');
            tr.removeClass;
            tr.className = 'selected-row'; 
        }
        else if ((index >= 18.5) && (index <= 24.99)) {
            var tr = document.querySelector('.entre18_24');
            tr.removeClass;
            tr.className = 'selected-row'; 
        }
        else if ((index >= 25) && (index <= 29.99)) {
            var tr = document.querySelector('.entre25_29');
            tr.removeClass;
            tr.className = 'selected-row'; 
        }
        else if ((index >= 30) && (index <= 34.99)) {
            var tr = document.querySelector('.entre30_34');
            tr.removeClass;
            tr.className = 'selected-row'; 
        }
        else if ((index >= 35) && (index <= 39.99)) {
            var tr = document.querySelector('.entre35_39');
            tr.removeClass;
            tr.className = 'selected-row'; 
        }
        else if (index >= 40) {
            var tr = document.querySelector('.acima40');
            tr.removeClass;
            tr.className = 'selected-row'; 
        }
    }
};