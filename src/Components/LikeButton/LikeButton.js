import React, { useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const LikeButton = () => {
    const [ like, setLike ] = useState('');
    const handleLike = () => {
      const color = like ? '' : 'primary';
      setLike(color);
    }
    return (
        <div>
             <ThumbUpAltIcon onClick={handleLike} color={like} style={{fontSize: '50px', margin: '50px'}}></ThumbUpAltIcon>
        </div>
    );
};

export default LikeButton;