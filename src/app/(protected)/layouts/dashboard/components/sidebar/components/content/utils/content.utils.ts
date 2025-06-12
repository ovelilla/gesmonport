// Types
import { NavigationType } from "../types/content.component.types";

const isActiveItem = ({
  item,
  pathname,
}: {
  item: NavigationType;
  pathname: string;
}): boolean => {
  return !!item.url && pathname === item.url;
};

const hasActiveChild = ({
  item,
  pathname,
}: {
  item: NavigationType;
  pathname: string;
}): boolean => {
  if (
    item.url &&
    (pathname === item.url || pathname.startsWith(`${item.url}/`))
  ) {
    return true;
  }

  if (item.items) {
    return item.items.some((child) =>
      hasActiveChild({ item: child, pathname }),
    );
  }

  return false;
};

export { isActiveItem, hasActiveChild };
