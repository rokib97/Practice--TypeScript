const user = {
  name: "rokib",
  age: 25,
  email: "a@b.com",
  isActive: true,
};

// params type declare
function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "rokib", isPaid: true });

// returb type also a object
function createCourse(): {
  name: string;
  price: number;
} {
  return { name: `react js`, price: 999 };
}
createCourse();

// Type Aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUserUsingAliases(u: User): User {
  return { name: "", email: "", isActive: true };
}
createUserUsingAliases({ name: "", email: "", isActive: true });

// readOnly and optional
type UserOne = {
  readonly _id: string;
  name: string;
  email: string;
  isACtibve: boolean;
  creditCardDetails?: number;
};

let myUser: UserOne = {
  _id: "152461",
  name: "rokib",
  email: "a@b.com",
  isACtibve: true,
};

// mixmax more than one alias
type CardNumber = {
  cardNumber: string;
};
type CardDate = {
  cardDate: string;
};
type CardDetails = CardNumber &
  CardDate & {
    eev: string;
  };

const cardDetails: CardDetails = {
  cardNumber: "1451asxxxxx",
  cardDate: "15-15-1998",
  eev: "adsasdasd1451asxxxxx",
};

console.log(cardDetails.cardDate);

export {};
