// class Car{
//     constructor(name,year){
//         this.name=name
//         this.year=year
//     }
//     display(){
//         console.log(this.name,this.year);
        
//     }
    
// }
// bmw=new Car('bmw',2022)
// bmw.display()


d={
    f_name:'manu',
    l_name:'lal',
    age:20,
    full_name:function(){
        return this.f_name+this.l_name
    }
}
console.log(d.full_name());
