import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Use a static locale since we only support Portuguese
  const locale = 'pt';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
