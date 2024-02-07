import Input from '../../../components/Common/Input';
import PrimaryBtn from '../../../components/Common/PrimaryBtn';

export default function Create() {
  return (
    <>
      <Input name="name" label="Name" required placeholder="Enter name" />
      <Input
        name="phonenumber"
        label="Phone number"
        required
        placeholder="Phone number"
        type="number"
      />
      <Input
        name="emailid"
        label="Email id"
        required
        placeholder="Enter email ID"
        type="email"
      />
      <Input
        name="password"
        label="Password"
        required
        placeholder="Enter password"
        type="password"
      />
      <Input
        name="confirmPassword"
        label="Confirm password"
        required
        placeholder="Confirm password"
        type="password"
      />

      <PrimaryBtn children={'Sent OTP'} sx={{ mt: 2 }} />
    </>
  );
}
