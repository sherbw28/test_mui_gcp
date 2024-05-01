import { Box, Button, Divider, Grid, Input, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Stack height="300px" justifyContent="center" alignItems="center" gap="32px" bgcolor="green">
        <Typography id="login_heading" variant="h1" fontSize="1.5rem">
          ログインフォーム
        </Typography>
        <Stack
          direction="row"
          bgcolor="pink"
          divider={<Divider orientation="vertical" flexItem />}
          width="50%"
          justifyContent="space-between"
        >
          <Input placeholder="メールアドレス" />
          <Input placeholder="ユーザーネーム" />
          <Button variant="contained">ログイン</Button>
        </Stack>
      </Stack>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} bgcolor="blue">
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Box>xs=2</Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
