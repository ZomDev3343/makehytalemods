function getAssetPath(path: string) {
    return "./assets/" + path;
}

function getImagePath(path: string) {
    return getAssetPath("images/" + path);
}

export const IMAGES = {
    BACKGROUND_CARROUSEL: [
        getImagePath("wallpapers/wp1.jpg"),
        getImagePath("wallpapers/wp2.png"),
        getImagePath("wallpapers/wp3.jpg"),
        getImagePath("wallpapers/wp4.png")
    ]
};