import { Container, Typography, Box, useTheme } from "@mui/material";

export default function Layout({ children }) {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Box sx={{ minHeight: "100vh", display: "grid", gridTemplateRows: "auto 1fr auto", gap: "2.5rem" }}>
        <header>
          <Typography variant="h1" align="center">
            A boring notes taking app
          </Typography>
        </header>
        <main>{children}</main>
        <Typography
          align="center"
          variant="body2"
          sx={{
            padding: "1rem .75rem",
            "& > :where(code, span)": { fontWeight: "bold" },
            "& > :where(code)": { color: theme.palette.error.main },
          }}
        >
          Made with{" "}
          <Typography variant="overline" component="code">
            love
          </Typography>{" "}
          by{" "}
          <Typography variant="overline" component="span">
            Răzvan Sbîngu
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
}
