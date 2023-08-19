let score: string | number = 33;

score = "55";
score = 120;

type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};

let rokib: User | Admin = {
  name: "rokib",
  id: 5244,
};

rokib = { userName: "Hasan", id: 52485 };

function getDbId(id: number | string): void {
  // api call
  console.log("DBID is ", id);
}

// array

const data: number[] = [1, 3, 3];
const data2: string[] = ["asas", "asas", "sas"];
const data3: (string | number | boolean)[] = ["rokib", 120, true];

let pi: 3.14;
// pi = 3.15; not acceptable

let setAllotment: "asile" | "middle" | "window";
// onty these threee type allowed without this nothin can be assigned
