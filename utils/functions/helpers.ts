export function hasLowercase(value: string): boolean {
  return value.match(/[a-z]/) !== null;
}
export function hasUppercase(value: string): boolean {
  return value.match(/[A-Z]/) !== null;
}
export function hasNumber(value: string): boolean {
  return value.match(/[0-9]/) !== null;
}
export function hasSpecialCharacter(value: string): boolean {
  return value.match(/[^a-zA-Z0-9]/) !== null;
}
export function hasMinimumLength(value: string, length: number): boolean {
  return value.length >= length;
}
export function isEmail(value: string): boolean {
  return value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) !== null;
}
