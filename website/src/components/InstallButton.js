import React from 'react';
import clsx from 'clsx'
import Link from "@docusaurus/core/lib/client/exports/Link";
import Translate from "@docusaurus/core/lib/client/exports/Translate";

import styles from './InstallButton.module.css'

export default function InstallButton({url, event}) {
  return (
    <div className={clsx(styles.installButton)}>
      <a href={url} target="install_frame"
         className="button button--info button--outline button--install button--lg"
         onClick={event ? () => window.fathom.trackGoal(event, 0) : undefined}>
        <Translate>Install</Translate>
      </a>
      <iframe height="0" width="0" title="Install" name="install_frame"></iframe>
    </div>
  );
}
