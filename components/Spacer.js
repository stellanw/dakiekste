import styled from "styled-components";

const Spacer = styled.div`
  height: ${({ size, theme }) => theme.spacing[size] || theme.spacing.m};
`;

export default Spacer;
