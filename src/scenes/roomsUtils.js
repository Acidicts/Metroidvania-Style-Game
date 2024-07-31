export function setBackgroundColor(k, hexColorCode) {
    k.add([
        k.rect(k.width(), k.height()),
        k.color(hexColorCode),
        k.fixed(),
    ]);
};