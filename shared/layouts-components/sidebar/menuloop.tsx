
import { forwardRef, Fragment } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeChanger } from "@/shared/redux/action";

const Menuloop = forwardRef(({ MenuItems, toggleSidemenu, local_varaiable, level, HoverToggleInnerMenuFn }: any, ref: any) => {
  const router = useRouter();

  const showSidebarIconsOnlyOnToggle =
    typeof local_varaiable?.toggled === "string" &&
    (local_varaiable.toggled.includes("closed") ||
      local_varaiable.toggled === "icon-overlay-close" ||
      local_varaiable.toggled === "icon-text-close" ||
      local_varaiable.toggled === "double-menu-open");

  const handleClick = (event: any) => {
    event.preventDefault();
  };

  const prefetchRoute = (path: string) => {
    if (!path || path.startsWith("#!")) {
      return;
    }

    const normalizedPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
    router.prefetch(normalizedPath);
  };

  return (
    <Fragment>
      <Link href="#!" scroll={false} className={`side-menu__item ${MenuItems?.selected ? "active" : ""}`}
        onClick={(event) => { event.preventDefault(); toggleSidemenu(event, MenuItems, undefined, true); }} onMouseEnter={(event) => HoverToggleInnerMenuFn(event, MenuItems)}>
        {showSidebarIconsOnlyOnToggle ? MenuItems.icon : ""}
        <span className={`${level == 1 ? "side-menu__label" : ""}`}> {MenuItems.title} {MenuItems.badgetxt ? (<span className={MenuItems.class}> {MenuItems.badgetxt} </span>
        ) : (
          ""
        )}
        </span>
        <i className="ri-arrow-down-s-line side-menu__angle"></i>
      </Link>
      <ul ref={ref} className={`slide-menu child${level}  ${MenuItems.active ? 'double-menu-active' : ''} ${MenuItems?.dirchange ? "force-left" : ""} `} style={MenuItems.active ? { display: "block" } : { display: "none" }}>
        {level <= 1 ? <li className="slide side-menu__label1">
          <Link href="#!" scroll={false}>{MenuItems.title}</Link>
        </li> : ""}
        {MenuItems.children.map((firstlevel: any, index: any) =>
          <li className={`${firstlevel.menutitle ? 'slide__category' : ''} ${firstlevel?.type == 'empty' ? 'slide' : ''} ${firstlevel?.type == 'link' ? 'slide' : ''} ${firstlevel?.type == 'sub' ? 'slide has-sub' : ''} ${firstlevel?.active ? 'open' : ''} ${firstlevel?.selected ? 'active' : ''}`} key={index}>
            {firstlevel.type === "link" ?
              <Link
                href={firstlevel.path}
                className={`side-menu__item ${firstlevel.selected ? 'active' : ''}`}
                onMouseEnter={() => prefetchRoute(firstlevel.path)}
              >
                <span className=""> {firstlevel.title} {firstlevel.badgetxt ? (<span className={firstlevel.class}> {firstlevel.badgetxt}</span>
                ) : (
                  ""
                )}
                </span>
              </Link>
              : ""}
            {firstlevel.type === "empty" ?
              <Link href="#!" className='side-menu__item' onClick={handleClick}> <span className=""> {firstlevel.title} {firstlevel.badgetxt ? (<span className={firstlevel.class}> {firstlevel.badgetxt} </span>
              ) : (
                ""
              )}
              </span>
              </Link>
              : ""}
            {firstlevel.type === "sub" ?
              <Menuloop MenuItems={firstlevel} toggleSidemenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} level={level + 1} />
              : ''}

          </li>
        )}

      </ul>
    </Fragment>
  );
})

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Menuloop);
