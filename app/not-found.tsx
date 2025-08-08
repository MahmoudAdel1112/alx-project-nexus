import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundMessage,
  HomeLink,
} from '@/app/components/NotFoundStyles';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Not Found</NotFoundTitle>
      <NotFoundMessage>
        Sorry, the page you are looking for does not exist.
      </NotFoundMessage>
      <HomeLink href="/">Go back home</HomeLink>
    </NotFoundContainer>
  );
}
