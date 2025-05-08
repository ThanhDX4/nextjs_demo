import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

import { SliderPlugin, ThumbnailPlugin } from "./puglinSlider";

const responsiveSize = 768;
const time = 3000;

export const useBrandPanelArea = () => {
    const [isResponsive, setIsResponsive] = useState(false);
    const [isReady, setIsReady] = useState(false);
    // MEMO: ブラパネの登録が3枚未満だと表示が崩れるが、定常的に最低6枚程度は存在する運用のためそのままとしている
    const [sliderReference, instanceReference] = useKeenSlider(
        {
            breakpoints: {
                "(max-width: 768px)": {
                    drag: true,
                    slides: {
                        origin: "center",
                        perView: 1.2,
                        spacing: 12,
                    },
                },
            },
            drag: false,
            loop: true,
            renderMode: "performance",
            slides: {
                origin: "center",
                perView: 1.4,
                spacing: 16,
            },
        },
        [SliderPlugin(time)]
    );
    const [thumbnailReference] = useKeenSlider(
        {
            renderMode: "performance",
            slides: {
                perView: "auto",
            },
        },
        [ThumbnailPlugin(instanceReference)]
    );

    useEffect(() => {
        const hasSize = window.innerWidth < responsiveSize;

        if (hasSize) {
            setIsResponsive(!isResponsive);
        } else {
            setIsResponsive(isResponsive);
        }
        setIsReady(true);

        // レンダリング時に一度だけ実行させる
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isReady,
        isResponsive,
        sliderReference,
        thumbnailReference,
    };
};
