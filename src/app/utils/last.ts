export default function last<T = string>(arr: T[]): T | undefined{
  return arr[arr.length - 1];
}
