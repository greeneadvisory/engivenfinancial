export const STANDARD_PAGE_SIZE_OPTIONS = [10, 50, 100, 500] as const;

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = STANDARD_PAGE_SIZE_OPTIONS[0];

type ParsePaginationParamsOptions = {
  pageParam: string | null;
  perPageParam: string | null;
  defaultPerPage?: number;
  maxPerPage?: number;
};

export const parsePaginationParams = ({
  pageParam,
  perPageParam,
  defaultPerPage = DEFAULT_PAGE_SIZE,
  maxPerPage = 500,
}: ParsePaginationParamsOptions) => {
  const parsedPage = Number(pageParam || String(DEFAULT_PAGE));
  const parsedPerPage = Number(perPageParam || String(defaultPerPage));

  const page = Number.isFinite(parsedPage) && parsedPage > 0 ? Math.floor(parsedPage) : DEFAULT_PAGE;
  const perPageBase =
    Number.isFinite(parsedPerPage) && parsedPerPage > 0
      ? Math.floor(parsedPerPage)
      : defaultPerPage;
  const perPage = Math.min(maxPerPage, perPageBase);

  return {
    page,
    perPage,
    offset: (page - 1) * perPage,
  };
};

export const getTotalPages = (totalCount: number, perPage: number) => {
  if (perPage <= 0) {
    return 1;
  }

  return Math.max(1, Math.ceil(totalCount / perPage));
};
