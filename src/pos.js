function printInventory(input) {
  var allItems = loadAllItems(),
      purchase = {};
  allItems.forEach(function(item){
    if(item.barcode == input) purchase = item;
  });

  return '***<没钱赚商店>购物清单***\n' +
      '名称：' + purchase.name + '，' +
      '数量：1' + purchase.unit + '，' +
      '单价：' + purchase.price.toFixed(2) + '(元)，' +
      '小计：' + purchase.price.toFixed(2) + '(元)\n' +
      '----------------------\n' +
      '----------------------\n' +
      '总计：' + purchase.price.toFixed(2) + '(元)\n' +
      '节省：0.00(元)\n' +
      '**********************';
};
