function printItemLineFor(item){
  return '名称：' + item.name + '，' +
  '数量：1' + item.unit + '，' +
  '单价：' + item.price.toFixed(2) + '(元)，' +
  '小计：' + item.price.toFixed(2) + '(元)\n'
}

function totalPriceOf(itemList){
  return itemList.reduce(function(totalPrice, item){
    return totalPrice += item.price;
  }, 0);
}

function receiptFor(purchases){
  var itemLines = purchases.reduce(function(itemLines, purchase){
    return itemLines += printItemLineFor(purchase);
  },'');

  return  '***<没钱赚商店>购物清单***\n' +
          itemLines +
          '----------------------\n' +
          '----------------------\n' +
          '总计：' + totalPriceOf(purchases).toFixed(2) + '(元)\n' +
          '节省：0.00(元)\n' +
          '**********************';
}

function printInventory(input) {
  var allItems = loadAllItems(),
      purchases = [];

  input.forEach(function(one){
    allItems.forEach(function(item){
      if(item.barcode == one) purchases.push(item);
    });
  });


  return receiptFor(purchases);
};
