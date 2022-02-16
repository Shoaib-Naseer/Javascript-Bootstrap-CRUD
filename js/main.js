// importing productdb method 
import productdb from "./module.js";
productdb("productdb",{
    products:`++id,name,seller,price`
});

// Selecting input tags

const userid = document.getElementById("userid");
const proname = document.getElementById("proname");
const seller = document.getElementById("seller");
const price = document.getElementById("price");

// selecting Button tags

const btncreate = document.getElementById('btn-create');
const btnread = document.getElementById('btn-read');
const btnupdate = document.getElementById('btn-update');
const btndelete = document.getElementById('btn-delete');