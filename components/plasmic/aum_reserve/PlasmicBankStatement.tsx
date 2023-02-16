// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4znbjXig9wF3fZoi7i7zbU
// Component: mH2Xk4XS77
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent

import { useScreenVariants as useScreenVariantseRArzcqQfCpp } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: eR-ARZCQQfCpp/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aum_reserve.module.css"; // plasmic-import: 4znbjXig9wF3fZoi7i7zbU/projectcss
import sty from "./PlasmicBankStatement.module.css"; // plasmic-import: mH2Xk4XS77/css

import VuesaxProfilsvgIcon from "./icons/PlasmicIcon__VuesaxProfilsvg"; // plasmic-import: 4oYJzIWe4E/icon
import VuesaxsvgIcon from "./icons/PlasmicIcon__Vuesaxsvg"; // plasmic-import: TysYCK0vNZ/icon
import VuesaxWalletsvgIcon from "./icons/PlasmicIcon__VuesaxWalletsvg"; // plasmic-import: bXFnY4C0B5/icon
import VuesaxbanksvgIcon from "./icons/PlasmicIcon__Vuesaxbanksvg"; // plasmic-import: 6X-29seKYp/icon
import DocumentText1SvgrepoComsvgIcon from "./icons/PlasmicIcon__DocumentText1SvgrepoComsvg"; // plasmic-import: YkH3mgn1Ey/icon
import ZoomIn2SvgrepoComsvgIcon from "./icons/PlasmicIcon__ZoomIn2SvgrepoComsvg"; // plasmic-import: F5OipPFaeq/icon
import DocumentDownloadSvgrepoComsvgIcon from "./icons/PlasmicIcon__DocumentDownloadSvgrepoComsvg"; // plasmic-import: FNB_D8yLl4/icon

export type PlasmicBankStatement__VariantMembers = {};
export type PlasmicBankStatement__VariantsArgs = {};
type VariantPropType = keyof PlasmicBankStatement__VariantsArgs;
export const PlasmicBankStatement__VariantProps = new Array<VariantPropType>();

export type PlasmicBankStatement__ArgsType = {};
type ArgPropType = keyof PlasmicBankStatement__ArgsType;
export const PlasmicBankStatement__ArgProps = new Array<ArgPropType>();

export type PlasmicBankStatement__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  navigationBar?: p.Flex<typeof NavigationBar>;
  img?: p.Flex<typeof p.PlasmicImg>;
  content?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  table?: p.Flex<"div">;
  tHeader?: p.Flex<"div">;
  tContent?: p.Flex<"div">;
  docs?: p.Flex<"div">;
  tContent2?: p.Flex<"div">;
  docs2?: p.Flex<"div">;
  tContent3?: p.Flex<"div">;
  docs3?: p.Flex<"div">;
  tContent4?: p.Flex<"div">;
  docs4?: p.Flex<"div">;
};

export interface DefaultBankStatementProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicBankStatement__RenderFunc(props: {
  variants: PlasmicBankStatement__VariantsArgs;
  args: PlasmicBankStatement__ArgsType;
  overrides: PlasmicBankStatement__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseRArzcqQfCpp()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          {true ? (
            <div
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames(projectcss.all, sty.header)}
            >
              <NavigationBar
                data-plasmic-name={"navigationBar"}
                data-plasmic-override={overrides.navigationBar}
                brand={
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__vHer3
                    )}
                    component={Link}
                    href={"#" as const}
                    platform={"nextjs"}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"24px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      src={{
                        src: "/plasmic/aum_reserve/images/auMsvg.svg",
                        fullWidth: 300,
                        fullHeight: 105,
                        aspectRatio: 2.846154
                      }}
                    />
                  </p.PlasmicLink>
                }
                className={classNames("__wab_instance", sty.navigationBar)}
                closeButton={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qeAbj)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    src={"https://static1.plasmic.app/close.svg" as const}
                  />
                }
                itemsGap={8 as const}
                menuItems={
                  <VuesaxProfilsvgIcon
                    className={classNames(projectcss.all, sty.svg__cHmjY)}
                    role={"img"}
                  />
                }
                openButton={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___0Jovn)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    src={"https://static1.plasmic.app/menu.svg" as const}
                  />
                }
                responsiveBreakpoint={768 as const}
              />
            </div>
          ) : null}

          <div
            data-plasmic-name={"content"}
            data-plasmic-override={overrides.content}
            className={classNames(projectcss.all, sty.content)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__b57MJ)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__o66SK)}
                >
                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__dF6ND
                    )}
                    component={Link}
                    href={`/`}
                    platform={"nextjs"}
                  >
                    <VuesaxsvgIcon
                      className={classNames(projectcss.all, sty.svg__kxb0H)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nDgJt
                      )}
                    >
                      {"Dashboard"}
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___59W6C
                    )}
                    component={Link}
                    href={`/account-list`}
                    platform={"nextjs"}
                  >
                    <VuesaxWalletsvgIcon
                      className={classNames(projectcss.all, sty.svg__wbPgC)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fYhvm
                      )}
                    >
                      {"Account List"}
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__tfw3T
                    )}
                    component={Link}
                    href={`/bank-statement`}
                    platform={"nextjs"}
                  >
                    <VuesaxbanksvgIcon
                      className={classNames(projectcss.all, sty.svg__u9Jo0)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uSmGc
                      )}
                    >
                      {"Bank Report"}
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.column__jfHe)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___2K5T2)}
                  >
                    <h4
                      data-plasmic-name={"h4"}
                      data-plasmic-override={overrides.h4}
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4
                      )}
                    >
                      {"Monthly Bank Reports"}
                    </h4>
                  </div>
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"table"}
                    data-plasmic-override={overrides.table}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.table)}
                  >
                    <div
                      data-plasmic-name={"tHeader"}
                      data-plasmic-override={overrides.tHeader}
                      className={classNames(projectcss.all, sty.tHeader)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__n49Vu
                        )}
                      >
                        {"Bank Statement"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___1Swa6
                        )}
                      >
                        {"Date"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sXbid
                        )}
                      >
                        {"Action"}
                      </div>
                    </div>

                    <div
                      data-plasmic-name={"tContent"}
                      data-plasmic-override={overrides.tContent}
                      className={classNames(projectcss.all, sty.tContent)}
                    >
                      {true ? (
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"docs"}
                          data-plasmic-override={overrides.docs}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.docs)}
                        >
                          <DocumentText1SvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__gpr6S
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___9AuJy
                            )}
                          >
                            {"Bank Statement"}
                          </div>
                        </p.Stack>
                      ) : null}

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sBv5K
                        )}
                      >
                        {"Januari, 2022"}
                      </div>

                      {true ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__yiV7B
                          )}
                        >
                          <ZoomIn2SvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___7Qxma
                            )}
                            role={"img"}
                          />

                          <DocumentDownloadSvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__oOCf
                            )}
                            role={"img"}
                          />
                        </p.Stack>
                      ) : null}
                    </div>

                    <div
                      data-plasmic-name={"tContent2"}
                      data-plasmic-override={overrides.tContent2}
                      className={classNames(projectcss.all, sty.tContent2)}
                    >
                      {true ? (
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"docs2"}
                          data-plasmic-override={overrides.docs2}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.docs2)}
                        >
                          <DocumentText1SvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__yPfnf
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__zpdBc
                            )}
                          >
                            {"Bank Statement"}
                          </div>
                        </p.Stack>
                      ) : null}

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jSAbD
                        )}
                      >
                        {"February, 2022"}
                      </div>

                      {true ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__p6D8V
                          )}
                        >
                          <ZoomIn2SvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___6JueU
                            )}
                            role={"img"}
                          />

                          <DocumentDownloadSvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__mOtRc
                            )}
                            role={"img"}
                          />
                        </p.Stack>
                      ) : null}
                    </div>

                    <div
                      data-plasmic-name={"tContent3"}
                      data-plasmic-override={overrides.tContent3}
                      className={classNames(projectcss.all, sty.tContent3)}
                    >
                      {true ? (
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"docs3"}
                          data-plasmic-override={overrides.docs3}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.docs3)}
                        >
                          <DocumentText1SvgrepoComsvgIcon
                            className={classNames(projectcss.all, sty.svg__asv)}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__nElKw
                            )}
                          >
                            {"Bank Statement"}
                          </div>
                        </p.Stack>
                      ) : null}

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wwqSu
                        )}
                      >
                        {"March, 2022"}
                      </div>

                      {true ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___1NSs2
                          )}
                        >
                          <ZoomIn2SvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__li9Xj
                            )}
                            role={"img"}
                          />

                          <DocumentDownloadSvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__qZvkt
                            )}
                            role={"img"}
                          />
                        </p.Stack>
                      ) : null}
                    </div>

                    <div
                      data-plasmic-name={"tContent4"}
                      data-plasmic-override={overrides.tContent4}
                      className={classNames(projectcss.all, sty.tContent4)}
                    >
                      {true ? (
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"docs4"}
                          data-plasmic-override={overrides.docs4}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.docs4)}
                        >
                          <DocumentText1SvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__kxCu9
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___6H2Af
                            )}
                          >
                            {"Bank Statement"}
                          </div>
                        </p.Stack>
                      ) : null}

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8P9YC
                        )}
                      >
                        {"June, 2022"}
                      </div>

                      {true ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ajopl
                          )}
                        >
                          <ZoomIn2SvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__oFItA
                            )}
                            role={"img"}
                          />

                          <DocumentDownloadSvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__lzEVb
                            )}
                            role={"img"}
                          />
                        </p.Stack>
                      ) : null}
                    </div>
                  </p.Stack>
                ) : null}
              </div>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "navigationBar",
    "img",
    "content",
    "columns",
    "h4",
    "table",
    "tHeader",
    "tContent",
    "docs",
    "tContent2",
    "docs2",
    "tContent3",
    "docs3",
    "tContent4",
    "docs4"
  ],
  header: ["header", "navigationBar", "img"],
  navigationBar: ["navigationBar", "img"],
  img: ["img"],
  content: [
    "content",
    "columns",
    "h4",
    "table",
    "tHeader",
    "tContent",
    "docs",
    "tContent2",
    "docs2",
    "tContent3",
    "docs3",
    "tContent4",
    "docs4"
  ],
  columns: [
    "columns",
    "h4",
    "table",
    "tHeader",
    "tContent",
    "docs",
    "tContent2",
    "docs2",
    "tContent3",
    "docs3",
    "tContent4",
    "docs4"
  ],
  h4: ["h4"],
  table: [
    "table",
    "tHeader",
    "tContent",
    "docs",
    "tContent2",
    "docs2",
    "tContent3",
    "docs3",
    "tContent4",
    "docs4"
  ],
  tHeader: ["tHeader"],
  tContent: ["tContent", "docs"],
  docs: ["docs"],
  tContent2: ["tContent2", "docs2"],
  docs2: ["docs2"],
  tContent3: ["tContent3", "docs3"],
  docs3: ["docs3"],
  tContent4: ["tContent4", "docs4"],
  docs4: ["docs4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  navigationBar: typeof NavigationBar;
  img: typeof p.PlasmicImg;
  content: "div";
  columns: "div";
  h4: "h4";
  table: "div";
  tHeader: "div";
  tContent: "div";
  docs: "div";
  tContent2: "div";
  docs2: "div";
  tContent3: "div";
  docs3: "div";
  tContent4: "div";
  docs4: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBankStatement__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBankStatement__VariantsArgs;
    args?: PlasmicBankStatement__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBankStatement__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBankStatement__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBankStatement__ArgProps,
          internalVariantPropNames: PlasmicBankStatement__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBankStatement__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBankStatement";
  } else {
    func.displayName = `PlasmicBankStatement.${nodeName}`;
  }
  return func;
}

export const PlasmicBankStatement = Object.assign(
  // Top-level PlasmicBankStatement renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    navigationBar: makeNodeComponent("navigationBar"),
    img: makeNodeComponent("img"),
    content: makeNodeComponent("content"),
    columns: makeNodeComponent("columns"),
    h4: makeNodeComponent("h4"),
    table: makeNodeComponent("table"),
    tHeader: makeNodeComponent("tHeader"),
    tContent: makeNodeComponent("tContent"),
    docs: makeNodeComponent("docs"),
    tContent2: makeNodeComponent("tContent2"),
    docs2: makeNodeComponent("docs2"),
    tContent3: makeNodeComponent("tContent3"),
    docs3: makeNodeComponent("docs3"),
    tContent4: makeNodeComponent("tContent4"),
    docs4: makeNodeComponent("docs4"),

    // Metadata about props expected for PlasmicBankStatement
    internalVariantProps: PlasmicBankStatement__VariantProps,
    internalArgProps: PlasmicBankStatement__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBankStatement;
/* prettier-ignore-end */
