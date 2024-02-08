"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./ContactForm.module.css";
import { sendMail } from "@/utils/send-mail";

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendMail(data);
  };

  useEffect(() => {
    document.body.classList.add("contact-page");
  }, []);

  return (
    <div className={styles["form-wrapper"]}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor='name'>Nama *</label>
          <input {...register("name", { required: true })} id='name' />
          {errors.name && <span className={styles.error}>Field ini harus diisi</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor='email'>Email *</label>
          <input {...register("email", { required: true })} type='email' id='email' />
          {errors.name && <span className={styles.error}>Field ini harus diisi</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor='message'>Pesan</label>
          <textarea {...register("message")} id='message' />
        </div>

        <button className='btn'>Kirim</button>
      </form>
    </div>
  );
}

export default ContactForm;
