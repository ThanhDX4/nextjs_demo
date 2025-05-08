export const ThumbnailPlugin = (mainReference) => (slider) => {
    slider.on("created", () => {
        if (!mainReference.current) return;
        addActive(slider, slider.track.details.rel);
        addClickEvents(slider, mainReference);
        mainReference.current.on("animationStarted", (main) => {
            removeActive(slider);
            const indexZero = 0;
            const next = main.animator.targetIdx || indexZero;
            addActive(slider, main.track.absToRel(next));
            slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
        });
    });
};

export const SliderPlugin = (time) => (slider) => {
    let timeout;
    let mouseOver = false;
    const clearNextTimeout = () => {
        clearTimeout(timeout);
    };
    const nextTimeout = () => {
        clearTimeout(timeout);

        if (mouseOver) return;
        timeout = setTimeout(() => {
            slider.next();
        }, time);
    };

    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
        });
        nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
};
