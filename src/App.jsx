import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const addContact = (name, phone) => {
    setContacts([...contacts, { name, phone }]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5">Contact App</Typography>
          <AddContact onAdd={addContact} />
          <SearchBox onSearch={setSearch} />
          <ContactList contacts={filteredContacts} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

function AddContact({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name, phone);
    setName("");
    setPhone("");
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <Typography variant="h6">Tambah Kontak</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nama"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Nomor Telepon"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </form>
    </div>
  );
}

function SearchBox({ onSearch }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="search"
        label="Cari Kontak..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function ContactList({ contacts }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <Typography variant="h6">Daftar Kontak</Typography>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
