import React from "react";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface TagProps {
  id: number;
  name: string;
  onDelete: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Tag: React.FC<TagProps> = ({ id, name, onDelete, handleDelete }) => {
  return (
    <ListItem
      sx={{
        padding: "16px",
        marginBottom: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ListItemText primary={name} />
      <ListItemAvatar>
        <DeleteIcon
          sx={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDelete(id)}
        />
      </ListItemAvatar>
    </ListItem>
  );
};

export default Tag;
