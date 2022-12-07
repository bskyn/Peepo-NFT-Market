import { Fragment, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { FaEthereum } from 'react-icons/fa';
import { ethers } from 'ethers';
import Page from './components/Page';
import Header from './components/Header';
import Hero from './components/Hero';
import Metadata from './components/Metadata';
import LoadingSpinner from './components/LoadingSpinner';
import useFetchCollection from './hooks/useFetchCollection';
import useFetchAssets from './hooks/useFetchAssets';
import { formatNumber, strToNumber } from './helpers/formatNumber';
import { Asset } from './types/asset';
import { Order } from './types/order';
import { ellipsis } from './styles/common';

const { utils } = ethers;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const GridContent = styled.div`
  background: linear-gradient(
    90deg,
    rgba(100, 116, 139, 1) 0%,
    rgba(100, 116, 139, 1) 35%,
    rgba(51, 65, 85, 1) 100%
  );
  padding: 0.75rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    transition: all 0.2s ease-out;
  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ErrorContainer = styled.div`
  color: ${({ theme }) => theme.colors.red500};
`;
const HeaderText = styled.div`
  margin-top: 0.5rem;
  font-size: 14px;
  font-weight: bold;
`;
const Content = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.indigo300};
`;
const ContentText = styled.div`
  font-size: 14px;
`;

// lil pudgys 0x524cab2ec69124574082676e6f654a18df49a048
// pudgy penguins 0xbd3531da5cf5857e7cfaa92426877b022e612cf8
// timeless 0x704bf12276f5c4bc9349d0e119027ead839b081b

function App() {
  const { ref, inView } = useInView();
  const [searchVal, setSearchVal] = useState('');
  const [submittedVal, setSubmittedVal] = useState('');

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const {
    data: collectionData,
    error: collectionErr,
    status: collectionStatus,
  } = useFetchCollection(
    submittedVal || '0x524cab2ec69124574082676e6f654a18df49a048' // default
  );

  const {
    data: assetsData,

    error: assetsErr,
    status: assetsStatus,
    fetchNextPage,
  } = useFetchAssets(
    submittedVal || '0x524cab2ec69124574082676e6f654a18df49a048' // default
  );

  if (collectionStatus === 'loading' || assetsStatus === 'loading') {
    return (
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    );
  } else if (collectionStatus === 'error' || assetsErr === 'error') {
    if (collectionErr instanceof Error) {
      return (
        <Wrapper>
          <ErrorContainer>
            Collection Error: {collectionErr.message}
          </ErrorContainer>
        </Wrapper>
      );
    }
    if (assetsErr instanceof Error) {
      return (
        <Wrapper>
          <ErrorContainer>Assets Error: {assetsErr.message}</ErrorContainer>
        </Wrapper>
      );
    }
  }

  const onSubmit = () => {
    setSubmittedVal(searchVal);
  };

  const onChange = (val: string) => {
    setSearchVal(val);
  };

  return (
    <>
      <Header searchVal={searchVal} onChange={onChange} onSubmit={onSubmit} />
      <Page>
        <Hero collection={collectionData.collection} />
        <Metadata collection={collectionData.collection} />
        <Grid>
          {assetsData?.pages.map((page, i) => (
            <Fragment key={i}>
              {page.assets.map((asset: Asset) => {
                const seaportOrder =
                  (asset.seaport_sell_orders?.[0] as Order) || {};
                const currentPrice = seaportOrder.current_price
                  ? utils.formatEther(seaportOrder.current_price)
                  : '';

                return (
                  <GridContent key={asset.id}>
                    {asset.image_thumbnail_url ? (
                      <Image src={asset.image_thumbnail_url} />
                    ) : (
                      // some nfts do not have thumbnail, if so default on collection image
                      <Image src={collectionData.collection.image_url} />
                    )}
                    <HeaderText>
                      <div css={ellipsis}># {asset.token_id}</div>
                    </HeaderText>
                    {currentPrice ? (
                      <Content>
                        <ContentText>
                          {formatNumber(strToNumber(currentPrice), 2)}
                        </ContentText>
                        <FaEthereum size="16px" />
                      </Content>
                    ) : (
                      <Content>
                        <ContentText>Unlisted</ContentText>
                      </Content>
                    )}
                  </GridContent>
                );
              })}
            </Fragment>
          ))}
        </Grid>

        {/* inView ref */}
        <div ref={ref} />
      </Page>
    </>
  );
}

export default App;
