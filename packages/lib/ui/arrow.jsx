import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  white-space: nowrap;
  border: solid ${({ scrolled }) => (scrolled ? '#013e3eaa' : '#fff9')};
  border-width: 0 1px 1px 0;
  padding: 3px;
  transform: ${({ opened }) =>
    opened ? 'rotate(-135deg)' : 'rotate(45deg) translateY(-2px)'};
  margin-left: 8px;
  transition: 0.3s ease;

  &:hover {
    border-color: ${({ scrolled }) => (scrolled ? '#013e3e' : '#fff')};
  }
`;
