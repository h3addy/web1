function Cars(car_brand, car_model){
    this.car_brand = car_brand;
    this.car_model = car_model;

    this.containsAutoPilot = function(){
        document.write("<h1>" + this.car_model + "</h1>");
    }
}