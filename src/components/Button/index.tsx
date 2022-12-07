import styled from '@emotion/styled';

const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.indigo600};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.indigo500};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.indigo400};
  }
`;

export default function Button({ children }: { children: React.ReactNode }) {
  return <ButtonWrapper type="button">{children}</ButtonWrapper>;
}
