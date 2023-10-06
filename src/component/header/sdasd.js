class Animal { 
     name: string; 
     constructor(name: string)
      { 
        this.name = name; 5 }
    move(meters: number = 0) { 7 console.log('${this.name} moved ${meters}m.'); 8 } 9} 10 11class Cat extends Animal { 12 age: number; 13 constructor(name: string, age:number) { 14 15 this.age = age; 16 } 17 move(meters = 5) { 18 console.log("mew..."); 19 super.move(meters); 20 } 21} 22let cat = new Cat("Tom",3); 23cat.move();