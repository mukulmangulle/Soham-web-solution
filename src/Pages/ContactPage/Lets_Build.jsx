import { Box,Typography } from '@mui/material'
import ContactForm from './ContactForm';

const Lets_Build = () => {
  return (
    <>
      <Box className="contact" >
        <Box className="bg-img " >
          <Typography className='primary-heading' variant='h1'  >Contact Us</Typography>
        </Box>
      </Box>

      <Box className="flex-center"><Box className=" container" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'}>
          <Typography className="secondary_heading" variant='h3'   >Let's Build Something Amazing Together!
          </Typography>

          <Typography className='primary_subheading contant_pre'  >
            We're excited to help you bring your vision to life! Whether you have a question about our services, need assistance with an ongoing project, or want to explore how we can collaborate, our team is here for you.
          </Typography>

        </Box>
        <ContactForm />
      </Box>
      </Box>

    </>

  )
}

export default Lets_Build;
