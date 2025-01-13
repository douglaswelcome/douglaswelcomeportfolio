// pages/api/buildInfo.ts

import getConfig from 'next/config';

export default function handler(req, res) {
  const { publicRuntimeConfig } = getConfig();
  res.status(200).json({
    publishDate: publicRuntimeConfig.publishDate,
    buildVersion: publicRuntimeConfig.buildVersion,
    gitCommit: publicRuntimeConfig.gitCommit,
  });
}
