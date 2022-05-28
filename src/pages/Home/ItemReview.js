import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import StarRatings from "react-star-ratings/build/star-ratings";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const ItemReview = () => {
  const [reviews, setreviews] = useState([]);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 my-6 gap-4">
      {reviews.map((review) => {
        return (
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{review.product}</h2>
              <p>{review.description}</p>
              <StarRatings
                rating={parseInt(review.rating)}
                starRatedColor="red"
                numberOfStars={5}
                name="rating"
              />
              <p>{review.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemReview;
