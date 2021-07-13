import React from 'react';
import PropTypes from 'prop-types';
import {Sections, Title} from './Section.styled'

function Section({ title, children }) {
  return (
    <Sections>
      {title && <Title>{title}</Title>}
      {children}
    </Sections>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;