import React from 'react';
import {
  Container,
  ContactSection,
  ContactSectionInnerPart,
  LeftInnerPart,
  RightInnerPart,
  LeftInnerMap,
  MapContent,
  ContactArea,
  ContactAreaCompanyName,
  ContactAreaHeading,
  ContactContent,
  ContactDetails,
  ContactIcon,
  ContactDetailsofIcon,
} from '../css/ContactStyled';

import img from '../assests/mapicon.png';
import calliconimg from '../assests/CallIicon.png';
import emailicon from '../assests/emailIcon.png';
import contacctmap from '../assests/contactMap.png';

const Contact = () => {
  return (
    <div>
      <ContactSection>
        <Container>
          <ContactSectionInnerPart>
            <LeftInnerPart>
              <LeftInnerMap>
                <MapContent>
                  <img src={contacctmap} alt="map" />
                  <iframe
                    title="Google Map"
                    width="480"
                    height="510"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.496544465348!2d8.872573415794161!3d52.161664979747904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba6dd66eba6ffb%3A0x780e5616fd354962!2sAuf%20der%20Heide%208%2C%2032602%20Vlotho%2C%20Germany!5e0!3m2!1sen!2sin!4v1611812242292!5m2!1sen!2sin"
                  ></iframe>
                </MapContent>
              </LeftInnerMap>
            </LeftInnerPart>
            <RightInnerPart>
              <ContactArea>
                <ContactAreaHeading>Contact</ContactAreaHeading>
                <ContactAreaCompanyName>Volker Munko</ContactAreaCompanyName>
                <ContactDetails>
                  <ContactContent>
                    <ContactIcon>
                      <img src={img} alt="map" />
                    </ContactIcon>
                    <ContactDetailsofIcon>
                      Office for Allfinanz German investment advice On the heath
                      8 32602 Vlotho
                    </ContactDetailsofIcon>
                  </ContactContent>
                  <ContactContent>
                    <ContactIcon>
                      <img src={calliconimg} alt="call" />
                    </ContactIcon>
                    <ContactDetailsofIcon>05733 881883</ContactDetailsofIcon>
                  </ContactContent>
                  <ContactContent>
                    <ContactIcon>
                      <img src={emailicon} alt="email" />
                    </ContactIcon>
                    <ContactDetailsofIcon>
                      Volker.Munko@allfinanz.ag
                    </ContactDetailsofIcon>
                  </ContactContent>
                </ContactDetails>
              </ContactArea>
            </RightInnerPart>
          </ContactSectionInnerPart>
        </Container>
      </ContactSection>
    </div>
  );
};

export default Contact;
