import Image from "next/image";
import React from "react";
import { Form } from "react-bootstrap";

const reviews = [
    {
        id: 1,
        avatar: "../../../assets/images/user.png",
        comment: "The discussion on addiction was incredibly insightful. It helped me understand the complexities behind substance use and its impact on the brain.",
        likes: 245,
        dislikes: 24,
    },
    {
        id: 2,
        avatar: "../../../assets/images/user.png",
        comment: "This content really opened my eyes to the effects of addiction.",
        likes: 150,
        dislikes: 10,
    },
    {
        id: 3,
        avatar: "../../../assets/images/user.png",
        comment: "The discussion on addiction was incredibly insightful. It helped me understand the complexities behind substance use and its impact on the brain.",
        likes: 245,
        dislikes: 24,
    },
    {
        id: 4,
        avatar: "../../../assets/images/user.png",
        comment: "The discussion on addiction was incredibly insightful. It helped me understand the complexities behind substance use and its impact on the brain.",
        likes: 245,
        dislikes: 24,
    },
    {
        id: 5,
        avatar: "../../../assets/images/user.png",
        comment: "The discussion on addiction was incredibly insightful. It helped me understand the complexities behind substance use and its impact on the brain.",
        likes: 245,
        dislikes: 24,
    },
];

function Reviews() {
    return (
        <>
            <div className="reviews-container">
                <div className="hide_mobile">
                    <div className="review-type-container">
                        <div className="user-profile-container">
                            <div className="user-avatar">
                                <Image src={require("../../../assets/images/user.png")} alt="User Avatar" />
                            </div>
                        </div>
                        <div className="review-comment-container">
                            <div className="review-comment">
                                <Form.Control type="text" placeholder="Write a comment ..." />
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                </div>
                <div className="review-list-container">
                    <div className="review-list">
                        {reviews.map((review) => (
                            <div className="review-item" key={review.id}>
                                <div className="user-profile-container">
                                    <div className="user-avatar">
                                        <Image src={require("../../../assets/images/user.png")} alt="User Avatar" />
                                    </div>
                                </div>
                                <div className="review-comment-container">
                                    <div className="review-comment">
                                        <p>{review.comment}</p>
                                    </div>
                                    <div className="review-btn">
                                        <button className="btn like-btn">
                                            <Image src={require("../../../assets/images/thumb_up.svg")} alt="Like Icon" />
                                            {review.likes}
                                        </button>
                                        <button className="btn dislike-btn">
                                            <Image src={require("../../../assets/images/thumb_down.svg")} alt="Dislike Icon" />
                                            {review.dislikes}
                                        </button>
                                        <button className="btn reply-btn">
                                            <Image src={require("../../../assets/images/reply.svg")} alt="Reply Icon" />
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bottom-btn-bar">
                    <div className="review-type-container">
                        <div className="user-profile-container">
                            <div className="user-avatar">
                                <Image src={require("../../../assets/images/user.png")} alt="User Avatar" />
                            </div>
                        </div>
                        <div className="review-comment-container">
                            <div className="review-comment">
                                <Form.Control type="text" placeholder="Write a comment ..." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Reviews