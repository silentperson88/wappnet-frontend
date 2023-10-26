// Contact.tsx
import React from "react";
import { Box, Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface ContactProps {
  id: number;
  firstName: string;
  lastName: string;
  profile: string;
  phone: string;
  onDelete: (id: number) => void;
}

const ContactLists: React.FC<ContactProps> = ({
  id,
  firstName,
  lastName,
  profile,
  phone,
  onDelete,
}) => {
  return (
    <Box
      style={{
        padding: "16px",
        marginBottom: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box display="flex" flexDirection="row">
        <Avatar
          sx={{ bgcolor: "grey" }}
          aria-label="recipe"
          src={profile ?? firstName.charAt(0)}
        />
        <Typography ml={1} variant="h6">
          {firstName} {lastName}
        </Typography>
      </Box>
      <Typography>Phone: {phone}</Typography>
    </Box>
  );
};

export default ContactLists;
