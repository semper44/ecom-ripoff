import React from 'react';
import { FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon, 
} from 'react-share';
import styles from "./social.module.css"

const SocialMediaShare = () => {
    return (
    <div className={styles.socialmediaparent}>
        <div className={styles.children}>
            <FacebookShareButton
                url={'https://www.example.com'}
                quote={'Dummy text!'}
                hashtag="#muo"
                >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </div>
        <div className={styles.children}>
            <TwitterShareButton
                url={'https://www.example.com'}
                quote={'Dummy text!'}
                hashtag="#muo">
            <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
        <div className={styles.children}>
            <WhatsappShareButton
                url={'https://www.example.com'}
                quote={'Dummy text!'}
                hashtag="#muo">
            <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    </div>
);
};

export default SocialMediaShare;