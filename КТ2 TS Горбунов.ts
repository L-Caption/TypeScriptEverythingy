// - #1 --------------------------------------------------
type Discount = 
  | { kind: "percent"; value: number } 
  | { kind: "fixed"; valueRub: number };

function applyDiscount(price: number, discount?: Discount): number {
  if (!discount) return price;
  switch (discount.kind) {
    case "percent":
      return price - (price * (discount.value / 100));
    case "fixed":
      return Math.max(0, price - discount.valueRub);
  }
}
// =======================================================

// - #2 --------------------------------------------------
abstract class OrderLine {
  constructor(public name: string, public price: number) {}
  abstract total(): number;
}
class ServiceLine extends OrderLine {
  total() {
    return this.price;
  }
}
class PartLine extends OrderLine {
  total() {
    const tax = 1.2;
    return this.price * tax;
  }
}
function calculateInvoiceTotal(lines: OrderLine[], discount?: Discount): number {
  const sum = lines.reduce((acc, line) => acc + line.total(), 0);
  return applyDiscount(sum, discount);
}
// =======================================================

// - #3 --------------------------------------------------
type CustomerType = "individual" | "company";
interface Order {
  customerType: CustomerType;
  amount: number;
}

function processBankTransfer(order: Order) {
  if (order.customerType !== "company") {
    throw new Error("Оплата по счету доступна только для юридических лиц.");
  }
  console.log(`Счет на сумму ${order.amount} руб. выставлен компании.`);
}
// =======================================================


// -=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-
const myOrderLines: OrderLine[] = [
  new ServiceLine("Замена масла", 1000),
  new PartLine("Масляный фильтр", 500) // 500 * 1.2 = 600
];

const totalRaw = calculateInvoiceTotal(myOrderLines); 
console.log("Итого без скидки:", totalRaw); // 1600

const totalWithDiscount = calculateInvoiceTotal(myOrderLines, { kind: "percent", value: 10 });
console.log("Итого со скидкой 10%:", totalWithDiscount); // 1440

// #Проверка
const companyOrder: Order = { customerType: "company", amount: totalWithDiscount };
processBankTransfer(companyOrder); // чтт оно работает