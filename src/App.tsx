import { Grid } from "@mui/material";
import "./App.css";
import Contact from "./layout/contact/contact";
import Tag from "./layout/tag/tagList";

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Tag />
        </Grid>
        <Grid item xs={12} md={8}>
          <Contact />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
