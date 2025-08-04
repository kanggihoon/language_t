export function isNotEmpty(value, fieldName) {
  if (!value.trim()) {
    alert(`${fieldName} 항목을 입력하세요.`);
    return false;
  }
  return true;
}
