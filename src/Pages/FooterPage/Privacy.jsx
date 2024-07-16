import React from 'react'
import Footer2 from '../../Component/Footer2'
import { Box, Typography } from '@mui/material'

const Privacy = () => {
  return (
    <>
      <Box className="flex-center bg-img  " >
        <Typography variant='h2' className='primary-heading'> Privacy Policy </Typography>
      </Box>
      <Box className=" flex-center padding-top-bottom" >

        <Box className="flex-center-column privacy_man"  >
          <Typography className='terms_conditon_heading'>Last updated on 21-11-2023</Typography>
          <Typography className="terms_conditon_content">This privacy policy (“Policy”) relates to the manner Soham Web Solution (“we”, “us”, “our”) in which we use, handle and process the data that you provide us in connection with using the products or services we offer. By using this website or by availing goods or services offered by us, you agree to the terms and conditions of this Policy, and consent to our use, storage, disclosure, and transfer of your information or data in the manner described in this Policy.</Typography>

          <Typography className="terms_conditon_content">We are committed to ensuring that your privacy is protected in accordance with applicable laws and regulations. We urge you to acquaint yourself with this Policy to familiarize yourself with the manner in which your data is being handled by us.</Typography>

          <Typography className="terms_conditon_content">Soham Web Solution may change this Policy periodically and we urge you to check this page for the latest version of the Policy in order to keep yourself updated.</Typography>

          <Typography className='terms_conditon_heading'> What data is being collected</Typography>
          <Typography className="terms_conditon_content"> We may collect the following information from you:</Typography>
          <ul className="terms_conditon_content">
            <li>Name</li>
            <li>Contact information including address and email address</li>
            <li>Demographic information or, preferences or interests</li>
            <li>Personal Data or Other information relevant/ required for providing the goods or services to you</li>
            <li> The meaning of Personal Data will be as defined under relevant Indian laws</li>
          </ul>

          <Typography className="terms_conditon_content"> <strong className='terms_conditon_heading'>Note</strong>: Notwithstanding anything under this Policy as required under applicable Indian laws, we will not be storing any credit card, debit card or any other similar card data of yours. Please also note that all data or information collected from you will be strictly in accordance with applicable laws and guidelines.</Typography>


          <Typography className='terms_conditon_heading'>What we do with the data we gather</Typography>
          <Typography className="terms_conditon_content">We require this data to provide you with the goods or services offered by us including but not limited, for the below set out purposes:</Typography>
          <ul className="terms_conditon_content">
            <li>Internal record keeping</li>
            <li>For improving our products or services.</li>
            <li>For providing updates to you regarding our products or services including any special offers.</li>
            <li>To communicate information to you</li>
            <li>For internal training and quality assurance purposes</li>

          </ul>


          <Typography className='terms_conditon_heading'>Who do we share your data with

          </Typography>
          <Typography className="terms_conditon_content">We may share your information or data with:

          </Typography>
          <ul className="terms_conditon_content">
            <li>Third parties including our service providers in order to facilitate the provisions of goods orservices to you, carry out your requests, respond to your queries, fulfil your orders or for other operational and business reasons.</li>
            <li>With our group companies (to the extent relevant)</li>
            <li>Our auditors or advisors to the extent required by them for performing their services</li>
            <li>Governmental bodies, regulatory authorities, law enforcement authorities pursuant to our legal
              obligations or compliance requirements.</li>

          </ul>
          <Typography className='terms_conditon_heading'  >How we use cookies</Typography>
          <Typography className="terms_conditon_content">We use “cookies” to collect information and to better understand customer behaviour. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to avail our goods or services to the full extent. We do not control
            the use of cookies by third parties. The third party service providers have their own privacy policies addressing how they use such information.</Typography>


          <Typography className='terms_conditon_heading'>Your rights relating to your data</Typography>
          <Typography className="terms_conditon_content"><b className='terms_conditon_heading'>Right to Review –</b> You can review the data provided by you and can request us to correct or amend such data (to the extent feasible, as determined by us). That said, we will not be responsible for the authenticity of the data or information provided by you.</Typography>


          <Typography className="terms_conditon_content"><b className='terms_conditon_heading'>Withdrawal of your Consent –</b> You can choose not to provide your data, at any time while availing our goods or services or otherwise withdraw your consent provided to us earlier, in writing to our email ID: contact@sohamsolution.com In the event you choose to not provide or later withdraw your consent, we may not be able to provide you our services or goods. Please note that these rights are subject to our compliance with applicable laws.</Typography>


          <Typography className='terms_conditon_heading'>How long will we retain your information or data?</Typography>
          <Typography className="terms_conditon_content">We may retain your information or data (i) for as long as we are providing goods and services to you; and (ii) as permitted under applicable law, we may also retain your data or information even after you terminate the business relationship with us. However, we will process such information or data in
            accordance with applicable laws and this Policy</Typography>


          <Typography className='terms_conditon_heading'>Data Security</Typography>
          <Typography className="terms_conditon_content">We will use commercially reasonable and legally required precautions to preserve the integrity and security of your information and data.</Typography>

          <Typography className='terms_conditon_heading'>Queries/ Grievance Officer</Typography>
          <Typography className="terms_conditon_content">For any queries, questions or grievances about this Policy, please contact us using the contact information provided on this website.</Typography>




        </Box>
      </Box>

      <Footer2 />
    </>
  )
}

export default Privacy
