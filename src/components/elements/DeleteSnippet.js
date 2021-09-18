import { CloseButton } from "@chakra-ui/react";

export default function DeleteSnippet({id, snippetDeleted, ...props}) {
  const deleteSnippet = async () => {
    try {
      await fetch('/api/snippets/delete', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      snippetDeleted();
    } catch (err) {
      // console.error(err);
    }
  };

  return (
    <CloseButton onClick={deleteSnippet} {...props} />
  )
}