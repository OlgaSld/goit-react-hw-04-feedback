import { SectionContainer, Title } from "./Section_styled";
import PropTypes from 'prop-types';


export const Section = ({ title, children }) => {
    return (
        <SectionContainer>
            <Title>{title}</Title>
                {children}
        </SectionContainer>
    );
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
};