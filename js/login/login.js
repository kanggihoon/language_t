import { isNotEmpty } from './validator.js';

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 입력값 검증
  if (!isNotEmpty(email, '이메일') || !isNotEmpty(password, '비밀번호')) {
    return;
  }

  // 검증 통과 시 이동
  window.location.href = 'https://www.google.com';
});
