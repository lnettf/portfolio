import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ContactEdit = () => {
  const [contact, setContact] = useState(null);
  const { contactId } = useParams();

  useEffect(() => {
    const get = async () => {
      try {
        await axios.get(`http://localhost:3000/contact/${contactId}`);
      } catch (error) {
        console.log({ error });
      }
    };
    get();
  }, []);

  if (!contact) {
    return <h1>no existe el contacto</h1>;
  }

  return <h1>ConctactEdit - {contactId}</h1>;
};
