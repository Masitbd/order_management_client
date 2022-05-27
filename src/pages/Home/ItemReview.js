import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const ItemReview = () => {
  const [reviews, setreviews] = useState([]);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/review?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setreviews(data));
    }
  }, [user]);

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 my-6">
      {reviews.map((review) => {
        return (
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{review.product}</h2>
              <p>{review.description}</p>
              <p>{review.rating}</p>
              <p>{review.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemReview;
