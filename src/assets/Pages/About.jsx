import { Divider } from '@mui/material';
import { Container } from '@mui/system';

const About = () => (
  <Container
    maxWidth='lg'
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      height: '90vh',
    }}
  >
    <h1 style={{ textAlign: 'center' }}>About</h1>
    <Divider style={{ background: 'whitesmoke' }} />
    <h2>
      This website was made as a front-end project, it lets you make a list of your
      favorite movies (some of mine are included). you can remove and edit every movie, or add your own!
    </h2>
  </Container>
);

export default About;
