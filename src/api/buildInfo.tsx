// pages/api/buildInfo.ts

import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { publicRuntimeConfig } = getConfig();
  res.status(200).json({
    publishDate: publicRuntimeConfig.publishDate,
    buildVersion: publicRuntimeConfig.buildVersion,
    gitCommit: publicRuntimeConfig.gitCommit,
  });
}
