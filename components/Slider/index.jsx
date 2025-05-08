import { useBrandPanelArea } from "./modules/useKeenSlider";
import "keen-slider/keen-slider.min.css";

import { Template } from "./Template";
export const BrandPanelArea = () => {
    const brandPanelArea = useBrandPanelArea();
    const brandPanels = [
        {
            alt: "簡単だから毎日続く、サプリのお供に健康生活アプリ Comado 今すぐ無料ダウンロード",
            brandPanelCd: "0001_mock",
            brandPanelNm: "comado_dummy",
            imageSrc: "/static/images/brand_panel/comado.webp",
            transitionDestUrl: {
                pc: "/static/images/brand_panel/comado.webp",
                sp: "/static/images/brand_panel/comado.webp",
            },
            transitionMethodFlg: true,
        },
        {
            alt: "抽選で10,000名様無料お試しキャンペーン実施中詳しくはこちら▶ ※1 出典：H・Bフーズマーケティング便覧2006～2023 　機能志向食品編　《DHA・EPA成分カテゴリー内シェア※2015年～2021年売上金額（確定）、及び、DHA、EPA成分カテゴリー内合算シェア※2004年～2014年売上金額（確定）》　（株）富士経済",
            brandPanelCd: "0002_mock",
            brandPanelNm: "dha_branding_campaign_dummy",
            imageSrc: "/static/images/brand_panel/dha_branding_campaign.webp",
            transitionDestUrl: {
                pc: "/static/images/brand_panel/dha_branding_campaign.webp",
                sp: "/static/images/brand_panel/dha_branding_campaign.webp",
            },
            transitionMethodFlg: true,
        },
        {
            alt: "DHA&EPA＋セサミンEX 生きるを支える、基礎健康力。DHAサプリメント市場1８年連続売上No.1✳︎ ✳︎出典：H・Bフーズマーケティング便覧2006～2023 機能志向食品編《DHA・EPA成分カテゴリー内シェア※2015年～2020年売上金額（確定）、及び、DHA、EPA成分カテゴリー内合算シェア※2004年～2014年売上金額（確定）》(株)富士経済 詳しくはこちら",
            brandPanelCd: "0003_mock",
            brandPanelNm: "dha_sesamin_ex_dummy",
            imageSrc: "/static/images/brand_panel/dha_branding_campaign.webp",
            transitionDestUrl: {
                pc: "/static/images/brand_panel/dha_sesamin_ex.webp",
                sp: "/static/images/brand_panel/dha_sesamin_ex.webp",
            },
            transitionMethodFlg: true,
        },
        {
            alt: "ハーブティー販売開始　健康の土台をつくるハーブのチカラを試してみませんか？あなたにピッタリのハーブティがきっと見つかる。詳しくはこちら",
            brandPanelCd: "0004_mock",
            brandPanelNm: "herbtea_dummy",
            imageSrc: "/static/images/brand_panel/herbtea.webp",
            transitionDestUrl: {
                pc: "/static/images/brand_panel/herbtea.webp",
                sp: "/static/images/brand_panel/herbtea.webp",
            },
            transitionMethodFlg: true,
        },
    ];

    return <Template {...brandPanelArea} brandPanels={brandPanels} />;
};
