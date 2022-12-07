import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

export default function Page({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
