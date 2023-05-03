import { UseInfiniteScroll } from '../../lib/useInfiniteScroll';

// Loader.tsx
type LoaderProps = Pick<
	UseInfiniteScroll,
	'isLoading' | 'loadMoreCallback' | 'isLastPage'
>;

export const Loader = ({
	isLoading,
	isLastPage,
	loadMoreCallback,
}: LoaderProps) => {
	if (isLoading) return <p>Loading...</p>;

	if (isLastPage) return <p>You have reached the last blog post.</p>;

	return <div ref={loadMoreCallback}>Loading...</div>;
};
