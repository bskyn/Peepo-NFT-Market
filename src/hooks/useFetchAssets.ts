import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchAssets(pageParam: string, address: string) {
  const options = {
    method: 'GET',
    url: 'https://api.opensea.io/api/v1/assets',
    params: {
      asset_contract_address: address,
      order_direction: 'desc',
      limit: '10',
      include_orders: 'true',
      cursor: pageParam,
    },
    headers: {
      accept: 'application/json',
      'X-API-KEY': import.meta.env.VITE_OPENSEA_API_KEY,
    },
  };
  const { data } = await axios.request(options);
  return data;
}

export default function useFetchAssets(address: string) {
  return useInfiniteQuery({
    queryKey: ['assets', address],
    queryFn: ({ pageParam = '' }) => fetchAssets(pageParam, address),
    getNextPageParam: (lastPage) => lastPage.next,
  });
}
