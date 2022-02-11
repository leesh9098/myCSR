// import { useEffect } from "react";
// import KakaoTalkIcon from "../../images/kakaotalkicon.png";
// import { useScript } from "../../useScript";
import { FacebookIcon, FacebookShareButton } from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";

export default function SocialShareButton() {

    const currentUrl = window.location.href;

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
        <div style={{
            display: 'flex',
            width: '320px',
            justifyContent: 'center'
        }}>
            <FacebookShareButton url={currentUrl} style={{ marginRight: '10px' }}>
                <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
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
            <CopyToClipboard text={currentUrl} onCopy={() => alert("복사되었습니다")}>
                <button
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'rgb(255, 255, 255)',
                        width: '50px',
                        height: '50px',
                        padding: '0',
                        border: 'none',
                        borderRadius: '50%',
                        backgroundColor: 'rgb(150, 0, 255)'
                    }}
                >
                    URL
                </button>
            </CopyToClipboard>
        </div>
    )
}