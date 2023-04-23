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

	if (isLastPage) return <p>End of posts</p>;

	return <div ref={loadMoreCallback}>load more callback</div>;
};
