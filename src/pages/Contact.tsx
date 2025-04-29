import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import { useState, useRef } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { t } = useTranslation();

  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'success' | 'error' | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_07h39nh',
        'template_ut1b894',
        form.current,
        '_xJN9H03A2x_xuJvm'
      )
      .then(
        () => {
          setStatus('success');
          form.current?.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        {t.contact.title}
      </Typography>
      {status === 'success' && <Alert severity="success">{t.contact.success}</Alert>}
      {status === 'error' && <Alert severity="error">{t.contact.error}</Alert>}

      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit}
        sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField name="from_name" label={t.contact.name} fullWidth />
        <TextField name="reply_to" type="email" label={t.contact.email} required fullWidth />
        <TextField
          name="message"
          label={t.contact.message}
          required
          multiline
          rows={4}
          fullWidth
        />
        <Button type="submit" variant="contained">
          {t.contact.send}
        </Button>
      </Box>
    </Container>
  );
};
