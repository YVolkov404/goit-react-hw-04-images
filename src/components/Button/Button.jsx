import { Button } from './Button.styled';

export const LoadMoreButton = ({ title, onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      {title}
    </Button>
  );
};
