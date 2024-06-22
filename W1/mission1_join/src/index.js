const submitBtn = document.getElementById("submitBtn");
var nameCheck = document.getElementById('name-check');
var emailCheck = document.getElementById('email-check');
var ageCheck = document.getElementById('age-check');
var pwCheck = document.getElementById('pw-check');
var checkPwCheck = document.getElementById('check-pw-check');

function btnDisable() {
    submitBtn.disabled = true;
}

function btnAble() {
    submitBtn.disabled = false;
}

submitBtn.onclick = function (event) {
    const nameValue = document.getElementById("name").value.trim(); // 입력값 양쪽 공백 제거
    const emailValue = document.getElementById("email").value; // 입력값 양쪽 공백 제거
    const ageValue = document.getElementById("age").value.trim(); // 입력값 양쪽 공백 제거
    const passwdValue = document.getElementById("passwd").value.trim(); // 입력값 양쪽 공백 제거
    const passwdCheckValue = document.getElementById("passwd-check").value.trim(); // 입력값 양쪽 공백 제거

    event.preventDefault(); // 폼의 기본 제출 동작 방지

    if(emailValue.length < 1 || ageValue.length < 1 || passwdValue.length < 1 || passwdCheckValue.length < 1) {
        btnDisable();
        btnAble();
    } else {
        btnAble();
        //이름 형식 검사
        if ((nameValue.length > 0) && (typeof nameValue === 'string')) { // 입력값이 존재하는 경우
            nameCheck.style.color = 'green';
            nameCheck.innerText = '멋진 이름이네요!';
        } else {
            nameCheck.style.color = 'red';
            nameCheck.innerText = '필수 입력 항목입니다!';
        }

        //이메일 형식 검사
        if ((emailValue.indexOf('@') !== -1) && (emailValue.trim().length > 0) && (typeof emailValue === 'string')) { // 입력값이 존재하는 경우
            emailCheck.style.color = 'green';
            emailCheck.innerText = '올바른 이메일 형식입니다!';
        } else {
            emailCheck.style.color = 'red';
            emailCheck.innerText = '올바른 이메일 형식이 아닙니다!';
        }

        //나이 형식 검사
        if (parseInt(ageValue) && ageValue >= 19) { 
            ageCheck.style.color = 'green';
            ageCheck.innerText = '올바른 나이 형식입니다!';
        } else {
            ageCheck.style.color = 'red';
            if(parseInt(ageValue)) {
                if (ageValue < 0){
                    ageCheck.innerText = '나이는 음수가 될 수 없습니다!';
                } else {
                    ageCheck.innerText = '미성년자는 가입할 수 없습니다!';
                }
            } else if(parseFloat(ageValue)){
                ageCheck.innerText = '나이는 소수가 될 수 없습니다!';
            } else if (ageValue.length < 1){
                ageCheck.innerText = '나이를 입력해주세요!';
            } else{
                ageCheck.innerText = '나이는 숫자 형식이어야 합니다!';
            }       
        }
        
        var valid = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;

        //비밀번호 형식 검사
        if (valid.test(passwdValue)) { // 입력값이 존재하는 경우
            pwCheck.style.color = 'green';
            pwCheck.innerText = '올바른 비밀번호입니다!';
        } else {
            pwCheck.style.color = 'red';
            if (passwdValue.length < 4){
                pwCheck.innerText = '비밀번호는 최소 4자리 이상이어야 합니다.';
            } else if (passwdValue.length >= 13){
                pwCheck.innerText = '비밀번호는 최대 12자리까지 가능합니다.';
            } else {
                pwCheck.innerText = '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.';
            }
        }

        //비밀번호 확인 형식 검사
        if (passwdValue === passwdCheckValue) { // 입력값이 존재하는 경우
            checkPwCheck.style.color = 'green';
            checkPwCheck.innerText = '비밀번호가 일치합니다.';
        } else {
            checkPwCheck.style.color = 'red';
            checkPwCheck.innerText = '비밀번호가 일치하지 않습니다.';
        }
    }
}