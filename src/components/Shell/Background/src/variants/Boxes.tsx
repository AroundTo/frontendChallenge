export const Boxes = (color: string, opacity: number): string => {
  return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23${color}' fill-opacity='${opacity}' fill-rule='evenodd'/%3E%3C/svg%3E");`
}
