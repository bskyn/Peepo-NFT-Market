import styled from '@emotion/styled';
import { FaEthereum } from 'react-icons/fa';
import { formatNumber } from '../../helpers/formatNumber';

export const TOTAL_SUPPLY = 'Supply';
export const TOTAL_SALES = 'Sales';
export const OWNERS = 'Owners';
export const VOLUME = 'Volume';
export const FLOOR_PRICE = 'Floor';

const Wrapper = styled.div``;
const Heading = styled.div`
  color: ${(props) => props.theme.colors.indigo200};
  font-weight: bold;
  margin-bottom: 4px;
`;
const SubheadingWrapper = styled.div`
  display: flex;
  gap: 2px;
`;
const Subheading = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.indigo300};
`;

export default function Label({
  label,
  data,
}: {
  label: string;
  data: number;
}) {
  switch (label) {
    case TOTAL_SUPPLY:
      return (
        <Wrapper>
          <Heading>{label}</Heading>
          <Subheading>{formatNumber(data, 0)}</Subheading>
        </Wrapper>
      );
    case TOTAL_SALES:
      return (
        <Wrapper>
          <Heading>{label}</Heading>
          <Subheading>{formatNumber(data, 0)}</Subheading>
        </Wrapper>
      );
    case OWNERS:
      return (
        <Wrapper>
          <Heading>{label}</Heading>
          <Subheading>{formatNumber(data, 0)}</Subheading>
        </Wrapper>
      );
    case VOLUME:
      return (
        <Wrapper>
          <Heading>{label}</Heading>
          <SubheadingWrapper>
            <Subheading>{formatNumber(data, 2)}</Subheading>
            <Subheading>
              <FaEthereum size="1rem" />
            </Subheading>
          </SubheadingWrapper>
        </Wrapper>
      );
    case FLOOR_PRICE:
      return (
        <Wrapper>
          <Heading>{label}</Heading>
          <SubheadingWrapper>
            <Subheading>{formatNumber(data, 2)}</Subheading>
            <Subheading>
              <FaEthereum size="1rem" />
            </Subheading>
          </SubheadingWrapper>
        </Wrapper>
      );
    default: {
      return (
        <Wrapper>
          <Heading>{label}</Heading>
          <Subheading>{formatNumber(data, 0)}</Subheading>
        </Wrapper>
      );
    }
  }
}
