// import { useEffect } from "react";
// import KakaoTalkIcon from "../../images/kakaotalkicon.png";
// import { useScript } from "../../useScript";
// import { FacebookIcon, FacebookShareButton, TwitterShareButton, TwitterIcon } from "react-share";
// import CopyToClipboard from "react-copy-to-clipboard";

import { useParams } from "react-router";
import ResultData from "../../data/ResultData";

export default function SocialShareButton() {
    const { param } = useParams();
    const currentUrl = window.location.href;

    const copyUrl = () => {
        if (navigator.share) {
            navigator.share({
                title: ResultData[param]['ogTitle'],
                text: ResultData[param]['ogDescription'],
                url: currentUrl
            })
        } else {
            alert("공유하기를 지원하지 않는 기기입니다.");
        }
    }

    // ****************kakao API*****************
    // const kakao = window.Kakao;
    // const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

    // useEffect(() => {
    //     if (status === "ready" && window.Kakao) {
    //         // 중복 initialization 방지
    //         if (!window.Kakao.isInitialized()) {
    //             // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
    //             window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    //         }
    //     }
    // }, [status]);

    // const createKakaoButton = () => {
    //     kakao.Link.sendScrap({
    //         requestUrl: currentUrl
    //     });
    // }

    return (
        <div>
            {/* <FacebookShareButton url={currentUrl} style={{ marginRight: '10px' }}>
                <FacebookIcon size={50} round={true} />
            </FacebookShareButton> */}
            {/* <TwitterShareButton url={currentUrl} style={{ marginRight: '10px' }}>
                <TwitterIcon size={50} round={true} />
            </TwitterShareButton> */}
            {/*************카카오톡 공유버튼*************
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
                </button>
            /> */}
            {/* <CopyToClipboard text={currentUrl} onCopy={() => alert("복사되었습니다")}> */}
                <button className="urlcopybutton" onClick={copyUrl} />
            {/* </CopyToClipboard> */}
        </div>
    )
}