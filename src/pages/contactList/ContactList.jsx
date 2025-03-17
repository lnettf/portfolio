import axios from "axios";
import { useEffect, useState } from "react";
import { ContactItem } from "./components/contactItem/contactItem";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.get("http://localhost:3000/contact");
        setContacts(response.data.messages);
        console.warn({ response });
      } catch (error) {
        console.warn({ error });
      }
    };
    get();
  }, []);
  return (
    <>
      <h1>ContactList!</h1>
      {contacts.map((item) => {
        const { id, name, surname, message } = item;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            surname={surname}
            message={message}
          />
        );
      })}
    </>
  );
};
