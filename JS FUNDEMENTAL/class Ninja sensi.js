class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength  = 3;
    }
    sayName() {
        
        console.log(` your Ninja name is  ${ this.name } `);
        return this;
    }
    showStats() {
       
        console.log(`your health is  ${ this.health } and your strenght is ${this.strength} .`);
        return this;
    }
    drinkSake() {
        this.health += 10;
       
    }

}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
///////////////////////////////
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const drink = super.drinkSake();
        drink;
        console.log("Wisdom: " + this.wisdom + ", 'We are Programmers,we have no life '")
        return this
    }

    showStatsW() {
        const stats = super.showStats();
        stats;
        console.log("Wisdom: " + this.wisdom);
        return this;
    }

  
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStatsW();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
superSensei.showNameClass();