import { useEffect } from "react";

const UseDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
      }, [title]); // Update title when `title` changes
    };

export default UseDocumentTitle