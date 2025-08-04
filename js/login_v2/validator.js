export function isNotEmpty(value, fieldName) {
  if (!value.trim()) {
    alert(`${fieldName} 항목을 입력하세요.`);
    return false;
  }
  return true;
}

// 이메일 형식 검증 함수 추가
export function isEmailValid(value) {
  // 간단한 이메일 패턴 (RFC 준수 아님)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    alert('이메일의 형태가 잘못되었습니다.');
    return false;
  }
  return true;
}
