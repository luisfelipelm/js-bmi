describe('BMIService',function(){

    it('should caulculate the BMI given a weight and height',function(){
        expect(BMIService.getIndex(80, 1.78)).toBe(25.24933720489837);    
    });

    it('should return null for a non valid number', function(){
        expect(BMIService.getIndex('1', '')).toBe(null);            
    });
});