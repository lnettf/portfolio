import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { Menu } from "./shared/components/menu/Menu";
import { NotFound } from "./pages/notFound/NotFound";
import { Projects } from "./pages/projects/Projects";
import { ContactList } from "./pages/contactList/ContactList";
import { ContactEdit } from "./pages/contactEdit/ContactEdit";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:contactId" element={<ContactEdit />} />
      <Route path="/contact-list" element={<ContactList />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
