import Container from '@/components/Container';
import LoginForm from './LoginForm';


const ContactComponent = () => {
  return (
    <Container>
      {/* Start top about info */}
      <div className="py-12 px-5">
        <h2 className="after-effect after:left-40 mt-12 lg:mt-0 ">Login</h2>
      </div>
      <div className='mx-10 lg:mx-auto lg:w-1/4  '>
      <LoginForm />
      </div>
    </Container>

  );
}

export default ContactComponent