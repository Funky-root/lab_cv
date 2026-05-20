import { useEffect, useState } from "react";

function Reviews() {

  const [comments, setComments] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts/22/comments")
      .then((response) => response.json())

      .then((data) => {
        setComments(data);
      })

      .catch((error) => {
        console.error("Error:", error);
      });

  }, []);

  return (

    <section className="mt-10">

      <h2 className="text-2xl font-bold mb-5">
        Employer Reviews
      </h2>

      <div className="space-y-4">

        {comments.map((comment) => (

          <div
            key={comment.id}
            className="bg-slate-200 p-4 rounded-lg shadow"
          >

            <h3 className="font-bold">
              {comment.name}
            </h3>

            <p className="text-sm text-gray-600">
              {comment.email}
            </p>

            <p className="mt-2">
              {comment.body}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;