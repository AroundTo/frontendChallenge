export const BevelCircle = (color: string, opacity: number): string => {
  return `url("data:image/svg+xml,%3Csvg width='38' height='38' viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='bevel-circle' fill='%23${color}' fill-opacity='${opacity}'%3E%3Cpath d='M10.414 29l-8 8h33.172l-8-8H10.414zM9 27.586l-8 8V2.414l8 8v17.172zM10.414 9l-8-8h33.172l-8 8H10.414zM29 10.414l8-8v33.172l-8-8V10.414zM11 11h16v16H11V11zm8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM0 0h38v38H0V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`
}
