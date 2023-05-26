type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id } }: Props) {
	return {
		title: `страница поста ${id}`,
	}
}

export default function Post({ params: { id } }: Props) {
  return <h1>пост {id} </h1>;
}

