//[id , brand , model , type , pricePerDay, available]
carBooking =[
    [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
    [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
    [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
    [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
    [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
]

// print all car brands
console.log(`1) All car brand is`);
carBooking.forEach(brands => {
    console.log(brands[1]);
});
// print total number of cars avaiable
console.log(`2)total number of cars avaiable`);
total=carBooking.map(f=>f[5]).reduce((a1,a2)=>a1+a2)
console.log(total);
// print sedan cars details
console.log('3) sedan cars details');
sedan=carBooking.filter(sdn=>sdn[3]=='Sedan')
console.log(sedan);
// print cars with price per day greater than 60
console.log('4) cars with price per day greater than 60');
high=carBooking.filter(a=>a[4]>60)
console.log(high);
// print details  of jeeep wrangler
console.log('5)details  of jeep wrangler');
jeeep=carBooking.filter(wlr=>wlr[2]=='Wrangler')
console.log(jeeep);
// sorts cars based on desending order of the price per day
console.log('6) cars based on desending order of the price per day');
carBooking.sort((a,b)=>b[4]-a[4])
console.log(carBooking);
// sorts cars based on asending order of avaiable cars
console.log('7) cars based on asending order of avaible car');
carBooking.sort((a,b)=>a[5]-b[5])
console.log(carBooking);
// find the most avaiable cars
console.log('8)the most avaiable cars');
console.log(carBooking.reduce((b1,b2)=>b1[5]>b2[5]?b1:b2));
// calculate the revenue if all cars are rented
console.log('9)the revenue if all cars are rented');
totalRevenue=carBooking.map(f=>f[4]).reduce((a1,a2)=>a1+a2)
console.log(totalRevenue);
// count  the number of sedan cars
console.log('10)the number of sedan cars');
sedn=carBooking.filter(sdn=>sdn[3]=='Sedan')
totalSedan=sedn.map(f=>f[5]).reduce((a1,a2)=>a1+a2)
console.log(totalSedan);
// print all unique car
console.log(' all unique car');
carBooking.forEach(brands => {
    console.log(brands[1]);
});
// find the total number of cars for all types
console.log('12)find the total number of cars for all types');
totalCar=carBooking.map(f=>f[5]).reduce((a1,a2)=>a1+a2)
console.log(totalCar);
// find the cars with the fewest avaiable cars 
console.log('13)the cars with the fewest avaiable cars ');
low=carBooking.reduce((c1,c2)=>c1[5]<c2[5]?c1:c2)
console.log(low);
// check if there is any car with a price per day of exactly 55
console.log('14)check if there is any car with a price per day of exactly 55');
check=carBooking.some((d1)=>d1[4]>55)
console.log(check?'yes':'no');
//[id , brand , model , type , pricePerDay, available]
