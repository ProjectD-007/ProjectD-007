import { Stack, Typography } from '@mui/material';

export default function ConsultPage({ data }) {
  return (
    <>
      <Stack direction={'column'} alignItems={'center'}>
        <Typography
          component={'h1'}
          variant="h4"
          fontSize={'32px'}
          color={'text.primary'}
          fontWeight={600}
          mb={1}
        >
          {data.title}
        </Typography>
        <Typography
          component={'h3'}
          variant="h5"
          fontSize={'20px'}
          color="text.light"
        >
          {data.subTitle}
        </Typography>
      </Stack>
    </>
  );
}
