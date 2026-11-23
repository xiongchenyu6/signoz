import type { ComponentProps } from 'react';
import { Typography } from '@signozhq/ui/typography';

type MarkdownExternalLinkProps = ComponentProps<'a'> & {
	// react-markdown passes `node` — accept and ignore it
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	node?: any;
};

export default function MarkdownExternalLink({
	href,
	title,
	children,
}: MarkdownExternalLinkProps): JSX.Element {
	return (
		<Typography.Link
			variant="paragraph"
			size="base"
			weight="regular"
			textOverflow="wrap"
			target="_blank"
			testId="ai-markdown-link"
			// oxlint-disable-next-line jsx-a11y/control-has-associated-label -- Typography.Link renders the children inside it
			render={<a href={href} title={title} />}
		>
			{children}
		</Typography.Link>
	);
}
