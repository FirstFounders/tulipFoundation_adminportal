import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Layout from '../components/Layout';
//import { imageApi } from '../urlconfig';

export default function Home() {
  const Volunteers = useSelector((state) => state.Volunteers);
  const PartnerForm = useSelector((state) => state.PartnerForm);
  const Consultations = useSelector((state) => state.Consultations);
  const Partnership = useSelector((state) => state.Partnership);

  // console.log(Consultations);
  // // console.log(PartnerForm);
  // //const

  // console.log(Volunteers);
  return (
    <div>
      <Layout side>
        <div className='container'>
          <div className='mt-5 mb-2'>
            <h1>Volunteers</h1>
          </div>
          <Table responsive='xl'>
            <thead className='container'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>State</th>
                <th>Country</th>
                <th>Experience</th>
                <th>Travel Availability</th>
              </tr>
            </thead>
            <tbody>
              {Volunteers.Volunteers.map((Volunteer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Volunteer.name}</td>
                  <td>{Volunteer.email}</td>
                  <td>{Volunteer.phone}</td>
                  <td>{Volunteer.state}</td>
                  <td>{Volunteer.country}</td>
                  <td>{Volunteer.experience}</td>
                  <td>{Volunteer.travel_availability}</td>
                </tr>
              ))}
              {!Volunteers.loading && Volunteers.Volunteers.length < 1 ? (
                <tr>
                  <td>No Applicant Yet</td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </div>

        <div className='container'>
          <div className='mt-5 mb-2'>
            <h1>Partner Form</h1>
          </div>
          <Table responsive='xl'>
            <thead className='container'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Company</th>
                <th>Interest</th>
                <th>About</th>
              </tr>
            </thead>
            <tbody>
              {PartnerForm.PartnerForm.map((partner, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${partner.first_name} ${partner.last_name}`}</td>
                  <td>{partner.email}</td>
                  <td>{partner.phone}</td>
                  <td>{partner.company}</td>
                  <td>{partner.ur_interest}</td>
                  <td>{partner.about_us}</td>
                </tr>
              ))}
              {!PartnerForm.loading && PartnerForm.PartnerForm.length < 1 ? (
                <tr>
                  <td>No Applicant Yet</td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </div>

        <div className='container'>
          <div className='mt-5 mb-2'>
            <h1>Consultations</h1>
          </div>
          <Table responsive='xl'>
            <thead className='container'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>State</th>
                <th>Country</th>
                <th>Message</th>
                <th>Option</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              {Consultations.Consultations.map((consultation, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{consultation.name}</td>
                  <td>{consultation.email}</td>
                  <td>{consultation.phone}</td>
                  <td>{consultation.state}</td>
                  <td>{consultation.country}</td>
                  <td>{consultation.message}</td>
                  <td>{consultation.option}</td>
                  <td>{consultation.program}</td>
                </tr>
              ))}
              {!Consultations.loading &&
              Consultations.Consultations.length < 1 ? (
                <tr>
                  <td>No Applicant Yet</td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </div>

        <div className='container'>
          <div className='mt-5 mb-2'>
            <h1>Partnership Project</h1>
          </div>
          <Table responsive='xl'>
            <thead className='container'>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Company Name</th>
                <th>Company Link</th>
                <th>Company Article</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {Partnership.Partnership.map((Partner, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Partner.title}</td>
                  <td>{Partner.brandLink && Partner.brandLink['company']}</td>
                  <td>{Partner.brandLink && Partner.brandLink['url']}</td>
                  <td>{Partner.article}</td>
                  {/* <td>{Partner.pictures}</td> */}
                  {/* <td>{consultation.message}</td>
                  <td>{consultation.option}</td>
                  <td>{consultation.program}</td> */}
                </tr>
              ))}
              {!Partnership.loading && Partnership.Partnership.length < 1 ? (
                <tr>
                  <td>No Partnership Yet</td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </div>
      </Layout>
    </div>
  );
}
