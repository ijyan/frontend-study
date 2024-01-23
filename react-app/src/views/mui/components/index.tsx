import React from 'react';
import { Button, Card, CardContent, CardMedia, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

function Index() {
  return (
    <>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Default
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#text-buttons">
        Link
      </Button>
      <hr />
      <TextField label="Standard" variant="standard" />
      <TextField
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Defalut Value"
      />
      <TextField label="Password" type="password" variant="standard" />
      <Card variant="outlined">
        <CardMedia component="img" height="140" image="" alt="카드이미지" />
        <CardContent>
          <Typography variant="h5" component="h2">
            Card Title
          </Typography>
          <Typography variant="body2" component="p">
            Card Content
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Index;
