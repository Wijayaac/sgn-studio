import { Inputs } from "@/components/ContactForm";

export function sendMail(data: Inputs) {
  const apiUrl = "/api/email";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
