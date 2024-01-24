import React from 'react';
import {
  Container,
  ContactSection,
  ContactSectionInnerPart,
  ContactLeft,
  ContactRight,
  LeftInnerMap,
  MapContent,
  ContactArea,
  ContactAreaCompanyName,
  ContactAreaHeading,
  ContactContent,
  ContactDetails,
  ContactIcon,
  ContactDetailsOfIcon,
} from '../css/ContactStyled';
import map from '../assets/mapIcon.png';
import call from '../assets/callIcon.png';
import email from '../assets/emailIcon.png';
import contact from '../assets/contactMap.png';

const Contact = () => {
  return (
    <div>
      <ContactSection>
        <Container>
          <ContactSectionInnerPart>
            <ContactLeft>
              <LeftInnerMap>
                <MapContent>
                  <img src={contact} alt="map" />
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
            </ContactLeft>
            <ContactRight>
              <ContactArea>
                <ContactAreaHeading>Contact</ContactAreaHeading>
                <ContactAreaCompanyName>Volker Munko</ContactAreaCompanyName>
                <ContactDetails>
                  <ContactContent>
                    <ContactIcon>
                      <img src={map} alt="google-map" />
                    </ContactIcon>
                    <ContactDetailsOfIcon>
                      Office for Allfinanz German investment advice On the heath
                      8 32602 Vlotho
                    </ContactDetailsOfIcon>
                  </ContactContent>
                  <ContactContent>
                    <ContactIcon>
                      <img src={call} alt="call" />
                    </ContactIcon>
                    <ContactDetailsOfIcon>
                      <a href="tel:(0049)176/23148867">(0049)176/23148867 </a>
                    </ContactDetailsOfIcon>
                  </ContactContent>
                  <ContactContent>
                    <ContactIcon>
                      <img src={email} alt="email" />
                    </ContactIcon>
                    <ContactDetailsOfIcon>
                      <a href="mailto:volker.munko@allfinanz.ag">
                        Volker.Munko@allfinanz.ag
                      </a>
                    </ContactDetailsOfIcon>
                  </ContactContent>
                </ContactDetails>
              </ContactArea>
            </ContactRight>
          </ContactSectionInnerPart>
        </Container>
      </ContactSection>
    </div>
  );
};

export default Contact;
