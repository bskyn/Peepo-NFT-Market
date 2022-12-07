import Header from '../Header';
import { ErrorContainer } from './ErrorContainer';

export default function SearchError({
  searchVal,
  onChange,
  onSubmit,
}: {
  searchVal: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
}) {
  return (
    <>
      <Header searchVal={searchVal} onChange={onChange} onSubmit={onSubmit} />
      <ErrorContainer>
        <div>No items found in this results</div>
      </ErrorContainer>
    </>
  );
}
