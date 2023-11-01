import React from "react";
import logo from "@/Assets/Images/Logos/Shipex-transparent-logo.png";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import styled from "styled-components";
import Link from "next/link";

const LoginFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  color: var(--text-color);
  font-family: var(--font);

  a {
    text-decoration: none;
  }

  .logo {
    img {
      height: 50px;
      object-fit: cover;
      width: 100%;
    }
  }

  .title-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;
    h1 {
      font-size: var(--heading-small);
      font-weight: 700;
      font-family: var(--bold);
      color: var(--text-color);

      span {
        background: var(--text-gradient-secondary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media screen and (max-width: 768px) {
        font-size: var(--heading-small);
      }
    }

    p {
      font-size: var(--para);
      color: var(--text-color);
      font-family: var(--font);
      font-weight: 400;

      span {
        background: var(--text-gradient-secondary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: var(--bold);
        font-weight: 700;
      }
    }
  }

  .method-1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin: 1rem 0;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      gap: 0.5rem;
    }

    .google {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 5rem;
      background: #f9f9f9;
      border: 1px solid #f0f0f0;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        border: 1px solid var(--text-grey);
      }

      p {
        font-size: var(--para);
        color: var(--text-color);
        font-family: var(--font);
        font-weight: 400;
      }
    }

    .facebbok {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 5rem;
      background: #f9f9f9;
      border: 1px solid #f0f0f0;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        border: 1px solid var(--text-grey);
      }

      p {
        font-size: var(--para);
        color: var(--text-color);
        font-family: var(--font);
        font-weight: 400;
      }
    }
  }

  .or {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    hr {
      width: 100%;
      height: 1px;
      background: #f5f5f5;
      color: #f5f5f5;
    }

    p {
      font-size: var(--para);
      color: var(--text-color);
      font-family: var(--font);
      font-weight: 400;
    }
  }

  .method-2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    flex-direction: column;

    .email {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;

      .input-group {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
        flex-direction: column;

        .input {
          width: 100%;
          height: 100%;
          padding: 0.7rem;
          border-radius: 5rem;
          background: #f9f9f9;
          border: 1px solid #f0f0f0;
          color: var(--text-color);
          font-family: var(--font);
          font-weight: 400;
          font-size: var(--para-mini);
          outline: none;
          transition: all 0.3s ease-in-out;

          &:focus {
            border: 1px solid var(--text-grey);
          }
        }
      }
    }

    .bottom-section {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-direction: row;
      margin-top: 0.7rem;

      .remember {
        .checkbox-wrapper input[type="checkbox"] {
          display: none;
        }

        .checkbox-wrapper .terms-label {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .checkbox-wrapper .terms-label .label-text {
          margin-left: 10px;
        }

        .checkbox-wrapper .checkbox-svg {
          width: 30px;
          height: 30px;
        }

        .checkbox-wrapper .checkbox-box {
          fill: #f0f0f0;
          stroke: var(--primary-color);
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          transition: stroke-dashoffset 0.6s ease-in;
          border-radius: 5px;
        }

        .checkbox-wrapper .checkbox-tick {
          stroke: var(--primary-color);
          stroke-dasharray: 172;
          stroke-dashoffset: 172;
          transition: stroke-dashoffset 0.6s ease-in;
        }

        .checkbox-wrapper
          input[type="checkbox"]:checked
          + .terms-label
          .checkbox-box,
        .checkbox-wrapper
          input[type="checkbox"]:checked
          + .terms-label
          .checkbox-tick {
          stroke-dashoffset: 0;
        }
      }

      .forgot {
        a {
          font-size: var(--para);
          color: var(--primary-color);
          font-family: var(--font);
          font-weight: 400;
          text-decoration: none;
          transition: all 0.3s ease-in-out;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .login {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 1rem 0;

      button {
        width: 100%;
        height: 100%;
        padding: 0.7rem;
        border-radius: 5rem;
        background: var(--primary-color);
        color: var(--white);
        font-family: var(--font);
        font-weight: 400;
        font-size: var(--para);
        outline: none;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          border: 1px solid var(--primary-color);
          background: transparent;
          color: var(--primary-color);
        }
      }
    }

    .signup {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      p {
        font-size: var(--para);
        color: var(--text-color);
        font-family: var(--font);
        font-weight: 400;

        &:last-child {
          color: var(--primary-color);
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

function LoginForm() {
  return (
    <LoginFormContainer>
      <div className="logo">
        <Image src={logo} />
      </div>
      <div className="title-text">
        <h1>Login to your account</h1>
        <p>
          Welcome back to <span> ShipEx India</span>
        </p>
      </div>
      <div className="method-1">
        <div className="google">
          <GoogleIcon />
          <p>Continue with Google</p>
        </div>
        <div className="facebbok">
          <FacebookSharpIcon />
          <p>Continue with Facebook</p>
        </div>
      </div>
      <div className="or">
        <hr />
        <p>or</p>
        <hr />
      </div>
      <div className="method-2">
        <div className="email">
          <div class="input-group">
            <label class="user-label">Email</label>
            <input
              required=""
              type="text"
              name="text"
              autocomplete="off"
              class="input"
            />
          </div>
          <div class="input-group">
            <label class="user-label">Password</label>
            <input
              required=""
              type="text"
              name="text"
              autocomplete="off"
              class="input"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="remember">
            <div class="checkbox-wrapper">
              <input id="terms-checkbox-37" name="checkbox" type="checkbox" />
              <label class="terms-label" for="terms-checkbox-37">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 200 200"
                  class="checkbox-svg"
                >
                  <mask fill="white" id="path-1-inside-1_476_5-37">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect
                    mask="url(#path-1-inside-1_476_5-37)"
                    stroke-width="40"
                    class="checkbox-box"
                    height="200"
                    width="200"
                  ></rect>
                  <path
                    stroke-width="15"
                    d="M52 111.018L76.9867 136L149 64"
                    class="checkbox-tick"
                  ></path>
                </svg>
                <span class="label-text">Remember me</span>
              </label>
            </div>
          </div>
          <div className="forgot">
            <Link href="/">Forgot Password?</Link>
          </div>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
        <div className="signup">
          <p>Don't have an account?</p>
          <Link href="/signup">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    </LoginFormContainer>
  );
}

export default LoginForm;
