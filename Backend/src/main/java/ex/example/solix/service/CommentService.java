package ex.example.solix.service;

import ex.example.solix.models.Comment;

public interface CommentService {
    public Comment createComment(Comment comment, Long postId, Long userId) throws Exception;
    public Comment LikeComment(Long commentId, long userId) throws Exception;
    public Comment findComment(Long commentId) throws Exception;


}
