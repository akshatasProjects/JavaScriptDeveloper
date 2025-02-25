// a module with a default export can also have multiple named exports

export const stateName = "Oregon";
export const capitalCity = "Salem";
export const stateBird = "Western meadowlark";

// A file can have only one default export.
export default function getStateInfo() {
  return { stateName, capitalCity, stateBird };
}
