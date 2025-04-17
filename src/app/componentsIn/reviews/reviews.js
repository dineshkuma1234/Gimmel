import { useModal } from "@/components/registerpop/page";
import Image from "next/image";
import React, { useState } from "react";
import { Form } from "react-bootstrap";


function Reviews({ getReview, handleSendComment, handleLikeReview, handleDislikeReview }) {
    const [commentText, setCommentText] = useState("");
    const { setIsOpen } = useModal(); 

    const [likedComments, setLikedComments] = useState({});
    const [dislikedComments, setDislikedComments] = useState({});

    const [likeCounts, setLikeCounts] = useState(() => {
        const counts = {};
        Array.isArray(getReview) && getReview.forEach(comment => {
            counts[comment._id] = comment.likes ?? 0;
        });
        return counts;
    });

    const [dislikeCounts, setDislikeCounts] = useState(() => {
        const counts = {};
        Array.isArray(getReview) && getReview.forEach(comment => {
            counts[comment._id] = comment.dislikes ?? 0;
        });
        return counts;
    });

    // console.log(getReview, "getReview");
    const handleLike = (commentId) => {
        if (likedComments[commentId]) return;

        setLikedComments(prev => ({ ...prev, [commentId]: true }));
        setDislikedComments(prev => ({ ...prev, [commentId]: false }));

        setLikeCounts(prev => ({
            ...prev,
            [commentId]: (prev[commentId] || 0) + 1,
        }));

        if (dislikeCounts[commentId]) {
            setDislikeCounts(prev => ({
                ...prev,
                [commentId]: Math.max(prev[commentId] - 1, 0)
            }));
        }

        handleLikeReview(commentId);
    };

    const handleDislike = (commentId) => {
        if (dislikedComments[commentId]) return;

        setDislikedComments(prev => ({ ...prev, [commentId]: true }));
        setLikedComments(prev => ({ ...prev, [commentId]: false }));

        setDislikeCounts(prev => ({
            ...prev,
            [commentId]: (prev[commentId] || 0) + 1,
        }));

        if (likeCounts[commentId]) {
            setLikeCounts(prev => ({
                ...prev,
                [commentId]: Math.max(prev[commentId] - 1, 0)
            }));
        }

        handleDislikeReview(commentId);
    };

    return (
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
                            <Form.Control
                                type="text"
                                placeholder="Write a comment ..."
                                value={commentText}
                                onChange={(e) => {
                                    const token = localStorage.getItem("token");
                                    if (token) setCommentText(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSendComment(commentText, getReview[0]?._id);
                                        setCommentText("");
                                    }
                                }}
                                onClick={(e) => {
                                    const token = localStorage.getItem("token");
                                    if (!token) {
                                        e.preventDefault();
                                        setIsOpen(true);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
            </div>

            <div className="review-list-container">
                <div className="review-list">
                    {getReview && getReview.map((comment, index) => (
                        <div className="review-item" key={index}>
                            <div className="user-profile-container">
                                <div className="user-avatar">
                                    <Image src={require("../../../assets/images/user.png")} alt="User Avatar" />
                                </div>
                            </div>
                            <div className="review-comment-container">
                                <div className="review-comment">
                                    <p>{comment?.content}</p>
                                </div>
                                <div className="review-btn">
                                    <button
                                        className={`btn like-btn ${likedComments[comment._id] ? "active" : ""}`}
                                        onClick={() => handleLike(comment._id)}
                                    >
                                        <Image src={require("../../../assets/images/thumb_up.svg")} alt="Like Icon" />
                                        {likeCounts[comment._id] ?? 0}
                                    </button>
                                    <button
                                        className={`btn dislike-btn ${dislikedComments[comment._id] ? "active" : ""}`}
                                        onClick={() => handleDislike(comment._id)}
                                    >
                                        <Image src={require("../../../assets/images/thumb_down.svg")} alt="Dislike Icon" />
                                        {dislikeCounts[comment._id] ?? 0}
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
                            <Form.Control
                                type="text"
                                placeholder="Write a comment ..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSendComment(commentText, getReview[0]?._id);
                                        setCommentText("");
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
