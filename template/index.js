class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Bill {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem = (item) => {
    this.items.push(item);
    this.render();
    this.billTotal();
  };

  removeItem = (nome) => {
    //TODO
  };

  billTotal = () => {
    /*var total = this.items.reduce((acumulador,valorAtual)=>{
        return acumulador + valorAtual.price},0);
        console.log(total);*/

      var total = 0;
        for(var i= 0; i < this.items.length; i++ ){
        total += this.items[i].price;
      }
      document.getElementById('total').innerHTML = 'R$ ' + total;
    
  };

  render = () => {
    //UNFINISHED
    let billContainer = document.getElementById("items");
    billContainer.innerHTML = "";
    this.items.map((item) => {
      let row = document.createElement("tr");
      let foodName = document.createElement("td");
      let foodPrice = document.createElement("td");
      foodName.innerHTML = item.name;
      foodPrice.innerHTML = "R$ " + item.price;

      row.append(foodName);
      row.append(foodPrice);
      billContainer.append(row);
    });
  };
}

var bill = new Bill();

function init() {
  document.getElementsByTagName("body")[0].style.display = "flex";
}

function limparComanda(){
  let inputProduto = document.querySelector('#produto');
  let inputPreco = document.querySelector('#preco');

  inputProduto.value = '';
  inputPreco.value = '';
}
function printBill() {
  window.print();
  window.limparComanda();
  bill.render();
}

function adicionarItem(){
//document ou query selector (inputs)
  let itemName = document.querySelector('#produto').value;
  let itemPrice = document.querySelector('#preco').value;
  itemPrice = parseFloat(itemPrice);

   bill.addItem(new Item(itemName, itemPrice));
   bill.billTotal();
   limparComanda();
   bill.render();
}

