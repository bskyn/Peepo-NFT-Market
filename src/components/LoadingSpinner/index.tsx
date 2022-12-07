import styled from '@emotion/styled';

const LoadingSpinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.indigo400};
  border-top: 8px solid ${({ theme }) => theme.colors.indigo800};
  border-radius: 50%;
  height: 48px;
  width: 48px;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;
