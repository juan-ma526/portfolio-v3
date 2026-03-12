import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';


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
    <>
      <Typography
        id="trabajos"
        variant="h2"
        sx={{ ml: { xs: '20px', md: '400px' }, fontWeight: 700, fontSize: { xs: '1.875rem', md: '2.25rem' }, color: 'white' }}
      >
        {t('StepperJobs.title')}
      </Typography>
      <Box
        sx={{
          borderBottom: 4,
          borderColor: '#00FFFF',
          width: '100px',
          ml: { xs: '20px', md: '400px' },
          mb: { xs: '32px' },
        }}
      ></Box>
      <Box margin={'auto'} maxWidth={500}>
        <Stepper activeStep={-1} orientation="vertical" nonLinear>
          {steps.map((step, index) => (
            <Step key={index} expanded>
              <StepLabel
                sx={{
                  '& > * > svg': {
                    fill: '#FF007F',
                    height: '2.5rem',
                    width: '2.5rem',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    display: 'inline-block',
                    color: 'white',
                    fontWeight: '600',
                    borderBottom: 1,
                    borderColor: '#00FFFF',
                  }}
                >
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body2" sx={{ fontSize: '18px', mb: 2 }}>
                  {step.description}
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#00FFFF', fontWeight: 700 }}
                  >
                    {step.date}
                  </Typography>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    disabled={step.Place === 'Freelance'}
                    href={step.Link}
                    target="_blanck"
                    variant="contained"
                    sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      mt: 1,
                      mr: 1,
                      '&.Mui-disabled': {
                        backgroundColor: 'gray',
                        color: 'white',
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
    </>
  );
}
