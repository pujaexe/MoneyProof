// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WalletSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WalletSvgrepoCom2SvgIcon(props: WalletSvgrepoCom2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 511.999 511.999"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"333.027"} cy={"66.204"} r={"66.204"}></circle>

      <path
        d={
          "M182.511 75.18c-36.564 0-66.204 29.64-66.204 66.204 0 2.809.195 5.571.535 8.288H248.18c.339-2.716.535-5.479.535-8.288 0-36.563-29.64-66.204-66.204-66.204zm130.428 184.904h142.506v-54.759c0-13.46-10.912-24.37-24.37-24.37H46.553c-13.46 0-24.37 10.912-24.37 24.37v282.304c0 13.46 10.91 24.37 24.37 24.37h384.522c13.46 0 24.37-10.911 24.37-24.37V432.87H312.939c-29.357 0-53.242-23.884-53.242-53.242v-66.302c-.001-29.358 23.883-53.242 53.242-53.242z"
        }
      ></path>

      <path
        d={
          "M469.851 293.361H312.939c-11.027 0-19.965 8.938-19.965 19.965v66.302c0 11.027 8.938 19.965 19.965 19.965h156.912c11.027 0 19.965-8.938 19.965-19.965v-66.302c0-11.027-8.94-19.965-19.965-19.965zm-123.883 76.551c-12.943 0-23.435-10.492-23.435-23.435 0-12.943 10.492-23.435 23.435-23.435s23.435 10.492 23.435 23.435c0 12.943-10.492 23.435-23.435 23.435z"
        }
      ></path>
    </svg>
  );
}

export default WalletSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
