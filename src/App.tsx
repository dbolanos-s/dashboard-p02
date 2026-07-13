import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchData';

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
  const dataFetcherOutput = useFetchData();

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
        <Grid container size={{ xs: 12, md: 9 }} spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput && (
              <IndicatorUI
                title="Temperatura (2m)"
                description={`${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`}
              />
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput && (
              <IndicatorUI
                title="Temperatura aparente"
                description={`${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}`}
              />
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput && (
              <IndicatorUI
                title="Velocidad del viento"
                description={`${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}`}
              />
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput && (
              <IndicatorUI
                title="Humedad relativa"
                description={`${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}`}
              />
            )}
          </Grid>
        </Grid>

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
