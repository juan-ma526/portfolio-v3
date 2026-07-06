import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import { Reveal } from './Reveal';


export default function StepperJobs() {
  const { t } = useTranslation();

  const steps = [
    {
      label: t('StepperJobs.job1.title'),
      description: t('StepperJobs.job1.description'),
      date: t('StepperJobs.job1.duration'),
      Place: t('StepperJobs.job1.company'),
      Link: 'https://diabecop-dev.com.ar/',
    },
    {
      label: t('StepperJobs.job2.title'),
      description: t('StepperJobs.job2.description'),
      date: t('StepperJobs.job2.duration'),
      Place: t('StepperJobs.job2.company'),
      Link: 'https://www.linkedin.com/company/semillero-latam/',
    },
    {
      label: t('StepperJobs.job3.title'),
      description: t('StepperJobs.job3.description'),
      date: t('StepperJobs.job3.duration'),
      Place: t('StepperJobs.job3.company'),
      Link: 'https://www.linkedin.com/school/devtalles/',
    },
    {
      label: t('StepperJobs.job4.title'),
      description: t('StepperJobs.job4.description'),
      date: t('StepperJobs.job4.duration'),
      Place: t('StepperJobs.job4.company'),
      Link: '*',
    },
    {
      label: t('StepperJobs.job5.title'),
      description: t('StepperJobs.job5.description'),
      date: t('StepperJobs.job5.duration'),
      Place: t('StepperJobs.job5.company'),
      Link: 'https://www.linkedin.com/company/cruce/',
    },
  ];

  return (
    <Box
      component="section"
      sx={{ py: 8, bgcolor: 'background.default', scrollMarginTop: '85px' }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography id="trabajos" variant="h2" sx={{ color: 'text.primary' }}>
            {t('experience.title')}
          </Typography>
          <Box
            sx={{
              borderBottom: 4,
              borderColor: 'neon.cyan',
              width: 100,
              mb: 4,
            }}
          />
        </Reveal>
        <Box sx={{ maxWidth: 640 }}>
          <Stepper activeStep={-1} orientation="vertical" nonLinear>
            {steps.map((step, index) => (
              <Step key={index} expanded>
                <StepLabel
                  sx={{
                    '& .MuiStepIcon-root': {
                      fill: 'neon.magenta',
                      height: '2.5rem',
                      width: '2.5rem',
                    },
                    '& .MuiStepIcon-text': { display: 'none' },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      display: 'inline-block',
                      color: 'text.primary',
                      fontWeight: 600,
                      borderBottom: 1,
                      borderColor: 'neon.cyan',
                    }}
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {step.description}
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: 'neon.cyan' }}
                    >
                      {step.date}
                    </Typography>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      disabled={step.Place === 'Freelance'}
                      href={step.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      sx={{
                        mt: 1,
                        mr: 1,
                        textTransform: 'none',
                        '&.Mui-disabled': {
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          color: 'text.secondary',
                        },
                      }}
                    >
                      {step.Place}
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </Box>
  );
}
