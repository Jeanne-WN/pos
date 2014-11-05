function printItemLineFor(item){
  return '名称：' + item.name + '，' +
  '数量：'+ item.quantity + item.unit + '，' +
  '单价：' + item.unitPrice.toFixed(2) + '(元)，' +
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

function findItem(one, itemList){
  return itemList.reduce(function(result, item){
    return item.barcode == one ? item : result;
  }, undefined);
}

function prepareInput(input){
  return input.reduce(function(result, one){
    var pairs = one.split('-'),
        num = pairs[1] || 1;
    loop(num, function(){
      result.push(pairs[0]);
    });
    return result;
  }, []);
}

function printInventory(input) {
  var allItems = loadAllItems(),
      purchases = [];

  prepareInput(input).forEach(function(one){
    var existed = findItem(one, purchases);
    if(existed){
      existed.quantity += 1;
      existed.price += existed.unitPrice;
    }else{
      purchases.push(new Item(findItem(one, allItems)));
    }
  });


  return receiptFor(purchases);
};
