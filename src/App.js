import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";
import usePlaceSuggestion from "./hooks/usePlaceSuggestion";
import PlaceSuggestion from "./components/PlaceSuggestion";

// -------------------
// Language 🇲🇽
// -------------------
const theme = createMuiTheme({}, esES);

// -------------------
// Main Component 👀
// -------------------
const App = () => {
  const [address, AutocompleteInput] = usePlaceSuggestion();
  const [calle, numero, colonia, municipio, estado, pais] = address?.terms || [
    ...new Array(6),
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ margin: "2rem 0" }}>
        {/* <PlaceSuggestion /> */}
        <AutocompleteInput />
        <Box marginTop="1rem">
          <Typography>Calle</Typography>
          <Typography>
            {calle?.value} {numero?.value}
          </Typography>
        </Box>
        <Box marginTop="1rem">
          <Typography>Colonia</Typography>
          <Typography>{colonia?.value}</Typography>
        </Box>
        <Box marginTop="1rem">
          <Typography>Municipio</Typography>
          <Typography>{municipio?.value}</Typography>
        </Box>
        <Box marginTop="1rem">
          <Typography>Estado</Typography>
          <Typography>{estado?.value}</Typography>
        </Box>
        <Box marginTop="1rem">
          <Typography>País</Typography>
          <Typography>{pais?.value}</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
