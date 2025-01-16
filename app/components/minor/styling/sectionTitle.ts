import { Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const SectionTitle = styled(Heading)`
  font-size: 0.8rem;
  color: #2d3748;
  position: relative;
  margin: 2rem 0 1.5rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(180deg, #3182ce, #805ad5);
    border-radius: 4px;
  }
`;
