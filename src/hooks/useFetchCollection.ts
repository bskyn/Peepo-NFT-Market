import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Contract } from '../types/collection';

async function fetchContract(address: string) {
  const options = {
    method: 'GET',
    url: `https://api.opensea.io/api/v1/asset_contract/${address}`,
    headers: {
      'X-API-KEY': import.meta.env.VITE_OPENSEA_API_KEY,
    },
  };
  const { data } = await axios.request(options);
  return data;
}

async function fetchCollection(address: string) {
  // fetch contract data to get OS collectionSlug
  const contractData = (await fetchContract(address)) as Contract;
  const collectionSlug = contractData.collection?.slug;

  const options = {
    method: 'GET',
    url: `https://api.opensea.io/api/v1/collection/${collectionSlug}`,
    headers: {
      accept: 'application/json',
      'X-API-KEY': import.meta.env.VITE_OPENSEA_API_KEY,
    },
  };

  // fetch collection data
  const { data } = await axios.request(options);
  return data;
}

export default function useFetchCollection(address: string) {
  return useQuery({
    queryKey: ['collection', address],
    queryFn: () => fetchCollection(address),
  });
}
