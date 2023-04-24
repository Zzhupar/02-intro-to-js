let vehicle =
{
brandName:"BMW",
model:"x5",
}
vehicle.model="M1";
delete vehicle.model;
console.log(vehicle);
let salaries=
{
    Aroo:100,
    Dalida:160,
    Samat:130
}
for (let key in salaries){
console.log ( (salaries.Aroo) + (salaries.Dalida)+ (salaries.Samat))
}