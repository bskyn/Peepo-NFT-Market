import styled from '@emotion/styled';
import { Collection } from '../../types/collection';

const Wrapper = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  height: 350px;
  display: block;
  border-radius: 1.5rem;
  object-fit: cover;
  object-position: top;
`;

export default function Hero({ collection }: { collection: Collection }) {
  const { banner_image_url, name } = collection;
  let xlg = banner_image_url.replace('500', '1920'); // replace resolution with larger one from OS api

  return (
    <Wrapper>
      <Image src={xlg} alt={`${name} hero image`} />
    </Wrapper>
  );
}
