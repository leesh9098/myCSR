import { useEffect } from "react";
import KakaoTalkIcon from "../../images/카카오톡.png";
import { useScript } from "../../useScript";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";

export default function SocialShareButton() {
    const currentUrl = window.location.href;
    const kakao = window.Kakao;
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

    useEffect(() => {
        if (status === "ready" && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
            }
        }
    }, [status]);

    const createKakaoButton = () => {
        kakao.Link.sendScrap({
            requestUrl: currentUrl
        });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookShareButton url={currentUrl}>
                <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
                <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
            <button
                style={{
                    width: '50px',
                    height: '50px',
                    padding: '0',
                    backgroundColor: 'transparent',
                    border: 'none'
                }}
                onClick={createKakaoButton}
            >
                <img
                    src={KakaoTalkIcon}
                    alt="카카오톡 공유하기"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%'
                    }}
                />
            </button>
        </div>
    )
}