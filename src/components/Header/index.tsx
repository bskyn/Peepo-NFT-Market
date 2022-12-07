import styled from '@emotion/styled';
import SearchBar from '../SearchBar';
import Logo from '../../assets/logo.svg';

const Head = styled.div`
  position: sticky;
  top: 0;
  padding: 1rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.slate800};
`;
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media ${({ theme }) => theme.media.sm} {
    flex-direction: column;
  }
`;
const MainText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.indigo300};
`;
const Image = styled.img`
  &:hover {
    transform: translateY(-4px);
    transition: all 0.2s ease-out;
  }
`;

export default function Header({
  searchVal,
  onChange,
  onSubmit,
}: {
  searchVal: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
}) {
  return (
    <Head>
      <Wrapper>
        <Image src={Logo} alt="peepo-logo" />
        <MainText>Peepo NFT Market</MainText>
        <SearchBar
          searchVal={searchVal}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </Wrapper>
    </Head>
  );
}
