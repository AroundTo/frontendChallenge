export const Stripes = (color: string, opacity: number): string => {
  return `url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23${color}' fill-opacity='${opacity}' fill-rule='evenodd'/%3E%3C/svg%3E");`
}
