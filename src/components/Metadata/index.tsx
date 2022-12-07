import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { HiCheckBadge } from 'react-icons/hi2';
import { BiLinkExternal } from 'react-icons/bi';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { Collection } from '../../types/collection';
import { ellipsis } from '../../styles/common';
import { pulsating } from '../../styles/keyframes';

import Label, {
  TOTAL_SUPPLY,
  TOTAL_SALES,
  OWNERS,
  VOLUME,
  FLOOR_PRICE,
} from './Label';

const Wrapper = styled.div`
  display: flex;
  margin-top: -2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.slate800};

  ${({ theme }) =>
    theme &&
    css`
      @media ${theme.media.md} {
        flex-direction: column;
      }
    `}
`;
const Box = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  border: ${({ theme }) => `2px solid ${theme.colors.slate200}`};

  ${({ theme }) =>
    theme &&
    css`
      @media ${theme.media.sm} {
        width: 8rem;
        height: 8rem;
      }
    `}
`;
const Container = styled.div`
  margin: 1rem;
  width: 100%;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    theme &&
    css`
      @media ${theme.media.md} {
        align-items: center;
      }
    `}
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) =>
    theme &&
    css`
      @media ${theme.media.md} {
        margin-top: -3rem;
      }
    `}
`;
const Image = styled.img`
  height: 100%;
  cursor: pointer;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: fit-content;
  color: ${({ theme }) => theme.colors.indigo200};
  margin-right: 0.25rem;

  animation: ${pulsating} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;
const EtherscanLabel = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  margin-top: 0.5rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.indigo200};
  }
  &:active {
    color: ${({ theme }) => theme.colors.indigo300};
  }
`;
const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  width: 100%;
  gap: 4rem;

  @media ${({ theme }) => theme.media.md} {
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
  }

  @media ${({ theme }) => theme.media.sm} {
    gap: 2rem;
  }
`;

export default function Metadata({ collection }: { collection: Collection }) {
  const theme = useTheme();
  const {
    image_url,
    name,
    safelist_request_status,
    twitter_username,
    discord_url,
    external_url,
    primary_asset_contracts,
    stats,
  } = collection;

  const { count, num_owners, floor_price, total_volume, total_sales } = stats;
  const contractAddress = primary_asset_contracts[0].address;

  return (
    <Wrapper>
      <ImageWrapper>
        <Box>
          <Image src={image_url} alt={name} />
        </Box>
      </ImageWrapper>
      <Container>
        <Section>
          <HeaderWrapper>
            <Title>{name}</Title>
            {safelist_request_status === 'verified' ? (
              <HiCheckBadge
                color={theme.colors.teal400}
                size="22px"
                css={css`
                  margin-top: 2px;
                `}
              />
            ) : (
              <div />
            )}
          </HeaderWrapper>
          <ContentWrapper>
            {external_url && (
              <BsGlobe
                size="22px"
                color={theme.colors.indigo400}
                cursor="pointer"
                css={css`
                  &:hover {
                    fill: ${theme.colors.indigo200};
                  }
                  &:active {
                    fill: ${theme.colors.indigo300};
                  }
                `}
                onClick={() => window.open(`${external_url}`)}
              />
            )}

            {discord_url && (
              <FaDiscord
                size="22px"
                color={theme.colors.indigo400}
                cursor="pointer"
                css={css`
                  &:hover {
                    fill: ${theme.colors.indigo200};
                  }
                  &:active {
                    fill: ${theme.colors.indigo300};
                  }
                `}
                onClick={() => window.open(`${discord_url}`)}
              />
            )}

            {twitter_username && (
              <FaTwitter
                size="22px"
                color={theme.colors.indigo400}
                cursor="pointer"
                css={css`
                  &:hover {
                    fill: ${theme.colors.indigo200};
                  }
                  &:active {
                    fill: ${theme.colors.indigo300};
                  }
                `}
                onClick={() =>
                  window.open(`https://www.twitter.com/${twitter_username}`)
                }
              />
            )}
          </ContentWrapper>

          <EtherscanLabel
            onClick={() =>
              window.open(`https://etherscan.io/address/${contractAddress}`)
            }
          >
            <div css={ellipsis}>{contractAddress}</div>
            <BiLinkExternal size="14px" />
          </EtherscanLabel>
        </Section>

        <LabelWrapper>
          <Label label={TOTAL_SUPPLY} data={count} />
          <Label label={TOTAL_SALES} data={total_sales} />
          <Label label={OWNERS} data={num_owners} />
          <Label label={FLOOR_PRICE} data={floor_price} />
          <Label label={VOLUME} data={total_volume} />
        </LabelWrapper>
      </Container>
    </Wrapper>
  );
}
