import { addons } from '@storybook/addons';
import { create } from "@storybook/theming";

const theme = create({
    base: "dark",
    brandTitle: "Ionic React Photo Viewer",
    brandUrl: "https://github.com/codesyntax/ionic-react-photo-viewer"
});

addons.setConfig({
    theme
});
