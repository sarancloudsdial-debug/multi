import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: `
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to bottom right, #e9f0ff, #ffffff);
        }

        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .card {
          background: #fff;
          padding: 2.5rem;
          border-radius: 1.2rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 420px;
          animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card h2 {
          font-size: 1.9rem;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
        }

        .card p {
          color: #64748b;
          text-align: center;
          margin-top: 0.5rem;
          font-size: 0.95rem;
        }

        form {
          margin-top: 1.5rem;
        }

        label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 0.3rem;
        }

        input {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 0.7rem;
          font-size: 0.95rem;
          transition: 0.3s;
        }

        input:focus {
          outline: none;
          border-color: #4368b1;
          box-shadow: 0 0 0 3px rgba(67, 104, 177, 0.3);
        }

        .btn-primary {
          width: 100%;
          background: #4368b1;
          color: #fff;
          padding: 0.9rem;
          border: none;
          border-radius: 0.7rem;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 1rem;
          transition: 0.3s;
        }

        .btn-primary:hover {
          background: #36579c;
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
        }

        .divider div {
          flex: 1;
          height: 1px;
          background: #cbd5e1;
        }

        .divider p {
          margin: 0 0.8rem;
          font-size: 0.85rem;
          color: #64748b;
        }

        .btn-google {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.9rem;
          border: 1px solid #cbd5e1;
          border-radius: 0.7rem;
          background: #fff;
          cursor: pointer;
          font-size: 0.95rem;
          transition: 0.3s;
        }

        .btn-google:hover {
          background: #f8fafc;
        }

        .footer-text {
          text-align: center;
          font-size: 0.85rem;
          margin-top: 1.5rem;
          color: #64748b;
        }

        .footer-text a {
          color: #4368b1;
          text-decoration: none;
          font-weight: 600;
        }

        .footer-text a:hover {
          text-decoration: underline;
        }
      ` }), _jsx("div", { className: "container", children: _jsxs("div", { className: "card", children: [_jsx("h2", { children: "Welcome" }), _jsx("p", { children: "Login or create an account to continue" }), _jsxs("form", { children: [_jsxs("div", { children: [_jsx("label", { children: "Email Address" }), _jsx("input", { type: "email", placeholder: "you@example.com" })] }), _jsxs("div", { style: { marginTop: "1rem" }, children: [_jsx("label", { children: "Password" }), _jsx("input", { type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })] }), _jsx("button", { type: "submit", className: "btn-primary", children: "Login" })] }), _jsxs("div", { className: "divider", children: [_jsx("div", {}), _jsx("p", { children: "or" }), _jsx("div", {})] }), _jsxs("button", { className: "btn-google", children: [_jsx(FcGoogle, { size: 22 }), " Continue with Google"] }), _jsxs("p", { className: "footer-text", children: ["Don\u2019t have an account? ", _jsx("a", { href: "#", children: "Sign up" })] })] }) })] }));
};
export default LoginPage;
