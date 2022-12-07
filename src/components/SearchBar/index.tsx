import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { BiSearch } from 'react-icons/bi';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  &:focus-within {
    border-radius: 0.5rem;
    outline: 2px solid ${({ theme }) => theme.colors.indigo500};
  }

  @media ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    width: 95%;
  }
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.slate300};
  height: 1.5rem;
  padding: 0.5rem 0;
  outline: none;
  background-color: ${({ theme }) => theme.colors.slate300};
`;
const Input = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.slate600};
  background-color: ${({ theme }) => theme.colors.slate300};
`;
const Spacer = styled.div`
  margin: 0 8px;
`;

export default function SearchBar({
  searchVal,
  onChange,
  onSubmit,
}: {
  searchVal: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
}) {
  const theme = useTheme();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(searchVal);
    onChange('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BiSearch
          size="26px"
          color={theme.colors.gray500}
          css={css`
            padding: 0 0.5rem;
          `}
        />
        <Input
          value={searchVal}
          type="text"
          placeholder="Search NFT collection by contract address"
          onChange={(e) => onChange(e.target.value)}
        />
        <Spacer />
      </Form>
    </Container>
  );
}
