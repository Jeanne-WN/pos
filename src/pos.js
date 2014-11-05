function printItemLineFor(item){
  return '名称：' + item.name + '，' +
  '数量：1' + item.unit + '，' +
  '单价：' + item.price.toFixed(2) + '(元)，' +
  '小计：' + item.price.toFixed(2) + '(元)\n'
}

function receiptFor(purchase){
  return '***<没钱赚商店>购物清单***\n' + printItemLineFor(purchase) +
      '----------------------\n' +
      '----------------------\n' +
      '总计：' + purchase.price.toFixed(2) + '(元)\n' +
      '节省：0.00(元)\n' +
      '**********************';
}

function printInventory(input) {
  var allItems = loadAllItems(),
      purchase = {};
  allItems.forEach(function(item){
    if(item.barcode == input) purchase = item;
  });

  return receiptFor(purchase);
};
