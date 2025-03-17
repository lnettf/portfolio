import { Link } from "react-router";
import {
  ContactItemContainer,
  ID,
  ContactInfo,
  ContactMessage,
} from "./ContactItem.styles";

export const ContactItem = ({ id, name, surname, message }) => {
  return (
    <ContactItemContainer>
      <ID>{id}</ID>
      <ContactInfo>
        {name} - {surname}
      </ContactInfo>
      <ContactMessage>{message}</ContactMessage>
      <Link to={"/contact/" + id}>Ver detalle</Link>
    </ContactItemContainer>
  );
};
