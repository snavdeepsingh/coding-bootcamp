function Animal(raining, noise){
    this.raining = raining;
    this.noise = noise;

    this.makeNoise = function() {
        if( this.raining )
            console.log(this.noise);
    }
}
let dog = new Animal(true, "Woof!");
let cat = new Animal(false, "Meow!");
let horse = new Animal(true, "Neighhhhhhhhh");

dog.makeNoise();
cat.raining = true;
cat.makeNoise();

horse.makeNoise();

function massHysteria(cat, dog){
    if( cat.raining && dog.raining )
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
}

massHysteria(cat, dog);

