import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Регистрация успешна:", data);
    navigate("/dashboard");
  };

  const isTermAccepted = watch("terms", false);

  const navigate = useNavigate();
  return (
    <div className={styles.form_wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1 className={styles.title}>Sign up for Dashboard</h1>
        <p className={styles.subtitle}>
          Sign up using your email address or phone number below to get instant
          access to your Dashboard.
        </p>
        <input
          type="text"
          placeholder="Полное имя"
          {...register("fullname", {
            required: "Введите имя",
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
            maxLength: {
              value: 30,
              message: "Слишком длинное имя",
            },
            pattern: {
              value: /^[A-Za-zА-Яа-яЁё\s]+$/,
              message: "Имя не должно содержать цифры и символы",
            },
          })}
        />
        {errors.fullname && (
          <p className={styles.error}>{errors.fullname.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Введите email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Некорректный email",
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: "Введите пароль",
            minLength: { value: 8, message: "Минимум 8 символов" },
            validate: {
              hasUpper: (value) =>
                /[A-Z]/.test(value) ||
                "Пароль должен содержать заглавную букву",
              hasNumber: (value) =>
                /\d/.test(value) || "Пароль должен содержать цифру",
              hasSpecial: (value) =>
                /[!@#$%^&*]/.test(value) || "Добавьте спецсимвол (!@#$%^&*)",
            },
          })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        <input
          type="password"
          placeholder="Повторите пароль"
          {...register("confirmPassword", {
            required: "Повторите пароль",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
        />
        {errors.confirmPassword && (
          <p className={styles.error}>{errors.confirmPassword.message}</p>
        )}

        <label className={styles.agree_label}>
          <input
            type="checkbox"
            {...register("terms", {
              required: "Вы должны согласиться с условиями",
            })}
          />{" "}
          Я принимаю <span className={styles.agree}>условия использования</span>
        </label>
        {errors.terms && <p className={styles.error}>{errors.terms.message}</p>}

        <button className={styles.submit_btn} type="submit" disabled={!isTermAccepted}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
