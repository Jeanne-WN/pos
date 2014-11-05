describe('POS', function(){
  it('should print receipt for 1 coca cola', function(){
      var input = ['ITEM000000'],
      expectedResult = '***<没钱赚商店>购物清单***\n' +
          '名称：可口可乐，数量：1个，单价：3.00(元)，小计：3.00(元)\n' +
          '----------------------\n' +
          '----------------------\n' +
          '总计：3.00(元)\n' +
          '节省：0.00(元)\n' +
          '**********************';

      var result = printInventory(input);

      expect(result).toBe(expectedResult);
  });
});
