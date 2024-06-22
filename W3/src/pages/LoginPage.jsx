import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const [idError, setIdError] = useState(""); // 아이디 입력 에러 상태
  const [passwordError, setPasswordError] = useState(""); // 비밀번호 입력 에러 상태

  const [idValid, setIdValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

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
      alert("로그인이 성공적으로 완료되었습니다!");
    }
  };

  // 개별 입력 필드 유효성 검사 함수
  const validateInput = (name, value) => {
    switch (name) {
      case "id":
        if (value.trim() === "") {
          setIdError("아이디를 입력해주세요!");
        } else {
          setIdError("");
          setIdValid(true);
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
      default:
        break;
    }
  };
  // 모든 입력 필드의 유효성 검사 수행 함수
  const validateAllFields = () => {
    validateInput("id", formData.id);
    validateInput("password", formData.password);
  };

  // 폼 전체 유효성 검사 함수
  const isFormValid = () => {
    return (
      formData.id.trim() !== "" &&
      formData.password.trim() !== "" &&
      !idError &&
      !passwordError
    );
  };

  return (
    <LoginpContainer>
      <div className="header">로그인 페이지</div>
      <div className="inputDiv">
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디를 입력해주세요."
        />
        {idError && <span className="error">{idError}</span>}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요."
        />
        {passwordError && <span className="error">{passwordError}</span>}
      </div>
      <button
        className={idValid && passwordValid ? "btnActive" : "btnDisabled"}
        onClick={handleSubmit}
      >
        로그인
      </button>
    </LoginpContainer>
  );
};

const LoginpContainer = styled.div`
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
`;
