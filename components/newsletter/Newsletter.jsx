"use client";
import { useState } from "react";
import { fetchEmails } from "../../src/app/api/email_post_data/emailPost";
const Newsletter = () => {
  const [emailValidation, setEmailValidation] = useState(true);
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|dk|org|net|io|co|edu)$/i;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const emailValue = formJson.mail;
    const emailCheck = emailRegex.test(emailValue);

    if (emailCheck) {
      try {
        console.log("fromJsonxx", emailValue);
        setEmailValidation(emailCheck);
        setEmail("");
        await fetchEmails(emailValue);
      } catch (err) {
        console.log("felj ved indsendelse af mail", err);
      }
    } else {
      setEmailValidation(emailCheck);
      console.log("hvad sker du har glemt noget");
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-5 sm:mt-0 ">
      <h2 className=" text-HeaderSizeSmall">JOIN THE 9TSEVEN NEWSLETTER</h2>
      <label aria-label="Newsletter">
        <form method="post" onSubmit={handleSubmit}>
          <input className=" border-2 border-main_white w-auto md:w-[20rem]  p-2" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" name="mail" required></input>
          <button className="border-2 border-main_white border-l-[0] w-[5rem]  p-2 hover:bg-alternativ_black " type="submit">
            Submit
          </button>
          {!emailValidation && <p className=" text-red-400 mt-1">Email must include @ and end with .com or .dk</p>}
          <div>
            <div className="flex flex-row gap-2 mt-2">
              <input type="checkbox" required name="mailCheckBox"></input>
              <p>I accept the terms</p>
            </div>
            <p>Read terms</p>
          </div>
        </form>
      </label>
    </div>
  );
};

export default Newsletter;
