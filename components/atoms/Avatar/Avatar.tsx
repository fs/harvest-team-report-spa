import React from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

const AvatarWrapper = styled.div(
  // @ts-ignore
  ({ width, customStyles }) => css`
    border-radius: 10%;
    width: ${width};
    ${customStyles}
  `,
);

const AvatarImg = styled.img`
  border-radius: 10%;
  width: 100%;
`;

const Avatar = ({
  width,
  customStyles,
  src,
  alt,
}: {
  width: string;
  customStyles?: FlattenSimpleInterpolation;
  src: string;
  alt: string;
}) => {
  return (
    // @ts-ignore
    <AvatarWrapper width={width} customStyles={customStyles}>
      <AvatarImg src={src} alt={alt} />
    </AvatarWrapper>
  );
};

export default Avatar;
