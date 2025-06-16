export const onPreBuild = function({netlifyConfig}) {
    netlifyConfig.redirects.push({
        from: "/test",
        to: "/image-cdn",
        status: 301,
        force: true,
      });
  }