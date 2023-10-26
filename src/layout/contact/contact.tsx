// Contacts.tsx
import React, { useState, useEffect } from "react";
import Contact from "./contactList";
import apiService from "../../apiService/apiService";
import { Paper, Typography } from "@mui/material";

interface ContactData {
  id: number;
  firstName: string;
  lastName: string;
  profile: string;
  phone: string;
}

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<ContactData[]>([]);

  useEffect(() => {
    (async () => {
      const res = await apiService.get("contacts");
      if (res.status === 200) {
        console.log(res);
        setContacts(
          res.data.sort((a: ContactData, b: ContactData) =>
            a.firstName.localeCompare(b.firstName)
          )
        );
      }
    })();

    return () => {
      setContacts([]);
    };
  }, []);

  const handleDelete = (id: number) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "16px",
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        textAlign="left"
        style={{ marginBottom: "16px" }}
      >
        All Contacts ({contacts.length})
      </Typography>
      {contacts.map((contact, index) => (
        <>
          {index !== 0 &&
          contacts[index - 1].firstName.charAt(0) !==
            contacts[index].firstName.charAt(0) ? (
            <Typography key={index} variant="h6" textAlign="left">
              {" "}
              {contacts[index].firstName.charAt(0)}{" "}
            </Typography>
          ) : null}

          {index === 0 && (
            <Typography key={index} variant="h6" textAlign="left">
              {" "}
              {contacts[index].firstName.charAt(0)}{" "}
            </Typography>
          )}

          <Contact key={contact.id} {...contact} onDelete={handleDelete} />
        </>
      ))}
    </Paper>
  );
};

export default Contacts;
