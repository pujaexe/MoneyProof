// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomIn2SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomIn2SvgrepoComsvgIcon(props: ZoomIn2SvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.035 18.069a7.981 7.981 0 003.938-1.035l3.332 3.332a2.164 2.164 0 003.061-3.061l-3.332-3.332a8.032 8.032 0 00-12.68-9.619 8.034 8.034 0 005.681 13.715zM5.768 5.768A6.033 6.033 0 114 10.035a5.989 5.989 0 011.768-4.267zm.267 4.267a1 1 0 011-1h2v-2a1 1 0 012 0v2h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2h-2a1 1 0 01-1-1z"
        }
      ></path>
    </svg>
  );
}

export default ZoomIn2SvgrepoComsvgIcon;
/* prettier-ignore-end */
