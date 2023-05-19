const balance = document.querySelector("#balance");
const inc_amt = document.querySelector("#inc-amt");
const exp_amt = document.querySelector("#exp-amt");
const trans = document.querySelector("#trans");
const form = document.querySelector("#form");
const description = document.querySelector("#desc");
const amount = document.querySelector("#amount")


const listings = document.querySelector('.trans')


const list = (transaction)=>{


const sign = transaction.amount < 0 ? "-" : "+"    
const item = document.createElement('li')
item.classList.add(transaction.amount < 0 ?  "exp" : "inc")
item.innerHTML =  `${transaction.description} <span> ${sign} ${Math.abs(transaction.amount)} </span>
 <button class="btn-del" onclick="removeTrans(${transaction.id})"> del</button>`
 
 
 trans.appendChild(item)
 console.log(transaction)
}


const localStorageTrans = JSON.parse(localStorage.getItem("trans"));
let transactions = localStorage.getItem("trans") !== null ? localStorageTrans : [];




function addTransaction(e){
  e.preventDefault();
  if(description.value.trim() == "" || amount.value.trim() == ""){
    alert("Please enter a description and amount")

  }else{
    const transaction = {
        id : uniqueId(),
        description: description.value,
        amount: +amount.value
    };
    transactions.unshift(transaction)
    list (transaction)
    description.value = "";
    amount.value = "";
    updateLocalStorage()
    

  }
}


function removeTrans(id) {
  if (confirm("Are you sure you want to delete this Transaction?")) {
    transactions = transactions.filter((transaction) => transaction.id != id);
    config();
    updateLocalStorage();
  } else {
    return;
  }
}

form.addEventListener("submit" , addTransaction)



function uniqueId(){
    return Math.floor(Math.random()  * 100000)

}





function updateLocalStorage() {
  localStorage.setItem("trans", JSON.stringify(transactions));
}


function config() {
  trans.innerHTML = "";
  transactions.forEach(list);
 
}


