import React from "react";
import { useForm } from "react-hook-form";

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
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      {errors.fullname && <p>{errors.fullname.message}</p>}

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
      {errors.email && <p>{errors.email.message}</p>}
      <input
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: "Введите пароль",
          minLength: { value: 8, message: "Минимум 8 символов" },
          validate: {
            hasUpper: (value) =>
              /[A-Z]/.test(value) || "Пароль должен содержать заглавную букву",
            hasNumber: (value) =>
              /\d/.test(value) || "Пароль должен содержать цифру",
            hasSpecial: (value) =>
              /[!@#$%^&*]/.test(value) || "Добавьте спецсимвол (!@#$%^&*)",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input
        type="password"
        placeholder="Повторите пароль"
        {...register("confirmPassword", {
          required: "Повторите пароль",
          validate: (value) => value === password || "Пароли не совпадают",
        })}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <label>
        <input
          type="checkbox"
          {...register("terms", {
            required: "Вы должны согласиться с условиями",
          })}
        /> {" "}
        Я принимаю условия использования
      </label>
      {errors.terms && <p>{errors.terms.message}</p>}

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
