import { Typography } from '@mui/material';
import Input from '../../../components/Common/Input';
import PrimaryBtn from '../../../components/Common/PrimaryBtn';

export default function WithPasssword({ onChange }) {
  return (
    <>
      <Input
        name="emailId"
        label="Email ID"
        placeholder="Enter Email ID"
        required
      />

      <Input
        name="password"
        label="Password"
        placeholder="Enter Password"
        required
      />

      <PrimaryBtn children={'Login'} sx={{ mt: 3, mb: 2 }} />

      <Typography textAlign={'center'} fontSize={'14px'} fontWeight={500}>
        Continue with{' '}
        <Typography
          component={'span'}
          variant="span"
          fontWeight={600}
          className="cursorPointer"
          style={{
            color: '#008687',
          }}
          onClick={() => onChange('mobile')}
        >
          mobile{' '}
        </Typography>
      </Typography>
    </>
  );
}
