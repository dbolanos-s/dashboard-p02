import Alert from '@mui/material/Alert';

interface AlertConfig {
  description: string;
}

export default function AlertUI({ description }: AlertConfig) {
  return (
    <Alert variant="outlined" severity="success">
      {description}
    </Alert>
  );
}
