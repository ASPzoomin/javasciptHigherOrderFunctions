const ages=[1,2,3,4,5,6,7,8,9,34,54,23,65,4,8,33];
const companies = [
    {name:"companyOne",id:1,category:"Finance",start:1980,end:2030},
    {name:"companyTwo",id:2,category:"Retail",start:1987,end:2098},
    {name:"companyThree",id:3,category:"Technology",start:2011,end:2222},
    {name:"companyFour",id:4,category:"Finance",start:2012,end:2221},
    {name:"companyFive",id:5,category:"Retail",start:2031,end:2121}
]
const canHaveSex = ages.filter(age => age >=19);
console.log(canHaveSex);
const RetailCompanies = companies.filter(company => company.category === "Retail");
console.log(RetailCompanies);
const companyName = companies.map(company => company.name);
console.log(companyName);
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);
const startDateTimesTwo = companies.map(company => company.start*2);
console.log(startDateTimesTwo);
const endDateSquare = companies.map(company => Math.sqrt(company.end));
console.log(endDateSquare);
const sortCompaniesByYears = companies.sort((a,b) => a.start>b.start ? 1:-1);
console.log(sortCompaniesByYears);
