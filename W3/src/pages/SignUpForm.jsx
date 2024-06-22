import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [nameError, setNameError] = useState(""); // 이름 입력 에러 상태
  const [idError, setIdError] = useState(""); // 아이디 입력 에러 상태
  const [emailError, setEmailError] = useState(""); // 이메일 입력 에러 상태
  const [ageError, setAgeError] = useState(""); // 나이 입력 에러 상태
  const [passwordError, setPasswordError] = useState(""); // 비밀번호 입력 에러 상태
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // 비밀번호 확인 입력 에러 상태

  const [nameValid, setNameValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [ageValid, setAgeValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleMovePage = () => {
    window.location = "http://localhost:3000/login";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 유효성 검사
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 모든 필드의 유효성 검사를 수행
    validateAllFields();

    // 제출 시 폼 데이터 전송 확인
    if (isFormValid()) {
      console.log("Form data submitted:", formData);
      localStorage.setItem(formData.id.trim(), formData.password.trim());
      alert("회원가입이 성공적으로 완료되었습니다!");
      window.location = "http://localhost:3000/login";
    }
  };

  // 개별 입력 필드 유효성 검사 함수
  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        if (value.trim() === "") {
          setNameError("이름을 입력해주세요!");
        } else {
          setNameError("");
          setNameValid(true);
        }
        break;
      case "id":
        if (value.trim() === "") {
          setIdError("아이디를 입력해주세요!");
        } else if (localStorage.getItem(value.trim()) != null) {
          setIdError(
            "이미 존재하는 아이디 입니다. 아이디가 있다면 로그인 페이지로 이동해 주세요."
          );
        } else {
          setIdError("");
          setIdValid(true);
        }
        break;
      case "email":
        if (value.trim() === "") {
          setEmailError("이메일을 입력해주세요!");
        } else if (!value.includes("@")) {
          setEmailError("이메일 형식에 맞게 다시 입력해주세요!");
        } else {
          setEmailError("");
          setEmailValid(true);
        }
        break;
      case "age":
        if (value.trim() === "") {
          setAgeError("나이는 숫자로 입력해주세요!");
        } else if (isNaN(value)) {
          setAgeError("나이를 입력해주세요!");
        } else if (value <= 0) {
          setAgeError("나이는 양수여야 합니다.");
        } else if (value.includes(".")) {
          setAgeError("나이는 실수로 입력할 수 없습니다.");
        } else if (value < 19) {
          setAgeError("19세 이상만 가입 가능합니다!");
        } else {
          setAgeError("");
          setAgeValid(true);
        }
        break;
      case "password":
        if (value.trim() === "") {
          setPasswordError("비밀번호를 입력해주세요!");
        } else if (value.length < 4) {
          setPasswordError("최소 4자리 이상 입력해주세요.");
        } else if (
          !/[a-zA-Z]/.test(value) ||
          !/\d/.test(value) ||
          !/[!@#$%^&*()]/.test(value)
        ) {
          setPasswordError("비밀번호는 영어, 숫자, 특수문자를 포함해주세요.");
        } else if (value.length > 12) {
          setPasswordError("최대 12자리까지 입력 가능합니다.");
        } else {
          setPasswordError("");
          setPasswordValid(true);
        }
        break;
      case "confirmPassword":
        if (value.trim() === "") {
          setConfirmPasswordError("비밀번호를 다시 입력해주세요!");
        } else if (value !== formData.password) {
          setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
        } else {
          setConfirmPasswordError("");
          setConfirmPasswordValid(true);
        }
        break;
      default:
        break;
    }
  };
  // 모든 입력 필드의 유효성 검사 수행 함수
  const validateAllFields = () => {
    validateInput("name", formData.name);
    validateInput("id", formData.id);
    validateInput("email", formData.email);
    validateInput("age", formData.age);
    validateInput("password", formData.password);
    validateInput("confirmPassword", formData.confirmPassword);
  };

  // 폼 전체 유효성 검사 함수
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.id.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.age.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.confirmPassword.trim() !== "" &&
      !nameError &&
      !idError &&
      !emailError &&
      !ageError &&
      !passwordError &&
      !confirmPasswordError
    );
  };

  return (
    <SignupContainer>
      <div className="header">회원가입 페이지</div>
      <div className="inputDiv">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="이름을 입력해주세요."
        />
        {nameError && <span className="error">{nameError}</span>}
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디를 입력해주세요."
        />
        {idError && <span className="error">{idError}</span>}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요."
        />
        {emailError && <span className="error">{emailError}</span>}
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="나이를 입력해주세요."
        />
        {ageError && <span className="error">{ageError}</span>}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요."
        />
        {passwordError && <span className="error">{passwordError}</span>}
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="비밀번호 확인"
        />
        {confirmPasswordError && (
          <span className="error">{confirmPasswordError}</span>
        )}
      </div>
      <button
        className={
          nameValid &&
          !idError &&
          emailValid &&
          ageValid &&
          passwordValid &&
          confirmPasswordValid
            ? "btnActive"
            : "btnDisabled"
        }
        onClick={handleSubmit}
      >
        제출하기
      </button>
      <div className="movePage">
        <div className="moveLogIn" onClick={handleMovePage}>
          이미 아이디가 있으신가요?
        </div>
        <div className="moveLogIn" onClick={handleMovePage}>
          로그인 페이지로 이동하기
        </div>
      </div>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  gap: 45px;

  .header,
  .moveLogin {
    font-weight: bold;
  }

  .inputDiv {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .inputDiv > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .error {
    color: red; /* 메시지 색상 */
    font-size: 12px;
    padding-left: 15px;
  }

  input {
    width: 400px; /* 입력 필드 너비 */
    height: 40px;
    padding-left: 15px;
    border-radius: 20px; /* 입력 필드 테두리 반지름 */

    @media (max-width: 768px) {
      width: 300px;
      height: 35px;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 30px;
    }
  }

  button {
    width: 420px; /* 버튼 너비 */
    height: 50px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 25px; /* 버튼 테두리 반지름 */
    cursor: pointer;

    @media (max-width: 768px) {
      width: 320px;
      height: 45px;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 40px;
    }
  }

  .btnDisabled {
    background-color: #ffffff;
  }
  .btnActive {
    background-color: #ffa500;
  }

  .movePage {
    display: flex;
    flex-direction: row;
    gap: 30px;

    .moveLogIn {
      &:hover {
        cursor: pointer;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }
`;
