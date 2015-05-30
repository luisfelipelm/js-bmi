var BMIService = {
    
    getIndex: function(weight, height) {
        if ((typeof (weight) !== 'number') || (typeof (height) !== 'number'))
            return null;
        else
            return weight / (height * height);
    },
    
    getDescription: function (index) {
        //TODO to be implemented
        return "";
    }
};