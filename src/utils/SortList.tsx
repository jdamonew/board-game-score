export function OrderList (list: any){
    return list.sort(function (a: any, b: any) {
        if (a.value > b.value) {
          return -1;
        }
        if (a.value < b.value) {
          return 1;
        }
        return 0;
      });
}