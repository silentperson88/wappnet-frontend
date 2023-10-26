import React, { useState, useEffect } from "react";

// Material UI
import { Paper, List } from "@mui/material";

// Components
import Tag from "./tags";

// API service
import apiService from "../../apiService/apiService";

interface TagListProps {
  id: number;
  name: string;
  onDelete: (id: number) => void;
}

const TagList: React.FC = () => {
  const [tags, setTags] = useState<TagListProps[]>([]);

  useEffect(() => {
    (async () => {
      const res = await apiService.get("tags");
      if (res.status === 200) {
        console.log(res);
        setTags(
          res.data.sort((a: TagListProps, b: TagListProps) =>
            a.name.localeCompare(b.name)
          )
        );
      }
    })();
    return () => {
      setTags([]);
    };
  }, []);

  const handleDelete = async (id: number) => {
    const res = await apiService.delete(`tags/${id}`);
    if (res.status === 200) {
      console.log(res);
      setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
    }
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
      <List>
        {tags.map((tag) => (
          <Tag key={tag.id} {...tag} handleDelete={handleDelete} />
        ))}
      </List>
    </Paper>
  );
};

export default TagList;
