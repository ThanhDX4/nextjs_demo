import Image from "next/image";

export const Template = (props) => {
    const {
        sliderReference,
        thumbnailReference,
        isResponsive = true,
        isReady,
        brandPanels,
    } = props;
    return (
        <div style={{ visibility: isReady ? "visible" : "hidden" }}>
            <div ref={sliderReference} className="keen-slider">
                {brandPanels?.map(
                    ({
                        alt = "",
                        brandPanelCd = "",
                        brandPanelNm,
                        imageSrc,
                        transitionDestUrl,
                        transitionMethodFlg,
                    }) => {
                        const elementHref =
                            isResponsive && transitionDestUrl?.sp !== "";
                        return (
                            <div
                                key={brandPanelNm}
                                className="keen-slider__slide"
                            >
                                <a
                                    rel={
                                        transitionMethodFlg
                                            ? "noopener noreferrer"
                                            : ""
                                    }
                                    target={
                                        transitionMethodFlg ? "_blank" : "_self"
                                    }
                                    href={
                                        elementHref
                                            ? transitionDestUrl?.sp
                                            : transitionDestUrl?.pc
                                    }
                                >
                                    <Image
                                        priority={true}
                                        alt={alt}
                                        src={imageSrc || ""}
                                        width={780}
                                        height={330}
                                    />
                                </a>
                            </div>
                        );
                    }
                )}
            </div>

            <div ref={thumbnailReference} className="keen-slider thumbnail">
                {brandPanels?.map(({ brandPanelNm, alt = "", imageSrc }) => (
                    <div key={brandPanelNm} className="keen-slider__slide">
                        <Image
                            priority={true}
                            alt={alt}
                            src={imageSrc || ""}
                            width={274}
                            height={116}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
