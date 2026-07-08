import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f172a',
      paper: '#111827',
    },
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Encabezado */}
        <Grid size={{ xs: 12 }}>
          <HeaderUI />
        </Grid>

        {/* Alertas */}
        <Grid
          size={{ xs: 12 }}
          container
          sx={{ justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <AlertUI description="No se preveen lluvias" />
        </Grid>

        {/* Selector */}
        <Grid size={{ xs: 12 }}>
          <SelectorUI />
        </Grid>

        {/* Indicadores */}
        <Grid size={{ xs: 12 }}>Elemento: Indicadores</Grid>

        {/* Gráfico */}
        <Grid size={{ xs: 12 }}>Elemento: Gráfico</Grid>

        {/* Tabla */}
        <Grid size={{ xs: 12 }}>Elemento: Tabla</Grid>

        {/* Información adicional */}
        <Grid size={{ xs: 12 }}>Elemento: Información adicional</Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
