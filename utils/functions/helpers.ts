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

export function getWithExpiry(key: string): string | null {
  const itemStr = localStorage.getItem(key) ?? '';
  // if the item doesn't exist, return null
  if (itemStr === '') {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export function setWithExpiry(key: string, value: string, ttl: number): void {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
