import { useModal } from "@/components/registerpop/page";
import Image from "next/image";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

// const reviews = [
//     {
//         id: 1,
//         avatar: "../../../assets/images/user.png",
//         comment: "The discussion on addiction was incredibly insightful. It helped me understand the complexities behind substance use and its impact on the brain.",
//         likes: 245,
//         dislikes: 24,
//     },
//     {
//         id: 2,
//         avatar: "../../../assets/images/user.png",
//         comment: "This content really opened my eyes to the effects of addiction.",
//         likes: 150,
//         dislikes: 10,
//     },
//     {
//         id: 3,
//         avatar: "../../../assets/images/user.png",
//         comment: "The discussion on addiction was incredibly insightful. It helped me understand the complexities behind substance use and its impact on the brain.",
//         likes: 245,
//         dislikes: 24,
//     },
//     {
//         id: 4,
//         avatar: "../../../assets/images/user.png",
//         comment: "The discussion on addiction was incredibly insightful. It helped me understand the complexities behind substance use and its impact on the brain.",
//         likes: 245,
//         dislikes: 24,
//     },
//     {
//         id: 5,
//         avatar: "../../../assets/images/user.png",
//         comment: "The discussion on addiction was incredibly insightful. It helped me understand the complexities behind substance use and its impact on the brain.",
//         likes: 245,
//         dislikes: 24,
//     },
// ];

function Reviews({getReview,handleSendComment, handleLikeReview, handleDislikeReview, handleReplayPost,comment}) {
    const [commentText, setCommentText] = useState("");
    // const [reply, setReply] = useState('');
  const { openModal,setIsOpen } = useModal(); 

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likes, setLikes] = useState(comment?.likes || 0);
  const [dislikes, setDislikes] = useState(comment?.dislikes || 0);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
      handleDislikeReview(comment?._id);
    }
  };

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
                                <Form.Control type="text" placeholder="Write a comment ..." 
                                  value={commentText}
                                  onChange={(e) => setCommentText(e.target.value)}
                                  onKeyDown={(e) => {
                                      if (e.key === "Enter") {
                                        handleSendComment(commentText, getReview[0]?._id); 
                                        setCommentText('')
                                      }
                                    }}

                                    onClick={(e) => {
                                        const token = localStorage.getItem("token");
                                        if (!token) {
                                        e.preventDefault(); // Prevents navigation
                                        setIsOpen(true);
                                        } else {
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
                    {getReview && getReview.map((comment,index) => (
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
                                            className={`btn like-btn ${liked ? "active" : ""}`}
                                            onClick={()=>{handleLike();handleLikeReview(comment?._id);
                                            }}
                                        >
                                            <Image
                                            src={require("../../../assets/images/thumb_up.svg")}
                                            alt="Like Icon"
                                            />
                                            {likes}
                                        </button>

                                        <button
                                            className={`btn dislike-btn ${disliked ? "active" : ""}`}
                                            onClick={()=>{handleDislike();handleDislikeReview(comment?._id)}}
                                        >
                                            <Image
                                            src={require("../../../assets/images/thumb_down.svg")}
                                            alt="Dislike Icon"
                                            />
                                            {dislikes}
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
                                <Form.Control type="text" placeholder="Write a comment ..." 
                                   value={commentText}
                                   onChange={(e) => setCommentText(e.target.value)}
                                   onKeyDown={(e) => {
                                       if (e.key === "Enter") {
                                         handleSendComment(commentText, getReview[0]?._id); 
                                       }
                                     }}
                                
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Reviews