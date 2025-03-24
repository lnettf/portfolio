import axios from "axios";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const ContactEdit = () => {
  const [contact, setContact] = useState(null);
  const { contactId } = useParams();
  let navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/contact/${contactId}`);
      alert("Se ha borrado correctamente");
    } catch (error) {
      console.error({ error });
    }
    navigate("/contact-list");
  };

  useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/contact/${contactId}`
        );
        setContact(response.data.data);
      } catch (error) {
        console.log({ error });
      }
    };
    get();
  }, []);

  if (!contact) {
    return <h1>no existe el contacto</h1>;
  }

  return (
    <>
      <h1>Nombre: {contact.name}</h1>
      <h2>Apellidos: {contact.surname}</h2>
      <pre>{JSON.stringify(contact)}</pre>
      <button onClick={handleDelete}>Borrar</button>
    </>
  );
};
