// @ts-check

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.tsx");
export default withNextIntl();
