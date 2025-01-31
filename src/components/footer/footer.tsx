"use client"

import styles from "@/components/footer/footer.module.scss";
import Icon from "@/components/svg_icon/svg_icon";
// import SocialIcon from "@/components/social_icon/social_icon";
import React from 'react';
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();


export default function Navbar() {
  const currentYear = new Date().getFullYear();
  // const updateDate = "01.13.2025";
  const publishDate = new Date(publicRuntimeConfig.publishDate).toLocaleDateString();
  const buildVersion = publicRuntimeConfig.buildVersion;
  // const gitCommit = publicRuntimeConfig.gitCommit;


  return (
    <div className="flex justify-center">
      <div className={`page-width ${styles.footer}`}>
        <div className={styles.footer_left}>
          <div className={styles.left_top}>
            <h6>Design and code by</h6>
            <div className={styles.footer_logo}>
             <Icon path="./icons/dwlogo.svg"  height={16} fill="var(--foreground)" />
            </div>
            <h6>Douglas Welcome</h6>
          </div>
          <div>
            <h6>Copyright © {currentYear} • Updated {publishDate} • v.{buildVersion}</h6>
          </div>
        </div>
        <div className={styles.socialicons}>
          {/* <SocialIcon />
          <SocialIcon />
          <SocialIcon /> */}
        </div>
      </div>
    </div>
  );
}
