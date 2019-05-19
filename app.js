const ages=[1,2,3,4,5,6,7,8,9,34,54,23,65,4,8,33];
const companies = [
    {name:"companyOne",id:1,category:"Finance"},
    {name:"companyTwo",id:2,category:"Retail"},
    {name:"companyThree",id:3,category:"Technology"},
    {name:"companyFour",id:4,category:"Finance"},
    {name:"companyFive",id:5,category:"Retail"}
]
const canHaveSex = ages.filter(age => age >=19);
console.log(canHaveSex);
const RetailCompanies = companies.filter(company => company.category === "Retail");
console.log(RetailCompanies);