describe('POS', function(){
  it('should print receipt for 1 coca cola', function(){
      var input = ['ITEM000000'],
      expectedResult = '***<没钱赚商店>购物清单***\n' +
          '名称：可口可乐，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n' +
          '----------------------\n' +
          '----------------------\n' +
          '总计：3.00(元)\n' +
          '节省：0.00(元)\n' +
          '**********************';

      var result = printInventory(input);

      expect(result).toBe(expectedResult);
  });

  it('should print receipt for 1 instant noodle', function(){
      var input = ['ITEM000005'],
      expectedResult = '***<没钱赚商店>购物清单***\n' +
          '名称：方便面，数量：1袋，单价：4.50(元)，小计：4.50(元)\n' +
          '----------------------\n' +
          '----------------------\n' +
          '总计：4.50(元)\n' +
          '节省：0.00(元)\n' +
          '**********************';

      var result = printInventory(input);

      expect(result).toBe(expectedResult);
  });

  it('should print receipt for 1 coca cola and 1 instant noodle', function(){
      var input = ['ITEM000000', 'ITEM000005'],
      expectedResult = '***<没钱赚商店>购物清单***\n' +
          '名称：可口可乐，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n' +
          '名称：方便面，数量：1袋，单价：4.50(元)，小计：4.50(元)\n' +
          '----------------------\n' +
          '----------------------\n' +
          '总计：7.50(元)\n' +
          '节省：0.00(元)\n' +
          '**********************';

      var result = printInventory(input);

      expect(result).toBe(expectedResult);
  });

  it('should print receipt for 2 coca cola', function(){
      var input = ['ITEM000000', 'ITEM000000'],
      expectedResult = '***<没钱赚商店>购物清单***\n' +
          '名称：可口可乐，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
          '----------------------\n' +
          '----------------------\n' +
          '总计：6.00(元)\n' +
          '节省：0.00(元)\n' +
          '**********************';

      var result = printInventory(input);

      expect(result).toBe(expectedResult);
  });

});
